<script setup>
import BreezeAuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm, Inertia } from "@inertiajs/inertia-vue3";
import { onMounted } from "vue";

const props = defineProps(["categories"]);
const form = useForm();

function routeToEdit(id) {
    // Tạo URL chuyển hướng đến trang chỉnh sửa với id của category
    const editUrl = route('category.edit', { id });

    // Chuyển hướng đến trang chỉnh sửa
    Inertia.visit(editUrl, {
        // Truyền dữ liệu của category theo yêu cầu
        data: {
            category: props.categories.find(category => category.id === id)
        }
    });
}


function destroy(id) {
    if (confirm("Bạn có chắc chắn muốn xóa danh mục này không?")) {
        form.delete(route("category.destroy", id), {
            onFinish: () => {
                // Xử lý sau khi xóa, làm mới danh sách danh mục
                Inertia.reload({ only: ["categories"] });
                console.log("Category deleted successfully");
            },
        });
    }
}

onMounted(() => {
    // Làm bất cứ điều gì bạn cần khi component được mounted
});
</script>

<template>
    <Head title="List Category" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Quản Lý Danh Mục
            </h2>
        </template>
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <div class="flex items-center justify-between mb-6">
                            <Link
                                class="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                :href="route('category.create')"
                            >
                                Create
                            </Link>
                        </div>

                        <table class="w-full table-fixed">
                            <thead>
                                <tr class="bg-gray-100">
                                    <th class="px-4 py-2 border w-16">ID</th>
                                    <th class="px-4 py-2 border w-1/2">
                                        Category
                                    </th>
                                    <th class="px-4 py-2 border w-1/2">Image</th>
                                    <th class="px-4 py-2 border w-32">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="category in props.categories"
                                    :key="category.id"
                                    class="text-center"
                                >
                                    <td class="border px-4 py-2">
                                        {{ category.id }}
                                    </td>
                                    <td class="border px-4 py-2">
                                        {{ category.name }}
                                    </td>
                                    <td class="border px-4 py-2">
                                        <img
                                            :src="`/storage/app/public/${category.image}`"
                                            alt="Category Image"
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
                                            className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                            :href="route('category.edit', category.id)"
                                        >
                                            Edit
                                        </Link>
                                            <button
                                                @click="destroy(category.id)"
                                                class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr
                                    v-if="
                                        props.categories &&
                                        props.categories.length === 0
                                    "
                                >
                                    <td
                                        colspan="4"
                                        class="border px-4 py-2 text-center"
                                    >
                                        Không có danh mục nào.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
