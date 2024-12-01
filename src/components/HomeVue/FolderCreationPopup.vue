<template>
  <div v-if="show" class="popup">
    <div class="popup-content">
      <button class="close-button" @click="close">x</button>
      <h2 class="title">Select Import Folder</h2>

      <div class="folder-browser">
        <div v-for="item in folderStructure" :key="item.path" class="folder-item">
          <div 
            class="folder-row"
            :class="{ 'selected': selectedFolder === item.path }"
            @click="toggleFolder(item)"
          >
            <span class="expand-icon">
              {{ item.isExpanded ? '▼' : '▶' }}
            </span>
            {{ getDisplayName(item.path) }}
          </div>

          <!-- Recursive rendering of subfolders -->
          <div v-if="item.isExpanded && item.subfolders" class="subfolder-container">
            <div 
              v-for="subfolder in item.subfolders" 
              :key="subfolder.path"
              class="folder-row"
              :class="{ 'selected': selectedFolder === subfolder.path }"
              @click.stop="selectFolder(subfolder.path)"
            >
              {{ getDisplayName(subfolder.path) }}
            </div>
          </div>
        </div>
      </div>

      <div class="button-group">
        <button class="cancel" @click="close">Cancel</button>
        <button 
          class="select"
          :disabled="!selectedFolder"
          @click="submitSelectedFolder"
        >
          Select
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface FolderAndFiles {
  files: number;
  folders: number;
}

interface DriveInfo {
  path: string;
  isAccessible: boolean;
  sizes: FolderAndFiles;
  type: string;
}

interface FolderInfo {
  path: string;
  isAccessible: boolean;
  sizes: FolderAndFiles;
}

interface FolderStructureItem {
  path: string;
  isExpanded: boolean;
  subfolders?: FolderInfo[];
}

const props = defineProps<{
  show: boolean;
}>();

const emit = defineEmits<{
  (event: "toggle-visibility", show: boolean): void;
}>();

const folderStructure = ref<FolderStructureItem[]>([]);
const selectedFolder = ref<string | null>(null);

// Load initial drives/mount points
const loadDrives = async () => {
  try {
    const response = await fetch('/api/folders/Drives');
    if (!response.ok) throw new Error('Failed to load drives');
    const drives: DriveInfo[] = await response.json();
    
    folderStructure.value = drives.map(drive => ({
      path: drive.path,
      isExpanded: false
    }));
  } catch (error) {
    console.error('Error loading drives:', error);
  }
};

// Load subfolders for a specific path
const loadSubfolders = async (path: string) => {
  try {
    const response = await fetch(`/api/folders?path=${encodeURIComponent(path)}`);
    if (!response.ok) throw new Error('Failed to load subfolders');
    return await response.json();
  } catch (error) {
    console.error('Error loading subfolders:', error);
    return [];
  }
};

const toggleFolder = async (item: FolderStructureItem) => {
  // Toggle expansion
  item.isExpanded = !item.isExpanded;
  
  // Load subfolders if expanding and not already loaded
  if (item.isExpanded && !item.subfolders) {
    item.subfolders = await loadSubfolders(item.path);
  }
  
  // Select the folder
  selectFolder(item.path);
};

const selectFolder = (path: string) => {
  selectedFolder.value = path;
};

const getDisplayName = (path: string) => {
  // Extract the last part of the path for display
  return path.split('/').pop() || path;
};

const submitSelectedFolder = async () => {
  if (!selectedFolder.value) return;
  
  try {
    const response = await fetch(`/api/folders/set?path=${encodeURIComponent(selectedFolder.value)}`, {
      method: 'GET'
    });

    if (!response.ok) throw new Error('Failed to set folder');
    
    console.log('Folder set successfully:', selectedFolder.value);
    close();
  } catch (error) {
    console.error('Error setting folder:', error);
  }
};

const close = () => {
  selectedFolder.value = null;
  emit("toggle-visibility", false);
};

// Load drives when component is mounted
onMounted(loadDrives);
</script>

<style scoped>
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #1a1a1a;
  width: 500px;
  height: 600px;
  color: #fff;
  z-index: 1000;
  border-radius: 8px;
  display: flex;
}

.popup-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.folder-browser {
  flex: 1;
  overflow-y: auto;
  background-color: #2a2a2a;
  border-radius: 4px;
  padding: 10px;
}

.folder-item {
  margin: 2px 0;
}

.folder-row {
  padding: 8px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.folder-row:hover {
  background-color: #3a3a3a;
}

.folder-row.selected {
  background-color: #4a4a4a;
}

.expand-icon {
  font-size: 0.8em;
  width: 20px;
}

.subfolder-container {
  margin-left: 20px;
}

.button-group {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

.cancel,
.select {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.cancel {
  background-color: transparent;
  color: #fff;
}

.select {
  background-color: #6b4fbb;
  color: #fff;
}

.select:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>