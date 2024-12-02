<template>
  <header>
    <!-- <h1>{{ title }}</h1> -->
  </header>
  
  <Navbar />
  <router-view></router-view>
  <!-- <BoxSection/> -->

</template>

<script setup>
import { provide } from 'vue';


import Navbar from './components/Navbar.vue';
import { ref } from 'vue';
import BoxSection from './components/BoxSection.vue';
import { useMovieStore } from './stores/movieStore';

const title = ref('My First Vue App :)');

// Create and provide the movie store
const movieStore = useMovieStore();
provide('movieStore', movieStore);
</script>

<style lang="css" >
    @import "./src/assets/main.css";

    body {
        font-family: 'C64 Pro', monospace;
        background-color: #eee;
        margin: 0;
    }

    #app {
        font-family: 'C64 Pro', monospace !important;
        text-align: center;
        color: #2c3e50;
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
