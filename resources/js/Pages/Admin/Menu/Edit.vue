<script setup>
import { defineProps, useForm } from "@inertiajs/inertia-vue3";
import BreezeAuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Link, Head } from "@inertiajs/inertia-vue3";
import { ref } from "vue";

const props = defineProps({
    menu: Object,
});

const form = useForm({
    menu_name: props.menu.menu_name,
    category_name: props.menu.category_name,
    price: props.menu.price,
    description: props.menu.description,
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
    formData.append("description", form.description);
    formData.append("price", form.price);
    if (form.image) {
        formData.append("image", form.image);
    }

    form.post(route("menu.update", props.menu.id), {
        data: formData,
        forceFormData: true,
        onSuccess: () => {
            imagePreview.value = null;
        },
        onError: () => {},
        preserveState: false,
    });
};
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
                        <form name="editForm" @submit.prevent="submit">
                            <div class="flex flex-col">
                                <div class="mb-4">
                                    <label
                                        for="menu_name"
                                        class="block text-sm font-medium text-gray-700"
                                        >Menu Name</label
                                    >
                                    <input
                                        type="text"
                                        id="menu_name"
                                        v-model="form.menu_name"
                                        class="mt-1 p-2 border rounded-md w-full"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label
                                        for="category_name"
                                        class="block text-sm font-medium text-gray-700"
                                        >Category</label
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
                                        for="description"
                                        class="block text-sm font-medium text-gray-700"
                                        >Description</label
                                    >
                                    <input
                                        type="text"
                                        id="description"
                                        v-model="form.description"
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
                                        v-if="props.menu.image"
                                        :src="`/storage/${props.menu.image}`"
                                        alt="Current Image"
                                        width="150"
                                        height="150"
                                        class="mt-2 mb-2"
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
                                        alt="Image Preview"
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
                                        >Back</Link
                                    >
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
