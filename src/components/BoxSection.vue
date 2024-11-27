<template>
  <div class="parent">
    <div class="box">
      <div class ="taskbar">
        <DashboardTaskBar></DashboardTaskBar>
      </div>
      
        
      <div class="main-content">
        <MovieGrid />
        <FilterBox></FilterBox>
      </div>
        
   
      <!-- <div class="filter-section">
        
        <FilterBox></FilterBox>
      </div> -->
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
@import '../assets/base.css';

.parent {
  min-height: 100vh; /* Fill viewport height */
  margin: 0; /* Remove top margin */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Changed from center to avoid squishing content */
  padding: 40px;
  box-sizing: border-box; /* Ensure padding doesn't add to height */
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  margin: 0; /* Remove top margin */
  border-radius: 8px;
  border-style: solid;
  background-color: var(--vt-c-black);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 90%;
  min-height: calc(100vh - 40px); /* Account for parent padding */
}

.main-content {
  flex: 1; 
  display: flex;
  
  flex-direction: row;
  gap: 20px;
}
.filter-section {
  width: 400px;
  background-color: var(--vt-c-black);
  height: 100%; /* Fill parent height */
}
.taskbar{
  width: 100%;
  height: 20%;
}
</style>