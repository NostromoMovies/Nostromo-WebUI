<template>
    <div class="parent">
      <!-- Parent Box -->
      <div class="box">
        <h2>This is a Parent Box Section</h2>
        <p>Content inside the box goes here.</p>
        <MovieContainer>Movie</MovieContainer> <!-- Displaying MovieContainer inside Parent Box -->
      </div>
  
      <!-- Child Boxes Section -->
      <div class="child-box">
        <div class="movie-box">
          <h2>This is a Child Box Section</h2>
          <p>Content inside the child box goes here.</p>
          <MovieContainer></MovieContainer> <!-- Empty MovieContainer in First Child Box -->
        </div>
  
        <div class="movie-box">
          <h2>Another Child Box Section</h2>
          <p>Additional content inside this child box goes here.</p>
          <MovieContainer></MovieContainer> <!-- Empty MovieContainer in Second Child Box -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import MovieContainer from './MovieContainer.vue'; // Import MovieContainer component
  
  export default {
    name: 'BoxSection', // Name the component
    components: {
      MovieContainer, // Register MovieContainer component
},
  };
  </script>
  
  <style scoped>
  /* Parent Box Styling */
  .parent {
    display: flex;
    flex-direction: column; /* Stack parent and child sections vertically */
    height: 100vh; /* Full viewport height */
    align-items: center; /* Center-align items horizontally */
    padding: 20px;
  }
  
  /* Styling for the Parent Box */
  .box {
    border: 2px solid #ccc;
    padding: 20px;
    margin: 20px 0;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 750px;
  }
  
  /* Child Boxes Section Styling */
  .child-box {
    display: flex;
    flex-direction: row; /* Arrange child boxes horizontally */
    flex-wrap: wrap; /* Allow child boxes to wrap to the next line on small screens */
    justify-content: center; /* Center child boxes horizontally */
    gap: 20px; /* Space between child boxes */
  }
  
  /* Styling for Each Movie Box */
  .movie-box {
    width: 400px; /* Define width for individual movie boxes */
    min-height: 250px; /* Set a minimum height */
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 10px 0;
  }
  
  /* Additional Styling for Header and Paragraph */
  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 1rem;
    margin-bottom: 15px;
  }
  </style>
  