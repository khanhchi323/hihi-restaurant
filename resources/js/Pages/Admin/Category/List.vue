<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";

defineProps({
    category: Array,
});

const form = useForm();

function destroy(id) {
    if (confirm("Are you sure you want to Delete")) {
        form.delete(route("category.destroy", id));
    }
}
</script>

<template>
    <Head title="List Category" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Manage Category
            </h2>
        </template>
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <div className="flex items-center justify-between mb-6">
                            <Link
                                className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                :href="route('category.create')"
                            >
                                Create</Link
                            >
                        </div>

                        <table class="w-full table-fixed">
                            <thead>
                                <tr class="bg-gray-100">
                                    <th class="px-4 py-2 border w-32">ID</th>
                                    <th class="px-4 py-2 border w-">
                                        Category
                                    </th>
                                    <th class="px-4 py-2 border w-">Image</th>
                                    <th class="px-4 py-2 border w-32">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="menu in filteredMenus"
                                    :key="menu.id"
                                    class="text-center"
                                >
                                    <td class="border px-2 py-2 w-16">
                                        {{ menu.id }}
                                    </td>
                                    <td class="border px-4 py-2 w-2/5">
                                        {{ menu.category }}
                                    </td>
                                    <th class="px-4 py-2 border w-2/5">
                                        <img
                                            src="{{ menu.img }}"
                                            alt="Menu Image"
                                            style="width: 100px; height: 100px"
                                        />
                                    </th>
                                    <td class="border px-2 w-16">
                                        <div class="flex flex-col text-white">
                                            <button
                                                class="mb-2 bg-sky-500 py-1 rounded rounded-lg"
                                            >
                                                Edit
                                            </button>
                                            <Link
                                                className="px-6 py-2 text-white bg-sky-500 rounded-md focus:outline-none"
                                                :href="route('category.create')"
                                                >Edit</Link
                                            >
                                            <button
                                                class="bg-red-500 py-1 rounded rounded-lg"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <!-- Button thêm menu mới -->
    </AuthenticatedLayout>
</template>
