<template>
  <div class="w-full flex justify-center ">
  <div class="m-4 w-2/5 items-center self-center">
      <h1 class="text-2xl font-semibold mb-4 text-center">Add new table</h1>
      <form @submit.prevent="createTable">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">No. Table</label>
          <input type="text" v-model="tableName" id="name" name="name" class="mt-1 p-2 border rounded-md w-full">
        </div>
        <div class="mb-4">
          <label for="area" class="block text-sm font-medium text-gray-700">Area</label>
          <select v-model="tableArea" id="area" name="area" class="mt-1 p-2 border rounded-md w-full">
            <option value="Area A">Area A</option>
            <option value="Area B">Area B</option>
            <option value="Area C">Area C</option>
            <!-- Thêm các tùy chọn khác nếu cần -->
          </select>
        </div>
        <div>
          <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Create Table</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableName: '',
      tableArea: 'Khu A',
    };
  },
  methods: {
    createTable() {
      // Gửi yêu cầu tạo bàn mới đến API hoặc xử lý tạo bàn trong cơ sở dữ liệu
      console.log('Tạo bàn mới với tên:', this.tableName, ' và khu vực:', this.tableArea);
      // Sau khi tạo xong, bạn có thể điều hướng người dùng đến trang quản lý bàn hoặc trang danh sách bàn
      // Ví dụ: this.$router.push('/table-management');
    },
  },
};
</script>

