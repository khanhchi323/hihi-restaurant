<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
defineProps({
    menus: Array,
});

const form = useForm();  
function destroy(id) {
    if (confirm("Are you sure you want to delete?")) {
        form.delete(route("menu.destroy", id));  
    }
}
</script>

<template>
    <Head title="List Menu" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Manage Menu
            </h2>
        </template>
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <div class="w-2/3">
                            <label
                                for="category"
                                class="block text-sm font-medium text-gray-700"
                            >
                                Category
                            </label>
                            <select
                                id="category"
                                v-model="selectedCategory"
                                class="mt-1 p-2 border rounded-md w-64"
                            >
                                <option value="">All</option>
                                <option
                                    v-for="(category, index) in categories"
                                    :key="index"
                                    :value="category"
                                >
                                    {{ category }}
                                </option>
                            </select>
                        </div>
                        <div class="flex items-center justify-between mb-6">
                            <Link
                                class="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                :href="route('menu.create')"
                            >
                                Create
                            </Link>
                        </div>
                    </div>

                    <table class="w-full">
                        <thead>
                            <tr>
                                <th class="px-4 py-2 w-16">ID</th>
                                <th class="px-4 py-2 w-1/5">Category</th>
                                <th class="px-4 py-2 w-1/5">Name</th>
                                <th class="px-4 py-2 w-1/6">Price</th>
                                <th class="px-4 py-2 w-1/4">Image</th>
                                <th class="px-4 py-2 w-16">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="menu in menus"
                                :key="menu.id"
                                class="text-center"
                            >
                                <td class="border px-2 py-2 w-16">
                                    {{ menu.id }}
                                </td>
                                <td class="border px-4 py-2 w-1/6">
                                    {{ menu.category }}
                                </td>
                                <td class="border px-4 py-2 w-1/5">
                                    {{ menu.name }}
                                </td>
                                <td class="border px-4 py-2 w-1/6">
                                    {{ menu.price }}
                                </td>
                                <td class="px-4 py-2 w-1/6">
                                    <img
                                        :src="menu.img"
                                        alt="Menu Image"
                                        style="width: 100px; height: 100px"
                                    />
                                </td>
                                <td class="border px-4 py-2">
                                    <router-link
                                        :to="'/menu/' + menu.id + '/edit'"
                                        class="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    >
                                        Edit
                                    </router-link>
                                    <button
                                        @click="destroy(menu.id)"
                                        class="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
