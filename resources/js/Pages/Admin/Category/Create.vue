<script setup>
import BreezeAuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import { ref } from "vue";

const newCategory = useForm({
  name: "",
  image: null, // Chỉnh sửa để lưu đối tượng tệp
});

const imagePreview = ref("");

const handleImageChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    newCategory.image = file; // Lưu đối tượng tệp
    imagePreview.value = URL.createObjectURL(file); // Tạo URL xem trước
  }
};

const submit = () => {
  const formData = new FormData();
  formData.append('name', newCategory.name);
  if (newCategory.image) {
    formData.append('image', newCategory.image);
  }

  newCategory.post(route("category.store"), {
    data: formData,
    onSuccess: () => {
      // Tuỳ chọn: Đặt lại form hoặc chuyển trang sau khi thành công
      newCategory.reset();
      imagePreview.value = "";
    },
    onError: () => {
      // Xử lý lỗi nếu cần thiết
    },
    preserveState: false,
    forceFormData: true,
  });
};
</script>

<template>
  <Head title="Create Category" />

  <BreezeAuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Tạo Danh Mục
      </h2>
    </template>
    <div class="py-12">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div class="p-6 bg-white border-b border-gray-200">
            <div class="flex items-center justify-between mb-6">
              <Link
                class="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                :href="route('category.list')"
              >
                Quay lại
              </Link>
            </div>

            <form name="createForm" @submit.prevent="submit">
              <div class="flex flex-col">
                <div class="mb-4">
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                  >Tên:</label>
                  <input
                    type="text"
                    id="name"
                    v-model="newCategory.name"
                    class="mt-1 p-2 border rounded-md w-full"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="image"
                    class="block text-sm font-medium text-gray-700"
                  >Ảnh:</label>
                  <input
                    type="file"
                    id="image"
                    @change="handleImageChange"
                    class="mt-1 p-2 border rounded-md w-full"
                  />
                  <img
                    v-if="imagePreview"
                    :src="imagePreview"
                    alt="Ảnh Danh Mục"
                    class="mt-2"
                    style="max-width: 100px; max-height: 100px"
                  />
                </div>
                <button
                  type="submit"
                  class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Tạo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </BreezeAuthenticatedLayout>
</template>
    