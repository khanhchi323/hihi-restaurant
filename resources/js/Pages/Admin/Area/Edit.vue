<template>
    <div class="w-full flex justify-center ">
        <div class="m-4 w-2/5 items-center self-center">
            <h1 class="text-2xl font-semibold mb-4 text-center">Edit Areas</h1>
    <form @submit.prevent="handleSubmit" class="w-full max-w-lg">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Area Name</label>
        <input v-model="areaName" type="text" id="name" name="name" class="mt-1 p-2 border rounded-md w-full" required>
      </div>
      <div class="flex justify-end">
        <button type="submit" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Save Changes</button>
      </div>
    </form>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      areaId: '', // ID của khu vực
      areaName: '' // Tên khu vực
    };
  },
  methods: {
    // Phương thức để lấy dữ liệu khu vực hiện tại từ máy chủ
    fetchAreaData() {
      // Gửi yêu cầu để lấy dữ liệu khu vực từ máy chủ (có thể sử dụng Axios hoặc fetch API)
      // Ví dụ: axios.get(`/api/areas/${this.areaId}`)
      //   .then(response => {
      //     this.areaName = response.data.name; // Cập nhật tên khu vực từ dữ liệu nhận được
      //   })
      //   .catch(error => {
      //     console.error(error);
      //   });
    },
    // Phương thức để cập nhật khu vực
    handleSubmit() {
      // Gửi yêu cầu cập nhật khu vực đến máy chủ (có thể sử dụng Axios hoặc fetch API)
      // Ví dụ: axios.put(`/api/areas/${this.areaId}`, { name: this.areaName })
      //   .then(response => {
      //     // Sau khi cập nhật thành công, có thể điều hướng người dùng đến trang danh sách khu vực
      //     this.$router.push('/areas');
      //   })
      //   .catch(error => {
      //     console.error(error);
      //   });
    }
  },
  mounted() {
    // Trong mounted hook, bạn cần lấy ID của khu vực từ URL (hoặc từ prop nếu sử dụng Vue Router)
    // Ví dụ: this.areaId = this.$route.params.id;
    // Sau đó, bạn có thể gọi phương thức fetchAreaData() để lấy dữ liệu khu vực hiện tại từ máy chủ
    this.areaId = '...'; // Thay '...' bằng ID thực tế của khu vực cần chỉnh sửa
    this.fetchAreaData();
  }
};
</script>
