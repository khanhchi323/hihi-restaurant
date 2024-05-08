
<template>
    <div>
      <h1>Category List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            

          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id">
            <td>{{ category.id }}</td>
            <td>{{ category.name }}</td>
            <!-- <td>{{ category.description }}</td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>

  export default {
    data() {
      return {
        categories: []
      };
    },
    mounted() {
      // Trong mounted hook, bạn có thể thực hiện gọi API để lấy dữ liệu category từ backend
      // Trong ví dụ này, tôi sẽ sử dụng dữ liệu mẫu
      this.categories = [
        { id: 1, name: 'Category 1' },
        { id: 2, name: 'Category 2' },
        { id: 3, name: 'Category 3' }
      ];
    }
  };
  </script>
  