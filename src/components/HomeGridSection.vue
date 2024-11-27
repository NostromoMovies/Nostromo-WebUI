<template>
    <div class="parent">
      <div class="box">
        <UnrecognizedFileBox></UnrecognizedFileBox>
        
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  import UnrecognizedFileBox from './HomeVue/UnrecognizedFileBox.vue';

  </script>
  
  <style scoped>
  /* Global Fix for Box Model */
  * {
    box-sizing: border-box;
  }
  

  .parent {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  overflow: hidden;
}
  

  .box {
    
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    align-items: flex-start; 
    border: 2px solid #ccc;
    padding: 40px; 
    margin-top: 50px;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    width: 80vh;
    max-width: 90vw; 
    height: 80vh; 
    align-self: center;
  }
  </style>
  