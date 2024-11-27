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
@import '../assets/base.css';

.parent {
  min-height: 100vh; /* Fill viewport height */
  margin: 0; /* Remove top margin */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Changed from center to avoid squishing content */
  padding: 20px;
  box-sizing: border-box; /* Ensure padding doesn't add to height */
}

.box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  margin: 0; /* Remove top margin */
  /* border-radius: 8px; */
  background-color: var(--vt-c-black);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  min-height: calc(100vh - 40px); /* Account for parent padding */
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: var(--vt-c-black);
  min-height: calc(100vh - 40px); /* Changed from height: 100% */
  overflow: auto; /* Add this to handle overflow */
}

.filter-section {
  width: 400px;
  background-color: var(--vt-c-black);
  height: 100%; /* Fill parent height */
}
</style>