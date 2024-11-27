<template>
    <div>
      <button class="nav-button" @click="toggleLoginPopup">Login</button>
  
      <!-- Login popup -->
      <LoginPop
        v-show="showLoginPopup"
        :show="showLoginPopup"
        @update:show="showLoginPopup = $event"
        @open-signup="openSignupPopup"
      />
  
      <!-- Sign-Up popup -->
      <SignupPop
        v-show="showSignupPopup"
        @close="closeSignupPopup"
      />
    </div>
  </template>
  
  <script>
  import SignupPop from './SignupPop.vue';
  import LoginPop from './LoginPop.vue';
  
  export default {
    components: { SignupPop, LoginPop },
    data() {
      return {
        showLoginPopup: false, // Initially hidden
        showSignupPopup: false, // Initially hidden
      };
    },
    methods: {
      toggleLoginPopup() {
        this.showLoginPopup = !this.showLoginPopup; // Toggle login popup visibility
      },
      openSignupPopup() {
        this.showLoginPopup = false; // Hide login popup
        this.showSignupPopup = true; // Show signup popup
        console.log(this.showSignupPopup);
        
      },
      closeSignupPopup() {
        this.showSignupPopup = false; // Hide signup popup
        this.showLoginPopup = false;
      },
    },
  };
  </script>
  
  <style scoped>

.nav-button {
  color: var(--color-text);
  padding: 10px 15px;
  font-size: 1rem;
  border: none;
  outline: none;
  background-color: var(--color-background-soft);
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  font-family: inherit;
}
/* .login-btn {
  background-color: var(--vt-c-black-soft) !important;
  color: var(--color-text) !important;
  border: none !important;
  padding: 10px 15px !important;
  font-size: 1rem !important;
  border-radius: 4px !important;
  cursor: pointer !important;
  transition: background-color 0.3s ease !important;
  font-family: inherit !important;
  -webkit-appearance: none !important;
  -moz-appearance: none !important;
  appearance: none !important;
  box-shadow: none !important;
  margin: 0 !important;
  text-decoration: none !important;
}

.login-btn:hover {
  background-color: var(--vt-c-black-mute) !important;
}

.login-btn:focus {
  outline: none !important;
  box-shadow: 0 0 0 2px var(--color-border) !important;
} */
  </style>
  