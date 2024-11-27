<template>
  <div class="parent">
    <div class="box">
      <div class="main-content">
        <Searchbar></Searchbar>
        <MovieGrid></MovieGrid>
      </div>
      <div class="filter-section">
        <FilterBox></FilterBox>
      </div>
    </div>
  </div>
</template>

  
  <script>
 
import MovieGrid from './collection/MovieGrid.vue';
import Searchbar from './collection/Searchbar.vue';
import FilterBox from './collection/FilterBox.vue';


  
  export default {
    name: 'BoxSection', // Name the component
    components: {
      MovieGrid,
      Searchbar, 
      FilterBox,// Register MovieContainer component
},
  };
  </script>
  
  <style scoped>

/* Parent Container */
.parent {
  margin-top: 100px;
  display: flex;
  justify-content: center; /* Horizontally center the child */
  align-items: center; /* Vertically center the child */
  padding: 20px;
}

/* Outer Box Styling */
.box {
  display: flex; /* Enables horizontal layout */
  flex-direction: row; /* Ensure children are aligned horizontally */
  justify-content: space-between; /* Place main content on left and filter section on right */
  align-items: flex-start; /* Align items to the top */
  border: 2px solid #ccc;
  padding: 20px;
  margin-top: 50px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  
}

/* Main Content Section (Searchbar + MovieGrid) */
.main-content {
  flex: 1; 
  display: flex;
  flex-direction: column;
  gap: 20px; 
}


.filter-section {
  width: 400px; 
}
</style>

  
  