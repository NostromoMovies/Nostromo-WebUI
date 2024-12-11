<template>
    <div class="unrecognized-files">
        <h3>Unrecognized Files</h3>
        <div class="files-container" v-if="files.length > 0">
            <div v-for="file in files"
                 :key="file.videoID"
                 class="file-item"
                 @click="navigateToFile(file.videoID)">
                <span>{{ formatTimestamp(file.timestamp) }}</span>
                <span>{{ file.fileName }}</span>
            </div>
        </div>
        <div v-else class="no-files">No unrecognized files found</div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import { useNavigationStore } from '@/stores/unrecognizedStore';

    const navigationStore = useNavigationStore();

    const files = ref([]);

    const fetchUnrecognizedFiles = async () => {
        try {
            const response = await axios.get('/api/mediadisplay/unrecognized-videos');
            files.value = response.data.results;
        } catch (error) {
            console.error('Error fetching unrecognized files:', error);
        }
    };

    const formatTimestamp = (timestamp: string) => {
        const date = new Date(timestamp);
        return `${date.toLocaleDateString()} | ${date.toLocaleTimeString()}`;
    };

    const navigateToFile = (videoID: number) => {
        navigationStore.navigateToUnrecognizedFile(videoID);
    };

    onMounted(() => {
        fetchUnrecognizedFiles();
    });
</script>

<style scoped>
    .unrecognized-files {
        flex-grow: 1;
        padding: 20px;
        overflow-y: auto;
    }

        .unrecognized-files h3 {
            margin-top: 0;
            margin-bottom: 20px;
            color: var(--color-text);
        }

    .files-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .file-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px;
        background-color: rgb(24, 24, 24);
        border-radius: 4px;
        transition: background-color 0.3s ease;
        cursor: pointer;
    }

        .file-item:hover {
            background-color: #3a3a3a;
        }

        .file-item span {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

    .no-files {
        text-align: center;
        padding: 20px;
        color: #666;
    }
</style>
