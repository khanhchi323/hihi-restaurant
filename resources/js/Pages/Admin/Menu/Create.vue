<template>
  <div class="w-full flex justify-center">
  <div class="m-4 w-2/5 items-center">
    <h1 class="text-2xl font-bold mb-4">Create New Menu</h1>

    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" id="name" v-model="newMenu.name" class="mt-1 p-2 border rounded-md w-full">
      </div>

      <div class="mb-4">
        <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
        <select id="category" v-model="newMenu.category" class="mt-1 p-2 border rounded-md w-full">
          <option value="Thịt">Thịt</option>
          <option value="Hải sản">Hải sản</option>
          <option value="Rau củ">Rau củ</option>
          <option value="Nước uống">Nước uống</option>
        </select>
      </div>

      <div class="mb-4">
        <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
        <input type="text" id="price" v-model="newMenu.price" class="mt-1 p-2 border rounded-md w-full">
      </div>

      <div class="mb-4">
        <label for="image" class="block text-sm font-medium text-gray-700">Image</label>
        <input type="file" id="image" @change="handleImageChange" accept="image/*" class="mt-1 p-2 border rounded-md w-full">
      </div>

      <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Create Menu</button>
    </form>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      newMenu: {
        name: '',
        category: 'Thịt',
        price: '',
        image: null
      }
    };
  },
  methods: {
  //     handleSubmit() {
  //   // Gửi yêu cầu lưu thông tin menu mới vào cơ sở dữ liệu
  //   // Sau khi lưu thành công, chuyển hướng người dùng trở lại trang menu list
  //   this.saveMenuAndRedirect();
  // },
  // saveMenuAndRedirect() {
  //   // Gửi yêu cầu để lưu thông tin menu mới vào cơ sở dữ liệu
  //   // Sau khi lưu thành công, chuyển hướng người dùng trở lại trang menu list
  //   // Ví dụ:
  //   axios.post('/api/menus', this.newMenu)
  //     .then(response => {
  //       // Chuyển hướng người dùng trở lại trang menu list
  //       this.$router.push({ name: 'menu.list' });
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // },


    handleImageChange(event) {
      // Xử lý khi người dùng chọn hình ảnh
      const file = event.target.files[0];
      if (file) {
        // Xử lý file ảnh ở đây
        this.newMenu.image = file;
      }
    }
  }
};
</script>