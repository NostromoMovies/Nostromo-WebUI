<!-- MovieGrid.vue -->
<template>
  <div class="container">
    <div v-if="loading" class="loading">Loading movies...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else class="movie-grid">
      <MovieContainer
        v-for="movie in movies"
        :key="movie.movieID"
        :image="`/api/movies/${movie.movieID}/poster`"
        :title="movie.title"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import MovieContainer from './MovieContainer.vue';
import { inject, ref, computed } from 'vue'
import type { Movie, MovieStore } from '@/types'

const movieStore = inject('movieStore') as MovieStore
const loading = ref(true)
const error = ref<string | null>(null)

const movies = computed(() => movieStore.movies.value)
const lastFetched = computed(() => movieStore.lastFetched.value)

const loadMovies = async () => {
  try {
    loading.value = true
    await movieStore.fetchMovies()
  } catch (e) {
    error.value = `Failed to load movies: ${(e as Error).message}`
    console.error('Error fetching movies:', e)
  } finally {
    loading.value = false
  }
}

const handleImageError = (e: Event) => {
  const target = e.target as HTMLImageElement
  target.src = 'https://placehold.co/300x450?text=No+Poster'
}

// Load movies when component is mounted
loadMovies()
</script>

<style scoped>
.container {
  border: 2px solid #ccc;
    
  
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    height: 1800px;
    width: 920px;
  margin-top: 120px;
  padding: 0 2rem;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.movie-card {
  cursor: pointer;
  transition: transform 0.2s;
}

.movie-card:hover {
  transform: scale(1.05);
}

.poster-container {
  position: relative;
  aspect-ratio: 2/3;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.poster-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.movie-card:hover .overlay {
  background: rgba(0, 0, 0, 0.6);
}

.movie-title {
  color: white;
  text-align: center;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.2s;
}

.movie-card:hover .movie-title {
  opacity: 1;
}

.loading, .error {
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
  color: var(--color-text);
}

.error {
  color: #dc2626;
}
</style>