import { defineStore } from 'pinia';

const BASE_URL = '/webui';

export const useNavigationStore = defineStore('navigation', {
    actions: {
        navigateToUnrecognizedFile(videoID: number) {
            window.location.href = `${BASE_URL}/unrecognized-files/${videoID}`;
        }
    }
});
