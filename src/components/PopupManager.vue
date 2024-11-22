<template>
    <div>
      <button @click="toggleLoginPopup">Login</button>
  
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
  /* Add any additional styles for parent component if needed */
  </style>
  