// stores/movieStore.js
import { ref } from 'vue';

export const useMovieStore = () => {
  const movies = ref([]);
  const lastFetched = ref(null);
  const CACHE_DURATION = 1 * 60 * 1000; // 5 minutes in milliseconds

  const fetchMovies = async (force = false) => {
    // If we have movies and the cache hasn't expired, return cached data
    if (!force && 
        movies.value.length > 0 && 
        lastFetched.value && 
        (Date.now() - lastFetched.value) < CACHE_DURATION) {
      console.log('Using cached movie data');
      return movies.value;
    }

    try {
      const response = await fetch('/api/movies');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      movies.value = data;
      lastFetched.value = Date.now();
      return data;
    } catch (error) {
      console.error('Error fetching movies:', error);
      throw error;
    }
  };

  return {
    movies,
    fetchMovies,
    lastFetched
  };
};