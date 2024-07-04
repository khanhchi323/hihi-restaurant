<script setup>
import BreezeAuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import { ref } from "vue";

const form = useForm({
    category_name: "",
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
    formData.append("category_name", form.category_name);
    if (form.image) {
        formData.append("image", form.image);
    }

    form.post(route("category.store"), {
        data: formData,
        onSuccess: () => {      
            form.reset();
            imagePreview.value = "";
        },
        onError: () => {},
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
                Create Category
            </h2>
        </template>
        <div class="py-6 flex justify-center items-center">
            <div class="w-full max-w-2xl">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <form name="createForm" @submit.prevent="submit">
                            <div class="flex flex-col">
                                <div class="mb-4">
                                    <label
                                        for="name"
                                        class="block text-sm font-medium text-gray-700"
                                        >Name</label
                                    >
                                    <input
                                        type="text"
                                        id="category_name"
                                        v-model="form.category_name"
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
                                <div
                                    class="flex items-center justify-between mb-6"
                                >
                                    <Link
                                        class="px-6 py-2 text-white bg-red-500 rounded-md focus:outline-none"
                                        :href="route('category.list')"
                                    >
                                        Back
                                    </Link>

                                    <button
                                        type="submit"
                                        class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                    >
                                        Create
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
