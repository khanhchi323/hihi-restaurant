<template>
    <div class="w-full flex justify-center">
      <div class="m-4 w-2/5 items-center">
        <h1 class="text-2xl font-bold mb-4">Edit Category</h1>
      <form @submit.prevent="handleSubmit" class="max-w-md">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Name:</label>
          <input type="text" id="name" v-model="category.name" class="mt-1 p-2 border rounded-md w-full">
        </div>
        <div class="mb-4">
          <label for="image" class="block text-sm font-medium text-gray-700">Image:</label>
          <input type="file" id="image" @change="handleImageChange" class="mt-1 p-2 border rounded-md w-full">
          <img v-if="category.image" :src="category.image" alt="Category Image" class="mt-2" style="max-width: 100px; max-height: 100px;">
        </div>
        <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Save</button>
      </form>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        category: {
          id: null,
          name: '',
          image: null
        }
      };
    },
    methods: {
      handleSubmit() {
        // Gửi yêu cầu cập nhật danh mục đến máy chủ Laravel
        // Ví dụ: axios.put(`/api/categories/${this.category.id}`, this.category)
        //   .then(response => {
        //     console.log(response.data);
        //     // Chuyển hướng người dùng sau khi cập nhật thành công
        //     this.$router.push({ name: 'category.list' });
        //   })
        //   .catch(error => {
        //     console.error(error);
        //   });
      },
      handleImageChange(event) {
        const file = event.target.files[0];
        if (file) {
          // Xử lý file ảnh ở đây (ví dụ: tải lên máy chủ, cập nhật category.image, ...)
          this.category.image = URL.createObjectURL(file);
        }
      }
    },
    mounted() {
      // Trong mounted hook, bạn có thể gửi yêu cầu lấy thông tin danh mục từ máy chủ
      // Ví dụ: axios.get(`/api/categories/${categoryId}`)
      //   .then(response => {
      //     this.category = response.data;
      //   })
      //   .catch(error => {
      //     console.error(error);
      //   });
      // Trong mẫu này, tôi sẽ sử dụng dữ liệu mẫu
      this.category = {
        id: 1,
        name: null,
        image: null // URL của hình ảnh
      };
    }
  };
  </script>
  