<script setup>
import BreezeAuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import { ref } from "vue";

const form = useForm({
    name: "",
    category_name: "",
    price: "",
    image: null,
});
const imagePreview = ref(null);
const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        form.image = file;
        imagePreview.value = URL.createObjectURL(file);
    }
};

const submit = () => {
    const formData = new FormData();
    formData.append("menu_name", form.menu_name);
    formData.append("category_name", form.category_name);
    formData.append("price", form.price);
    if (form.image) {
        formData.append("image", form.image);
    }

    form.post(route("menu.store"), {
        data: formData,
        onSuccess: () => {
            form.reset();
        },
        onError: () => {},
        preserveState: false,
        forceFormData: true,
    });
};
</script>

<template>
    <Head title="Create Menu" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Create Menu
            </h2>
        </template>
        <div class="py-6 flex">
            <div class="w-2/3 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <form name="createForm" @submit.prevent="submit">
                            <div class="mb-4">
                                <label
                                    for="name"
                                    class="block text-sm font-medium text-gray-700"
                                    >Name</label
                                >
                                <input
                                    type="text"
                                    id="name"
                                    v-model="form.name"
                                    class="mt-1 p-2 border rounded-md w-full"
                                />
                            </div>
                            <div class="mb-4">
                                <label
                                    for="name"
                                    class="block text-sm font-medium text-gray-700"
                                    >Category</label
                                >
                                <input
                                    type="text"
                                    id="name"
                                    v-model="form.category_name"
                                    class="mt-1 p-2 border rounded-md w-full"
                                />
                            </div>
                            <div class="mb-4">
                                <label
                                    for="price"
                                    class="block text-sm font-medium text-gray-700"
                                    >Price</label
                                >
                                <input
                                    type="text"
                                    id="price"
                                    v-model="form.price"
                                    class="mt-1 p-2 border rounded-md w-full"
                                />
                            </div>
                            <div class="mb-4">
                                <label
                                    for="image"
                                    class="block text-sm font-medium text-gray-700"
                                    >Ảnh:</label
                                >
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
                                    style="
                                        max-width: 100px;
                                        max-height: 100px;
                                    "
                                />
                            </div>
                            <div class="flex items-center justify-between mb-6">
                                <Link
                                    class="px-6 py-2 text-white bg-red-500 rounded-md focus:outline-none"
                                    :href="route('menu.list')"
                                >
                                    Back
                                </Link>
                                <button
                                    type="submit"
                                    class="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
