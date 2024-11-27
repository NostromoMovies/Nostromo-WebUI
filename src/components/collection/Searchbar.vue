<template>
    <div class="search-bar">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search..."
        @input="onSearch"
        class="search-input"
      />
    </div>
  </template>
  
  <script>
  export default {
    name: "SearchBar",
    data() {
      return {
        searchQuery: "",
      };
    },
    methods: {
      onSearch() {
        this.$emit("search", this.searchQuery);
      },
    },
  };
  </script>
  
  <style scoped>
  .search-bar {
    display: flex;
    justify-content: left;
    margin: 1rem 0;
  }
  
  .search-input {
    width: 50%;
    max-width: 400px;
    padding: 0.5rem;
    font-size: 1rem;
    background: var(--color-background-soft);
    color: var(--color-text);
    border: none; /* Add this to remove the border */
    outline: none; /* Optional: removes the focus outline */
  }
  </style>
  