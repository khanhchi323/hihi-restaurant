<script setup>
import { defineProps, useForm } from "@inertiajs/inertia-vue3";
import BreezeAuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import Head from "@inertiajs/inertia-vue3";

const props = defineProps({
    category: Object,
});

const form = useForm({
    name: props.category.name,
    image: null,
});

const handleImageChange = (event) => {
    form.image = event.target.files[0];
};

const handleSubmit = () => {
    form.post(route("category.store"), {
        forceFormData: true,
    });
};
</script>
<template>
    <Head title="Edit Category" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Edit Category
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
                                Back
                            </Link>
                        </div>
                        <form @submit.prevent="handleSubmit" class="max-w-md">
                            <div class="mb-4">
                                <label
                                    for="name"
                                    class="block text-sm font-medium text-gray-700"
                                    >Name:</label
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
                            </div>
                            <button
                                type="submit"
                                class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
