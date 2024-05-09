<template>
  <div class=" flex justify-center ">
  <div class="m-4 w-2/5 ">
      <h1 class="text-2xl font-semibold mb-4 text-center">Edit Table</h1>
      <form @submit.prevent="updateTable">
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
          <button type="submit" class="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Update</button>
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
  mounted() {
    // Lấy thông tin của bàn từ API hoặc cơ sở dữ liệu
    // Gán giá trị cho tableName và tableArea để hiển thị trong form
    // Ví dụ:
    // this.tableName = 'Bàn 1';
    // this.tableArea = 'Khu A';
  },
  methods: {
    updateTable() {
      // Gửi yêu cầu cập nhật thông tin bàn đến API hoặc xử lý cập nhật trong cơ sở dữ liệu
      console.log('Cập nhật bàn với tên:', this.tableName, ' và khu vực:', this.tableArea);
      // Sau khi cập nhật xong, bạn có thể điều hướng người dùng đến trang quản lý bàn hoặc trang danh sách bàn
      // Ví dụ: this.$router.push('/table-management');
    },
  },
};
</script>

<style scoped>
/* Thêm CSS tùy chỉnh tại đây */
</style>
