<template>
  <div class="navbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/collection">Collection</a>
      </li>
    </ul>

    <!-- Login button that triggers login popup -->
    <div class="login-button">
      <PopupManager  v-model:show="isLoginVisible" />
    </div>



  </div>
</template>

<script>
import PopupManager from './PopupManager.vue'; // Import PopupManager for login/signup

export default {
  components: {
    PopupManager,        // Add PopupManager for login/signup
    
  },
  data() {
    return {
      isLoginVisible: false,         // Track visibility of login popup
      isProgramManagerVisible: false, // Track visibility of Program Manager popup
    };
  },
  methods: {
    // Method to toggle the visibility of the login popup
    toggleLogin() {
      this.isLoginVisible = !this.isLoginVisible;
    },
    // Method to toggle the visibility of the Program Manager popup
    toggleProgramManager() {
      this.isProgramManagerVisible = !this.isProgramManagerVisible;
    },
  },
};
</script>

<style scoped>
.navbar {
  top: 0;
  width: 100%;
  height: 100px;
  background-color: white;
  z-index: 1000;
  align-items: center;
  position: fixed;
  display: flex;
  left: 0;
  justify-content: space-between;
}

.navbar-nav {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.navbar-nav .nav-link {
  color: #000;
  padding: 10px 15px;
  text-decoration: none;
}

.login-button {
  color: white;
  margin-left: -90px;
  text-decoration: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.program-manager-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  margin-left: 10px;
}

.program-manager-button:hover {
  background-color: #0056b3;
}
</style>
