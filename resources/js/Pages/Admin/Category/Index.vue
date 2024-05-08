<template>
  <div class="mx-16 ">
    <h1 class="text-2xl font-bold mb-4">Category List</h1>

    <!-- Danh sách các category -->
    <div class="flex space-x-4 mb-4">
      <div class="w-2/3">
      </div>
      <div class="w-1/3 text-right  ">
          <a href="{{ route('category.create') }}" class="btn btn-primary bg-green-400 p-3 rounded rounded-lg ">Add new category</a>  
      </div>
    </div>

    <table class="w-full">
      <thead>
          <tr>
              <th class="px-4 py-2 w-16">ID</th> <!-- Đặt kích thước cố định là 16px -->
              <th class="px-4 py-2 w-1/5">Category</th>
              <th class="px-4 py-2 w-1/4">Image</th>
              <th class="px-4 py-2 w-16">Active</th> <!-- Đặt kích thước cố định là 16px -->
            </tr>
      </thead>
      <tbody>
        <tr v-for="menu in filteredMenus" :key="menu.id" class="text-center">
          <td class="border px-2 py-2 w-16">{{ menu.id }}</td>
          <td class="border px-4 py-2 w-2/5">{{ menu.category }}</td>
          <th class="px-4 py-2 w-2/5 ">
              <img src="{{ menu.img }}" alt="Menu Image" style="width: 100px; height: 100px;">
          </th>
          <td class="border px-2 w-16">
            <div class="flex flex-col text-white ">
              <button class="mb-2 bg-sky-500 py-1 rounded rounded-lg">Edit</button>
              <button class=" bg-red-500 py-1 rounded rounded-lg">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
</div>
    <!-- Button thêm menu mới -->
 
</template>

<script>
export default {
  data() {
    return {
      menus: [], // Dữ liệu các món ăn
      categories: ['Thịt', 'Hải sản', 'Rau củ', 'Nước uống'], // Danh sách các category
      selectedCategory: null // Category được chọn
    };
  },
  computed: {
    filteredMenus() {
      // Lọc danh sách các món ăn theo category được chọn
      if (!this.selectedCategory) {
        return this.menus;
      }
      return this.menus.filter(menu => menu.category === this.selectedCategory);
    }
  },
  mounted() {
    // Trong mounted hook, bạn có thể thực hiện gọi API để lấy dữ liệu Menu từ backend
    // Trong ví dụ này, tôi sẽ sử dụng dữ liệu mẫu
    this.menus = [
      { id: 1, category: 'Thịt', img: '' },
      { id: 2, category: 'Thịt',  img: '' },
      { id: 3, category: 'Hải sản', img: '' },
      { id: 4, category: 'Nước uống', img: '' }
    ];
  }
};
</script>