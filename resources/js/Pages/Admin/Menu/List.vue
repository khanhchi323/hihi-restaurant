<script setup>
import BreezeAuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import { ref, onMounted } from "vue";

const props = defineProps(["menus", "categories"]);
const form = useForm();
const selectedCategory = ref("");

function destroy(id) {
    if (confirm("Bạn có chắc chắn muốn xóa không?")) {
        form.delete(route("menu.destroy", id));
    }
}

onMounted(() => {});
</script>

<template>
    <Head title="List Menu" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Menu Management
            </h2>
        </template>
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200 flex">
                        <div class="w-full">
                            <label
                                for="category"
                                class="block text-sm font-medium text-gray-700"
                            >
                                Category
                            </label>
                            <select
                                id="category_name"
                                v-model="selectedCategory"
                                class="mt-1 p-2 border rounded-md w-64"
                            >
                                <option value="">All</option>
                                <option
                                    v-for="(
                                        category_name, index
                                    ) in props.categories"
                                    :key="index"
                                    :value="category_name"
                                >
                                    {{ category_name }}
                                </option>
                            </select>
                        </div>
                        <div class="flex mb-6">
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
                                <th class="px-4 py-2 w-1/6">Description</th>
                                <th class="px-4 py-2 w-1/4">Image</th>
                                <th class="px-4 py-2 w-16">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr
                                v-for="menu in props.menus"
                                :key="menu.id"
                                class="text-center"
                            >
                                <td class="border px-2 py-2 w-16">
                                    {{ menu.id }}
                                </td>
                                <td class="border px-4 py-2 w-1/6">
                                    {{ menu.category_name }}
                                </td>
                                <td class="border px-4 py-2 w-1/5">
                                    {{ menu.menu_name }}
                                </td>
                                <td class="border px-4 py-2 w-1/6">
                                    {{ menu.price }}
                                </td>
                                <td class="border px-4 py-2 w-1/5">
                                    {{ menu.description }}
                                </td>
                                <td class="border px-4 py-2">
                                    <img
                                        :src="`/storage/${menu.image}`"
                                        alt="Menu Image"
                                        class="mx-auto"
                                        style="
                                            width: 100px;
                                            height: 100px;
                                            object-fit: cover;
                                        "
                                    />
                                </td>
                                <td class="border px-4 py-2">
                                    <div class="flex flex-col space-y-2">
                                        <Link
                                            tabIndex="1"
                                            class="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                            :href="route('menu.edit', menu.id)"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            @click="destroy(menu.id)"
                                            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="props.menus && props.menus.length === 0">
                                <td
                                    colspan="4"
                                    class="border px-4 py-2 text-center"
                                >
                                    Không có danh mục nào
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
