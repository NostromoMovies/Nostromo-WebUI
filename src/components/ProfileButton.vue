<template>
    <div>
      <button @click="toggleDropdown" class="dropdown-button">
        Profile
      </button>
  
      <div v-if="isDropdownVisible" class="dropdown-menu">
        <ul>
          <li @click="goToSettings">Settings</li>
          <li @click="logout">Logout</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  import { defineComponent } from 'vue';
  import router from '@/router';
  import { useAuthStore } from '@/services/authStore';
  
  export default defineComponent({
    setup(_, { emit }) {
      const authStore = useAuthStore(); 
      const isDropdownVisible = ref(false);
  
      const toggleDropdown = () => {
        isDropdownVisible.value = !isDropdownVisible.value;
      };
  
      const goToSettings = () => {
        console.log('Navigating to Settings...');
      };
  
      const logout = () => {
        authStore.logout(); // Access the store's logout method
        router.push("/"); // Navigate to home or login
        emit('loggedOut'); // Emit the loggedOut event to parent
      };
  
      return {
        isDropdownVisible,
        toggleDropdown,
        goToSettings,
        logout,
      };
    },
  });
  </script>
  
  <style scoped>
  .dropdown-button {
    padding: 10px;
    background-color: white;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  .dropdown-menu {
    position: absolute;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 5px;
  }
  
  .dropdown-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .dropdown-menu li {
    padding: 10px;
    cursor: pointer;
  }
  
  .dropdown-menu li:hover {
    background-color: #f1f1f1;
  }
  </style>
  