<template>
  <header>
    <!-- <h1>{{ title }}</h1> -->
  </header>
  
  <Navbar />
  <router-view></router-view>
  <MovieGrid />
  <BoxSection/>
  <FileCreation/>
</template>

<script setup>
import { provide } from 'vue';
import FileCreation from './components/FileCreation.vue';
import Navbar from './components/Navbar.vue';
import { ref } from 'vue';
import BoxSection from './components/BoxSection.vue';
import { useMovieStore } from './stores/movieStore';

const title = ref('My First Vue App :)');

// Create and provide the movie store
const movieStore = useMovieStore();
provide('movieStore', movieStore);
</script>

<style scoped>
#app{
  font-family: Avenir,Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing:  grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
header {
    line-height: 1.5;
    text-align: center;
    margin-bottom: 2rem;
    padding-top: 60px; /* Adjust based on the navbar height */
}

body {
    margin: 0; /* Ensure there's no margin */
    font-family: 'Nunito SemiBold';
    background: #eee;
}
</style>
