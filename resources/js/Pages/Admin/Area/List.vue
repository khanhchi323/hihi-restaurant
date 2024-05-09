<template>
    <div class="mx-16 mb-10 ">
        <h1 class=" flex justify-center text-2xl font-bold mb-4">Areas Manegement</h1>
      <div class="flex justify-between mb-4">
        <h2 class="text-lg font-semibold">List of Areas</h2>
        <router-link to="/areas/create" class="border px-4 py-2 bg-green-500 text-white text-right rounded rounded-lg rounded hover:bg-green-600">Add</router-link>
      </div>
      <table class="w-full bg-gray-100">
        <thead>
          <tr>
            <th class="border px-4 py-2 w-16">ID</th>
            <th class="border px-4 py-2">Name</th>
            <th class="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="area in areas" :key="area.id">
            <td class="border px-4 py-2">{{ area.id }}</td>
            <td class="border px-4 py-2">{{ area.name }}</td>
            <td class="border px-4 py-2">
              <router-link :to="'/areas/' + area.id + '/edit'" class="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Edit</router-link>
              <button @click="deleteArea(area.id)" class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        areas: [] // Dữ liệu các khu vực
      };
    },
    methods: {
      // Phương thức để lấy dữ liệu các khu vực từ máy chủ (có thể sử dụng Axios hoặc fetch API)
      fetchAreas() {
        // Ví dụ: axios.get('/api/areas')
        //   .then(response => {
        //     this.areas = response.data;
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });
      },
      // Phương thức để xóa một khu vực dựa trên ID
      deleteArea(id) {
        // Xác nhận xóa khu vực
        if (confirm("Are you sure you want to delete this area?")) {
          // Gửi yêu cầu xóa khu vực đến máy chủ (có thể sử dụng Axios hoặc fetch API)
          // Ví dụ: axios.delete(`/api/areas/${id}`)
          //   .then(response => {
          //     // Xóa khu vực khỏi danh sách hiện tại
          //     this.areas = this.areas.filter(area => area.id !== id);
          //   })
          //   .catch(error => {
          //     console.error(error);
          //   });
        }
      }
    },
    mounted() {
      // Trong mounted hook, bạn có thể gọi phương thức fetchAreas() để lấy dữ liệu khu vực từ máy chủ
      this.fetchAreas();
    }
  };
  </script>
  