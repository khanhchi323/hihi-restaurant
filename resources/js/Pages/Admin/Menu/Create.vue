<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head, Link, useForm } from '@inertiajs/inertia-vue3';
import { ref } from 'vue';

const form = useForm({
  name: "",
  category: "",
  price: "",
  image: null,
});

const handleImageChange = (event) => {
  form.image = event.target.files[0];
};

const handleSubmit = () => {
  form.post(route("menu.store"));
};
</script>

<template>
  <Head title="Create Menu" />

  <AuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Create Menu
      </h2>
    </template>
    <div class="py-6 flex">
      <div class="w-2/3 max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-6 bg-white border-b border-gray-200">
            <form name="createForm" @submit.prevent="handleSubmit">
              <div class="mb-4">
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" v-model="form.name" class="mt-1 p-2 border rounded-md w-full">
              </div>
              <div class="mb-4">
                <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
                <select id="category" v-model="form.category" class="mt-1 p-2 border rounded-md w-full">
                  <option value="Thịt">Thịt</option>
                  <option value="Hải sản">Hải sản</option>
                  <option value="Rau củ">Rau củ</option>
                  <option value="Nước uống">Nước uống</option>
                </select>
              </div>
              <div class="mb-4">
                <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                <input type="text" id="price" v-model="form.price" class="mt-1 p-2 border rounded-md w-full">
              </div>
              <div class="mb-4">
                <label for="image" class="block text-sm font-medium text-gray-700">Image</label>
                <input type="file" id="image" @change="handleImageChange" accept="image/*" class="mt-1 p-2 border rounded-md w-full">
              </div>
              <div class="flex items-center justify-between mb-6">
                <Link
                    className="px-6 py-2 text-white bg-red-500 rounded-md focus:outline-none"
                    :href="route('menu.list')"
                >
                    Back</Link
                >
                <button
                    type="submit"
                    class="px-6 py-2 font-bold text-white bg-green-500 rounded"
                >
                    Save
                </button>
            </div>            </form>
          </div>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>
