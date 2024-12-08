<template>
  <div class="parent">
    <div class="grid-container">
      <!-- Left Rectangle -->
      <div class="rectangle">
        <div class="content-wrapper">
          <UnrecognizedFileBox></UnrecognizedFileBox>
        </div>
      </div>
      
      <!-- Right Rectangle -->
      <div class="rectangle">
        <UnrecognizedFiles></UnrecognizedFiles>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UnrecognizedFileBox from './HomeVue/ImportFolderBox.vue';
import UnrecognizedFiles from './HomeVue/UnrecognizedFiles.vue';
</script>

<style scoped>
/* Global Fix for Box Model */
* {
  box-sizing: border-box;
}

.parent {
  margin-top: 100px;
  padding: 20px;
  width: 100%;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;  /* Two equal columns */
  gap: 20px;  /* Space between rectangles */
  max-width: 1600px;  /* Maximum width of the container */
  margin: 0 auto;  /* Center the container */
}

.rectangle {
  background-color: var(--color-background-soft);
  color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: 600px;  /* Fixed height, adjust as needed */
  position: relative;  /* For positioning the button */
}

.content-wrapper {
  height: 100%;
  position: relative;
}
</style>