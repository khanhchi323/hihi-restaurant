<template>
  <div>
    <div v-for="item in foodItems" :key="item.name" class="food-item">
      <img :src="item.image" :alt="item.name" />
      <h2>{{ item.name }}</h2>
      <p>Category: {{ item.category }}</p>
      <p>Spicy Level: {{ item.spicyLevel }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      foodItems: []
    };
  },
  created() {
    axios.get('path/to/data.json')
      .then(response => {
        this.foodItems = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>

<style>
.food-item {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  border-radius: 8px;
  text-align: center;
}
.food-item img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 8px;
}
</style>
