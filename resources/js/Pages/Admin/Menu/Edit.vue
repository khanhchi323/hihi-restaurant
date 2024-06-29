<script setup>
import { defineProps, useForm } from "@inertiajs/inertia-vue3";
import BreezeAuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import Head from "@inertiajs/inertia-vue3";
import { ref } from "vue";

const props = defineProps({
    menu: Object,
});
const form = useForm({
    menu_name: props.menu.menu_name,
    category_name: props.menu.category_name,
    price: props.menu.price,
    description: props.menu.description,
    image: props.menu.image,
});

const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        form.image = file;
        imagePreview.value = URL.createObjectURL(file);
    }
};

const submit = () => {
    form.post(route("menu.update", props.menu.id), {
        forceFormData: true,
    });
};
const imagePreview = ref(null);
</script>
<template>
    <Head title="Edit Menu" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Edit Menu
            </h2>
        </template>
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 w-2/3">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <form name="createForm" @submit.prevent="submit">
                            <div class="flex flex-col">
                                <div class="mb-4">
                                    <label
                                        for="price"
                                        class="block text-sm font-medium text-gray-700"
                                        >Name</label
                                    >
                                    <input
                                        type="text"
                                        id="price"
                                        v-model="form.menu_name"
                                        class="mt-1 p-2 border rounded-md w-full"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label
                                        for="price"
                                        class="block text-sm font-medium text-gray-700"
                                        >Category</label
                                    >
                                    <input
                                        type="text"
                                        id="price"
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
                                        >Image</label
                                    >
                                    <img
                                        className="px-4 py-2 text-blue-800"
                                        :src="`/storage/${props.menu.image}`"
                                        alt="image"
                                        width="150"
                                        height="150"
                                    />
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
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
