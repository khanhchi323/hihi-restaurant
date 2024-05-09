<template>
  <div>
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-2xl font-semibold mb-4">Table Manage</h1>
      <div class="flex justify-end mb-4">
        <router-link to="/create-table" class="bg-green-400 hover:bg-green-700 rounded rounded-lg  font-bold py-2 px-4 rounded">
          Add
        </router-link>
      </div>
      <div class="overflow-x-auto">
        <table class="table-auto w-full border-collapse border border-gray-300">
          <!-- Table header -->
          <thead class="bg-gray-100">
            <tr>
              <th class="border px-4 py-2 w-32">ID</th>
              <th class="border px-4 py-2">No. Table</th>
              <th class="border px-4 py-2">Area</th>
              <th class="border px-4 py-2">Active</th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody>
            <tr v-for="table in tables" :key="table.id">
              <td class="border px-4 py-2 text-center">{{ table.id }}</td>
              <td class="border px-4 py-2">{{ table.name }}</td>
              <td class="border px-4 py-2">{{ table.area }}</td>
              <td class="border px-2 w-32">
                <div class="flex flex-col text-white py-1">
                  <button @click="editTable(table.id)" class="mb-2 bg-sky-500 py-1 rounded rounded-lg">Edit</button>
                  <button @click="deleteTable(table.id)" class="bg-red-500 py-1 rounded rounded-lg">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tables: [],
    };
  },
  mounted() {
    // Lấy danh sách bàn từ API hoặc cơ sở dữ liệu
    this.tables = [
      { id: 1, name: 'Bàn 1', area: 'Khu A' },
      { id: 2, name: 'Bàn 2', area: 'Khu B' },
      { id: 3, name: 'Bàn 3', area: 'Khu C' },
    ];
  },
  methods: {
    deleteTable(id) {
      // Gọi API hoặc thực hiện xóa bàn từ cơ sở dữ liệu
      console.log('Xóa bàn có ID:', id);
    },
    editTable(id) {
      // Chuyển hướng đến trang chỉnh sửa bàn với ID tương ứng
      // Thực hiện tùy thuộc vào cách bạn đang xây dựng ứng dụng của mình
      console.log('Chỉnh sửa bàn có ID:', id);
    },
  },
};
</script>

