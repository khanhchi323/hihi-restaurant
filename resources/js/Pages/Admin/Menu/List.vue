  
<script setup>
  import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
  import { Head } from '@inertiajs/vue3';
</script>

<template>
<AuthenticatedLayout>
    <div class="mx-16 my-10">
      <h1 class=" flex justify-center text-3xl font-bold mb-4 text-center">Menu List</h1>
  
      <!-- Danh sách các category -->
      <div class="flex self-end
       space-x-4 mb-4">
        <div class="w-2/3">
        <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
        <select id="category" v-model="selectedCategory" class="mt-1 p-2 border rounded-md w-64">
            <option value="">All</option>
            <option v-for="(category, index) in categories" :key="index" :value="category">{{ category }}</option>
        </select>
        </div>
        <div class="w-1/3 text-right ">
            <a href="{{ route('menu.create') }}" class="btn btn-primary bg-green-400  hover:bg-green-700 p-3 font-bold rounded rounded-lg px-5 ">Add</a>  
        </div>
      </div>
  
      <table class="w-full">
        <thead>
            <tr>
                <th class="px-4 py-2 w-16">ID</th> <!-- Đặt kích thước cố định là 16px -->
                <th class="px-4 py-2 w-1/5">Category</th>
                <th class="px-4 py-2 w-1/5">Name</th>
                <th class="px-4 py-2 w-1/6">Price</th>
                <th class="px-4 py-2 w-1/4">Image</th>
                <th class="px-4 py-2 w-16">Actions</th> <!-- Đặt kích thước cố định là 16px -->
              </tr>
        </thead>
        <tbody>
          <tr v-for="menu in filteredMenus" :key="menu.id" class="text-center">
            <td class="border px-2 py-2 w-16">{{ menu.id }}</td>
            <td class="border px-4 py-2 w-1/6">{{ menu.category }}</td>
            <td class="border px-4 py-2 w-1/5">{{ menu.name }}</td>
            <td class="border px-4 py-2 w-1/6">{{ menu.price }}</td>
            <th class="px-4 py-2 w-1/6 ">
                <img src="{{ menu.img }}" alt="Menu Image" style="width: 100px; height: 100px;">
            </th>
            <td class="border px-2 w-16">
              <div class="flex flex-col text-white ">
                <button class="mb-2 bg-sky-500 py-1 rounded rounded-lg">Edit</button>
                <button class="bg-red-500 py-1 rounded rounded-lg">Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
      <!-- Button thêm menu mới -->

   </AuthenticatedLayout>
  </template>