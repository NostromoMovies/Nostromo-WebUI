<template>
  <div class="container">
    <div class="button-wrapper">
      <CreateFolderButton @toggle-popup="togglePopup"></CreateFolderButton>
    </div>
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
  console.log('togglePopup called with value:', value);
  console.log('Previous showPopup value:', showPopup.value); 
  showPopup.value = value;
  console.log('New showPopup value:', showPopup.value);
};
</script>

<style scoped>
.container {
  height: 100%;
  position: relative;
}

.button-wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>