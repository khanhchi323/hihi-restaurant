<template>
  <div class="search-bar">
    <input type="text" v-model="searchQuery" @input="handleSearch" placeholder="Search...">
    <span class="pi pi-search"></span>
  </div>
</template>

<script>

import 'primeicons/primeicons.css'
export default {
  data() {
    return {
      searchQuery: '',
    };
  },
  methods: {
    handleSearch() {
      // Thực hiện tìm kiếm với searchQuery
      console.log('Perform search with query:', this.searchQuery);
    }
  }
};
</script>

<style>
.search-bar {
  position: relative;
  width: 300px;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

input[type="text"] {
  flex: 1;
  height: 100%;
  border: none;
  padding: 0 10px;
}

.pi-search {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-image: url('path/to/magnifying-glass-icon.png');
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  color:black;
}
</style>    