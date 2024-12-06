<template>
  <header>
    <!-- <h1>{{ title }}</h1> -->
  </header>
  
  <Navbar v-if="!isRegisterPage" />
  <router-view></router-view>
  <!-- <BoxSection/> -->

</template>

<script setup lang="ts">
import { ref, computed, provide } from 'vue';
import Navbar from './components/Navbar.vue';

import { useMovieStore } from './stores/movieStore';
import { useRoute } from 'vue-router';  // Import useRoute to get current route



// Create and provide the movie store
const movieStore = useMovieStore();
provide('movieStore', movieStore);

// Use useRoute to access the current route
const route = useRoute();

// Computed property to check if the current route is the register page
const isRegisterPage = computed(() => {
      return route.name === 'register' ;
    });
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

html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden; /* Prevent horizontal scrolling */
}

</style>
