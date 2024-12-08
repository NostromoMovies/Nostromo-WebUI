<template>
    <div>
      <button @click="toggleDropdown" class="dropdown-button">
        <!-- Profile -->
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
    height: 48px;
    width: 48px;
    margin-right: 15px;
    border-radius: 50%;
    background-color: var(--accent-tertiary);
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  }
  
  .dropdown-button:hover {
    background-color: var(--accent-primary); /* Emerald 600 */
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  }
  
  .dropdown-menu {
    position: absolute;
    margin-right: 15px;
    background-color: var(--color-background-soft);
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 5px;
    right: 0; /* This will align the dropdown to the right of the button */
  }
  
  .dropdown-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .dropdown-menu li {
    padding: 10px 20px;
    cursor: pointer;
    color: var(--accent-primary);
  }
  
  .dropdown-menu li:hover {
    color: var(--accent-hover-text);
    background-color: var(--accent-hover);
  }
  </style>
  