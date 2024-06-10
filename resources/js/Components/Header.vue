<template>
  <header class="header">
    <div class="logo">
      <img src='/images/logo.png' alt="POS" class="logo-image">
    </div>
    <div class="search-bar">
      <input type="text" placeholder="Search product or any order..." />
      <button>
        <font-awesome-icon :icon="['fas', 'search']" />
      </button>
    </div>
    <div class="date">
      <font-awesome-icon :icon="['fas', 'calendar-alt']" />
      <timestamp></timestamp>
    </div>
  </header>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Timestamp from '@/Components/Timestamp.vue'; // Đảm bảo đường dẫn đúng đến file Timestamp.vue

// Add icons to the library
library.add(faSearch, faCalendarAlt);

// Register FontAwesomeIcon component globally in the script setup
defineExpose({ FontAwesomeIcon });

</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 100px; /* Độ rộng của navbar */
  right: 0;
  z-index: 1000;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.search-bar {
  display: flex;
  align-items: center;
}

.search-bar input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  outline: none;
}

.search-bar button {
  padding: 8px;
  border: 1px solid #ccc;
  border-left: none;
  background-color: #eee;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.date {
  display: flex;
  align-items: center;
  color: #666;
}

.date span {
  margin-left: 5px;
}
</style>
