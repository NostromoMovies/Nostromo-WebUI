<template>
  <div v-if="show" class="popup">
    <div class="popup-content">
      <button class="close-button" @click="close">x</button>
      <form @submit.prevent="saveFile">
        <p class="brand-name">Add New File</p>

        <label for="file-name">File Name</label>
        <input id="file-name" type="text" required v-model="fileName" />

        <label for="file-location">File Location</label>
        <input id="file-location" type="text" required v-model="fileLocation" />

        <div class="button-group">
          <button type="button" class="cancel" @click="close">Cancel</button>
          <button type="submit" class="save-button">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

// Define emit event
const emit = defineEmits<{
  (event: "toggle-visibility", show: boolean): void;
}>();


const fileName = ref("");
const fileLocation = ref("");
const show = ref(false);


const close = () => {
  show.value = false;
  emit("toggle-visibility", show.value);
};


const saveFile = () => {
  console.log("File saved:", { name: fileName.value, location: fileLocation.value });
  close();
};
</script>

<style scoped>
.popup {
  font-family: Arial, Helvetica, sans-serif;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 400px;
  height: auto;
  color: #555;
  transition: opacity 0.3s ease;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.popup-content {
  width: 100%;
  text-align: center;
  position: relative;
}

.brand-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  color: #333;
  font-size: 1.2rem;
  cursor: pointer;
}

form {
  width: 100%;
  text-align: left;
}

label {
  display: block;
  color: #666;
  margin: 15px 0 5px;
  font-size: 0.9rem;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-sizing: border-box;
}

.button-group {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.cancel,
.save-button {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5
}