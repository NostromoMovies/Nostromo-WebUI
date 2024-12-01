<template>
  <div class="app-container">
    <Navbar />
    <div class="content-wrapper">
      <div class="search-bar">
        <!-- Your search component here -->
        <input type="search" placeholder="Search..." class="search-input" />
      </div>
      
      <div class="main-content">
        <div class="movie-section">
          <MovieGrid />
        </div>
        <div class="filter-section">
          <FilterBox />
        </div>
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
  min-height: 100vh;
  background-color: var(--color-background);
}

.content-wrapper {
  padding: 120px 2rem 2rem;
  max-width: 1800px;
  margin: 0 auto;
}

.search-bar {
  margin-bottom: 1rem;
}

.search-input {
  width: 100%;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid var(--color-border);
  background: var(--color-background-soft);
  color: var(--color-text);
}

.main-content {
  display: flex;
  gap: 2rem;
  justify-content: space-between;
}

.movie-section {
  flex: 1;
  min-width: 0; /* Prevents flex items from overflowing */
}

.filter-section {
  width: 430px;
  flex-shrink: 0;
}
</style>