<script setup>
import BreezeAuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm, Inertia } from "@inertiajs/inertia-vue3";
import { onMounted } from "vue";

const props = defineProps(["tables"]);
const form = useForm();

function destroy(id) {
    if (confirm("Bạn có chắc chắn muốn xóa danh mục này không?")) {
        form.delete(route("table.destroy", id), {
            onFinish: () => {
                // Xử lý sau khi xóa, làm mới danh sách danh mục
                Inertia.reload({ only: ["tables"] });
                console.log("Table deleted successfully");
            },
        });
    }
}

onMounted(() => {
    // Làm bất cứ điều gì bạn cần khi component được mounted
});
</script>

<template>
    <Head title="List Table" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Manage Table
            </h2>
        </template>
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <div class="flex items-center justify-between mb-6">
                            <Link
                                class="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                :href="route('table.create')"
                            >
                                Create
                            </Link>
                        </div>
                        <table
                            class="table-auto w-full border-collapse border border-gray-300"
                        >
                            <thead class="bg-gray-100">
                                <tr>
                                    <th class="border px-4 py-2 w-32">ID</th>
                                    <th class="border px-4 py-2">No. Table</th>
                                    <th class="border px-4 py-2">Area</th>
                                    <th class="border px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody class="text-center">
                                <tr v-for="table in tables" :key="table.id">
                                    <td class="border px-4 py-2">
                                        {{ table.id }}
                                    </td>
                                    <td class="border px-4 py-2">
                                        {{ table.number }}
                                    </td>
                                    <td class="border px-4 py-2">
                                        <div class="flex flex-col space-y-2">
                                            <Link
                                                tabIndex="1"
                                                class="px-4 py-2 text-sm text-center text-white bg-blue-500 rounded"
                                                :href="
                                                    route(
                                                        'table.edit',
                                                        table.id
                                                    )
                                                "
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                @click="destroy(table.id)"
                                                class="px-2 py-1 bg-red-500 text-white text-center rounded hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr
                                    v-if="
                                        props.tables &&
                                        props.tables.length === 0
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
