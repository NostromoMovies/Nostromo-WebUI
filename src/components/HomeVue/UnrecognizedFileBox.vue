<!-- MovieGrid.vue -->
<template>
    <div class="container">
     <CreateFolderButton></CreateFolderButton>
    </div>
  </template>
  
  <script setup lang="ts">
   import CreateFolderButton from './CreateFolderButton.vue';
  </script>
  
  <style scoped>
  .container {
    border: 2px solid #ccc;
      
    
      border-radius: 8px;
      background-color: #f9f9f9;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      height: 25vh;
      width: 25vh;
     margin-top: 120px;
     padding: 0 2rem;
  }
  
  
  

  </style>