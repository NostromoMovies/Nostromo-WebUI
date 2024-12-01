<template>
  <div class="app-container">
    <div class="content">
      <div class="search-container">
        <input 
          type="search" 
          placeholder="Search..." 
          class="search-input"
        />
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

.search-container {
  width: 100%;
  margin: 20px 0;
  padding: 0 20px;
}

.search-input {
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  background: var(--color-background-soft);
  color: var(--color-text);
  font-size: 16px;
}

.main-content {
  display: flex;
  gap: 20px;
  width: 100%;
}
</style>