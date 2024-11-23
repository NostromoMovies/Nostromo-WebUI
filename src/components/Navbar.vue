<!-- Navbar.vue -->
<template>
  <div class="navbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link class="nav-link" :class="{ active: $route.path === '/' }" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :class="{ active: $route.path === '/dashboard' }" to="/dashboard">Dashboard</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" :class="{ active: $route.path === '/collection' }" to="/collection">Collection</router-link>
      </li>
    </ul>

    <div class="login-button">
      <PopupManager v-model:show="isLoginVisible" />
    </div>
  </div>
</template>

<script>
import PopupManager from './PopupManager.vue';

export default {
  components: {
    PopupManager,
  },
  data() {
    return {
      isLoginVisible: false,
      isProgramManagerVisible: false,
    };
  },
  methods: {
    toggleLogin() {
      this.isLoginVisible = !this.isLoginVisible;
    },
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
  background-color: var(--color-background);
  z-index: 1000;
  align-items: center;
  position: fixed;
  display: flex;
  left: 0;
  justify-content: space-between;
  padding: 0 2rem;
  border-bottom: 1px solid var(--color-border);
}

.navbar-nav {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  display: flex;
  align-items: center;
}

.nav-link {
  color: var(--color-text);
  padding: 10px 15px;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  border-radius: 4px;
}

.nav-link:hover {
  color: var(--vt-c-indigo);
  background-color: var(--color-background-soft);
}

.nav-link.active {
  color: var(--vt-c-indigo);
  font-weight: 600;
}

.login-button {
  margin-right: 2rem;
}

@media (max-width: 768px) {
  .navbar {
    padding: 0 1rem;
  }

  .navbar-nav {
    gap: 10px;
  }

  .nav-link {
    padding: 8px 12px;
    font-size: 0.9rem;
  }
}
</style>