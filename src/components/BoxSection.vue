<template>
  <div class="app-container">
    <div class="content">
      <div class="search-container">
        <!-- Your search bar -->
      </div>
      <div class="main-content">
        <MovieGrid />
        <FilterBox />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardTaskBar from './collection/DashboardTaskBar.vue';
import MovieGrid from './collection/MovieGrid.vue';
import FilterBox from './collection/FilterBox.vue';

 
  export default {
    name: 'BoxSection', 
    components: {
      MovieGrid,
      FilterBox,
      DashboardTaskBar
},
  };
  </script>

<style scoped>
.app-container {
  width: 100%;
  min-height: 100vh;
  padding: 20px;
}

.content {
  max-width: 100%;
  margin: 0 auto;
}

.main-content {
  display: flex;
  gap: 20px; /* Reduced gap between grid and filter */
  width: 100%;
}

.search-container {
  width: 100%;
  margin-bottom: 20px;
}
</style>