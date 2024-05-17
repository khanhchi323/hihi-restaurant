<script setup>
import BreezeAuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";

const newCategory = useForm({
  name: "",
  image: "",
});

const submit = () => {
  form.post(route("category.store"));
};
</script>
<template>
  <Head title="Dashboard" />

  <BreezeAuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Create Category
      </h2>
    </template>
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-6 bg-white border-b border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <Link
                className="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                :href="route('category.list')"
              >
                Back
              </Link>
            </div>

            <form name="createForm" @submit.prevent="submit">
              <div className="flex flex-col">
                <div className="mb-4">
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                    >Name:</label
                  >
                  <input
                    type="text"
                    id="name"
                    v-model="newCategory.list"
                    class="mt-1 p-2 border rounded-md w-full"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="image"
                    class="block text-sm font-medium text-gray-700"
                    >Image:</label
                  >
                  <input
                    type="file"
                    id="image"
                    @change="handleImageChange"
                    class="mt-1 p-2 border rounded-md w-full"
                  />
                  <img
                    v-if="newCategory.image"
                    :src="newCategory.image"
                    alt="Category Image"
                    class="mt-2"
                    style="max-width: 100px; max-height: 100px"
                  />
                </div>
                <button
                  type="submit"
                  class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </BreezeAuthenticatedLayout>
</template>
  
  
  