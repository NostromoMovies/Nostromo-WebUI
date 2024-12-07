<template>
	<form @submit.prevent="handleSubmit" class="signup-form">
	  <p class="brand-name">Nostromo</p>
  
	  <label for="username">Username:</label>
	  <input
		type="text"
		id="username"
		required
		v-model="form.username"
		placeholder="Enter your username"
	  />
  
	  <label for="password">Password:</label>
	  <input
		type="password"
		id="password"
		required
		v-model="form.password"
		placeholder="Enter your password"
	  />
  
	  <button type="submit" class="submit-button">Sign Up</button>
	</form>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useRouter } from 'vue-router';
  import { useSignupStore } from '@/stores/signupMethod';
  
  export default defineComponent({
	name: 'Signup',
	setup() {
	  const router = useRouter();
	  const { form, register, message } = useSignupStore(router);
  
	  const handleSubmit = async () => {
		await register();
	  };
  
	  return {
		form,
		handleSubmit,
		message
	  };
	}
  });
  </script>
  
  <style scoped>
  .signup-form {
	font-family: Arial, Helvetica, sans-serif;
	align-items: center;
	justify-content: center;
	width: 400px;
	margin: auto;
	padding: 20px;
	background-color: white;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
  }
  
  .brand-name {
	font-size: 40px;
	font-weight: bold;
	margin-bottom: 40px;
	text-align: center;
  }
  
  label {
	color: #aaa;
	display: inline-block;
	margin: 10px 0 5px;
	font-size: 0.8em;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: bold;
  }
  
  input {
	display: block;
	padding: 10px 6px;
	width: 100%;
	border-radius: 10px;
	border: 1px solid #ddd;
	margin-bottom: 20px;
	color: #555;
  }
  
  .submit-button {
	cursor: pointer;
	border: none;
	border-radius: 10px;
	width: 100%;
	height: 50px;
	background-color: #333;
	color: white;
	font-size: 1rem;
	font-weight: bold;
	transition: background-color 0.3s;
  }
  
  .submit-button:hover {
	background-color: #555;
  }
  
  .error-message {
	color: red;
	font-size: 0.8em;
	margin-top: -10px;
  }
  </style>
  