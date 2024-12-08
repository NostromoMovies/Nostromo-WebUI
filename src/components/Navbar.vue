<template>
  <div class="navbar">
    <div class="navbar-content">
      <div class="logo">Nostromo</div>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link
            v-if="isAuthenticated"
            class="nav-link"
            :class="{ active: $route.path === '/dashboard' }"
            to="/dashboard"
          >
            Dashboard
          </router-link>
          <span v-else class="nav-link">Nostromo</span>
        </li>
        <li class="nav-item">
          <router-link
            v-if="isAuthenticated"
            class="nav-link"
            :class="{ active: $route.path === '/collection' }"
            to="/collection"
          >
            Collection
          </router-link>
        </li>
      </ul>
    </div>
    <LoginButton
      v-if="!isAuthenticated"
      @login-success="handleLogin"
    />
    <ProfileButton
      v-else
      @loggedOut="handleLogout"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginButton from './HomeVue/LoginButton.vue';
import ProfileButton from './ProfileButton.vue';
import { useAuthStore } from '@/services/authStore';

export default defineComponent({
  components: {
    LoginButton,
    ProfileButton,
  },
  data() {
    return {
      isLoginVisible: false as boolean,
      isLoggedIn: false as boolean,  // type annotation for boolean
    };
  },
  computed: {
 
    isAuthenticated() {
      const authStore = useAuthStore();
      return authStore.isAuthenticated;
    }
  },
  methods: {
    toggleLogin(): void {
      this.isLoginVisible = !this.isLoginVisible;
    },
    handleLogin(): void {
      this.isLoggedIn = true;  
      console.log('User has logged in');
       
    },
    handleLogout(): void {
      
      const authStore = useAuthStore();
      authStore.logout(); 
      console.log("User has logged out"); 
    },
  },
});

 
</script>

<style scoped>
.navbar {
  top: 0;
  width: 100%;
  max-width: 100%;
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
  padding-top: 1rem;
  padding-bottom: 0.5rem
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
  color: var(--accent-tertiary);
  padding-top: 10px;
  padding-bottom: 5px;
  padding-left: 15px;
  padding-right: 15px;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s ease;
  border-radius: 4px;
}


.navbar-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
}

.logo {
  font-family: 'Nostromo3D', sans-serif;
  font-size: 2.5rem;
  color: var(--accent-primary);
  margin: 0;
  padding: 0;
  letter-spacing: 1px;
  line-height: 1;
}

.nav-link.active {
  color: var(--accent-primary);
  font-weight: 600;
}

.nav-link:hover {
  color: var(--accent-hover-text);
  background-color: var(--accent-hover);
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

  .logo {
    font-size: 1.5rem;
  }
}
</style>