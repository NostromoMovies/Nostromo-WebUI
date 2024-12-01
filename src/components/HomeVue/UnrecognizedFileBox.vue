<!-- MovieGrid.vue -->
<template>
  <div class="container">
    <CreateFolderButton @toggle-popup="togglePopup"></CreateFolderButton>
    <FolderCreationPopup 
      v-if="showPopup"
      :show="showPopup"
      @toggle-visibility="togglePopup"
    />
  </div>
</template>
  
  <script setup lang="ts">
   import CreateFolderButton from './CreateFolderButton.vue';
   import FolderCreationPopup from './FolderCreationPopup.vue';
   import { ref } from 'vue';

   const showPopup = ref(false);

  const togglePopup = (value: boolean) => {
  console.log('togglePopup called with value:', value); // Debug log
  console.log('Previous showPopup value:', showPopup.value); // Debug log
  showPopup.value = value;
  console.log('New showPopup value:', showPopup.value); // Debug log
};
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