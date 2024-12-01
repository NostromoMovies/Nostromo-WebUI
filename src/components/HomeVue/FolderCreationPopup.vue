<template>
  <div v-if="show" class="popup">
    <div class="popup-content">
      <button class="close-button" @click="close">x</button>
      <form @submit.prevent="saveFolder">
        <p class="brand-name">Add New Folder</p>

        <label for="folder-location">Folder Location</label>
        <input 
          id="folder-location" 
          type="text" 
          required 
          v-model="folderLocation"
          placeholder="Enter folder path"
        />

        <div class="button-group">
          <button type="button" class="cancel" @click="close">Cancel</button>
          <button type="submit" class="save-button">Add Folder</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  show: boolean
}>();

const emit = defineEmits<{
  (event: "toggle-visibility", show: boolean): void;
}>();

const folderLocation = ref("");

const close = () => {
  folderLocation.value = ""; // Reset input on close
  emit("toggle-visibility", false);
};

const saveFolder = async () => {
  try {
    const response = await fetch(`/api/folders/set?path=${encodeURIComponent(folderLocation.value)}`, {
      method: 'GET'
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Failed to add folder');
    }

    console.log('Folder added successfully:', folderLocation.value);
    close();
  } catch (error) {
    console.error('Error adding folder:', error);
    // Here you might want to show an error message to the user
    // For now, we'll just log it to console
  }
};
</script>

<style scoped>
.popup {
  font-family: Arial, Helvetica, sans-serif;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 400px;
  height: auto;
  color: #555;
  transition: opacity 0.3s ease;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.popup-content {
  width: 100%;
  text-align: center;
  position: relative;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #333;
  font-size: 1.2rem;
  cursor: pointer;
}

form {
  width: 100%;
  text-align: left;
}

label {
  display: block;
  color: #666;
  margin: 15px 0 5px;
  font-size: 0.9rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}

.button-group {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
}

.cancel,
.save-button {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.cancel {
  background-color: #f3f3f3;
  color: #666;
}

.save-button {
  background-color: #4CAF50;
  color: white;
}

.save-button:hover {
  background-color: #45a049;
}

.cancel:hover {
  background-color: #e6e6e6;
}
</style>