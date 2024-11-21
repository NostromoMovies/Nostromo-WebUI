<template>
	<div v-if="show" class="popup">
    	<div class="popup-content">
        	<button class="close-button" @click="close">x</button>

        	<form @submit.prevent="handleSignUp">
            	<p class="brand-name">Nostromos</p>

            	<label>First Name:</label>
            	<input type="text" required v-model="firstname" placeholder="Enter your first name">

            	<label>Last Name:</label>
            	<input type="text" required v-model="lastname" placeholder="Enter your last name">

            	<label>Email:</label>
            	<input type="email" required v-model="email" placeholder="Enter your email">

            	<label>Password:</label>
            	<input type="password" required v-model="password" placeholder="Enter your password">

            	<button type="submit" class="submit-button">Sign Up</button>
        	</form>
    	</div>
	</div>
</template>

<script>
	export default {
    	props: {
        	show: Boolean, // Controls visibility of the popup
    	},
    	data() {
        	return {
            	firstname: '',
            	lastname: '',
            	email: '',
            	password: '',
        	};
    	},
    	methods: {
        	close() {
            	this.$emit('close'); // Emit an event to notify the parent to close the popup
        	},
        	handleSignUp() {
            	// Handle the sign-up logic
            	const userData = {
                	firstname: this.firstname,
                	lastname: this.lastname,
                	email: this.email,
                	password: this.password,
            	};
            	console.log('Sign-up data:', userData);

            	// Reset fields after submission
            	this.firstname = '';
            	this.lastname = '';
            	this.email = '';
            	this.password = '';

            	// Close the popup
            	this.close();
        	},
    	},
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
    	border-radius: 8px;
    	padding: 20px;
    	box-sizing: border-box;
	}

	.brand-name {
    	font-size: 40px;
    	font-weight: bold;
    	margin-bottom: 40px;
    	text-align: center;
	}

	.popup-content {
    	text-align: center;
    	width: 100%;
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
    	max-width: 400px;
    	margin: 0 auto;
    	text-align: left;
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
    	box-sizing: border-box;
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
</style>


