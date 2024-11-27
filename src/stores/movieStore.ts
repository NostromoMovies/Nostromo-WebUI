import { ref } from 'vue'
import type { Movie, MovieStore } from '../types'

export const useMovieStore = (): MovieStore => {
  const movies = ref<Movie[]>([])
  const lastFetched = ref<number | null>(null)
  const CACHE_DURATION = 1 * 60 * 1000 // 1 minutes in milliseconds

  const fetchMovies = async (force = false): Promise<Movie[]> => {
    if (!force && 
        movies.value.length > 0 && 
        lastFetched.value && 
        (Date.now() - lastFetched.value) < CACHE_DURATION) {
      console.log('Using cached movie data')
      return movies.value
    }

    try {
      const response = await fetch('/api/movies')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      // Log the raw response to see what we're getting
      const rawText = await response.text()
      console.log('Raw API response:', rawText)
      
      try {
        const data = JSON.parse(rawText)
        movies.value = data
        lastFetched.value = Date.now()
        return data
      } catch (parseError) {
        console.error('JSON Parse Error:', parseError)
        console.error('Received content:', rawText)
        throw new Error(`Failed to parse JSON: ${(parseError as Error).message}`)
      }
    } catch (error) {
      console.error('Error fetching movies:', error)
      throw error
    }
  }

  return {
    movies,
    fetchMovies,
    lastFetched
  }
}