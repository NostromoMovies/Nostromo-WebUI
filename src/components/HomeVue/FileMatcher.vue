<template>
    <div class="container">
        <div class="content-wrapper">
            <div class="file-details">
                <h3>Unrecognized File</h3>
                <div class="file-box">
                    <p><strong>File Name:</strong> {{ file?.fileName || "No file name available" }}</p>
                </div>
            </div>

            <div class="guesses-details">
                <h3>Potential Matches</h3>
                <ul v-if="file?.guesses?.length > 0" class="guesses-list">
                    <li v-for="guess in file.guesses" :key="guess.id" class="guess-item">
                        <input type="radio"
                               :id="`guess-${guess.id}`"
                               :value="guess.id"
                               v-model="selectedMovieId"
                               class="guess-checkbox" />
                        <label :for="`guess-${guess.id}`">
                            <span class="guess-title">{{ guess.title }}</span>
                            <span class="guess-year">
                                ({{ guess.release_date ? guess.release_date.split('-')[0] : 'Unknown Release Year' }})
                            </span>
                        </label>
                    </li>
                </ul>
                <p v-else class="no-files">No guesses available</p>
                <button v-if="file?.guesses?.length > 0" @click="submitMatch" class="submit-button">
                    Submit Match
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const router = useRouter();
const file = ref<any>(null);
const selectedMovieId = ref<number | null>(null);

const fetchFileDetails = async () => {
    try {
        const VideoID = route.params.videoID;
        console.log('Fetching file details for VideoID:', VideoID);

        if (!VideoID) {
            console.error('No VideoID provided in route params');
            return;
        }

        const response = await axios.get(`/api/mediadisplay/unrecognized-file-with-guesses/${VideoID}`);
        console.log('API Response:', response.data);

        if (response.data?.result) {
            file.value = {
                ...response.data.result,
                guesses: response.data.result.guesses || [],
            };
        } else {
            console.error('No result found in API response');
        }
    } catch (error) {
        console.error('Error fetching file details:', error);
    }
};

const submitMatch = async () => {
    try {
        const VideoID = route.params.videoID;
        if (!VideoID || !selectedMovieId.value) {
            console.error('Video ID or selected movie ID is missing.');
            return;
        }

        console.log('Submitting match:', { VideoID, TMDBMovieID: selectedMovieId.value });

        await axios.post(`/api/mediadisplay/submit-match`, {
            VideoID,
            TMDBMovieID: selectedMovieId.value,
        });

        console.log('Match submitted successfully.');
        router.push('/dashboard');
    } catch (error) {
        console.error('Error submitting match:', error);
    }
};

onMounted(() => {
    fetchFileDetails();
});</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: rgb(24, 24, 24);
        color: #ffffff;
    }

    .content-wrapper {
        display: flex;
        gap: 20px;
        width: 80%;
    }

    .file-details,
    .guesses-details {
        flex: 1;
        padding: 20px;
        background-color: rgb(34, 34, 34);
        border-radius: 4px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .file-details h3,
    .guesses-details h3 {
        margin-bottom: 20px;
        font-size: 1rem;
        font-weight: 600;
        color: #aaa;
    }

    .file-box {
        padding: 12px;
        background-color: rgb(24, 24, 24);
        border-radius: 4px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }

    .file-details p {
        color: #ffffff;
        font-size: 0.9rem;
        margin: 6px 0;
    }

    .guesses-list {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .guess-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 12px;
        background-color: rgb(24, 24, 24);
        border-radius: 4px;
        transition: background-color 0.3s ease;
        margin-bottom: 10px;
    }

        .guess-item:hover {
            background-color: #3a3a3a;
        }

    .guess-checkbox {
        cursor: pointer;
        margin-right: 10px;
    }

    .guess-title {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: #ffffff;
    }

    .guess-year {
        color: #ffffff;
    }

    .no-files {
        color: #ccc;
    }

    .submit-button {
        display: block;
        margin: 20px 0 0 auto;
        padding: 10px 20px;
        background-color: rgb(102, 102, 102);
        color: white;
        font-size: 1rem;
        font-weight: bold;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

        .submit-button:hover {
            background-color: #45a049;
        }
</style>