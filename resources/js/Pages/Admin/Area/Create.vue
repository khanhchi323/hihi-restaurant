<template>
    <div class="w-full flex justify-center ">
        <div class="m-4 w-2/5 items-center self-center">
            <h1 class="text-2xl font-semibold mb-4 text-center">Add New Area</h1>
      <form @submit.prevent="handleSubmit" class="w-full max-w-lg">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Area Name</label>
          <input v-model="areaName" type="text" id="name" name="name" class="mt-1 p-2 border rounded-md w-full" required>
        </div>
        <div class="flex justify-end">
          <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Create Area</button>
        </div>
      </form>
    </div>
</div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        areaName: '' // Biến để lưu trữ tên khu vực
      };
    },
    methods: {
      // Phương thức để xử lý việc tạo khu vực mới
      handleSubmit() {
        // Gửi yêu cầu tạo khu vực mới đến máy chủ (có thể sử dụng Axios hoặc fetch API)
        // Ví dụ: axios.post('/api/areas', { name: this.areaName })
        //   .then(response => {
        //     // Sau khi tạo thành công, có thể điều hướng người dùng đến trang danh sách khu vực
        //     this.$router.push('/areas');
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });
      }
    }
  };
  </script>
  