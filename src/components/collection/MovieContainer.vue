<template>
   <div class="movie-card">
     <div class="poster-container">
       <img
         :src="image"
         :alt="title"
         class="poster-image"
         @error="handleImageError"
       />
       <div class="overlay">
         <h3 class="movie-title">{{ title }}</h3>
       </div>
     </div>
   </div>
 </template>
 
 <script setup lang="ts">
 import { defineProps } from 'vue'
 
 const props = defineProps<{
   image: string
   title: string
 }>()
 
 const handleImageError = (e: Event) => {
   const target = e.target as HTMLImageElement
   target.src = 'https://placehold.co/300x450?text=No+Poster'
 }
 </script>
 
 <style scoped>
 .movie-card {
   cursor: pointer;
   transition: transform 0.2s;
   width: 120px;
   height: 360px;
   margin: 10px;
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
   width: 156px;
   height: 218px;
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
 </style>
 