<script setup>
import BreezeAuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm, Inertia } from "@inertiajs/inertia-vue3";
import { onMounted } from "vue";

const props = defineProps(["tables", "areas"]);
const form = useForm();

function destroy(id) {
    if (confirm("Bạn có chắc chắn muốn xóa không?")) {
        form.delete(route("table.destroy", id));
    }
}

onMounted(() => {});
</script>

<template>
    <Head title="List Table" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Table Management
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

                        <table class="w-full table-fixed">
                            <thead>
                                <tr class="bg-gray-100">
                                    <th class="px-4 py-2 border w-16">ID</th>
                                    <th class="px-4 py-2 border">Table</th>
                                    <th class="px-4 py-2 border">Area</th>
                                    <th class="px-4 py-2 border w-32">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="table in props.tables"
                                    :key="table.id"
                                    class="text-center"
                                >
                                    <td class="border px-4 py-2">
                                        {{ table.id }}
                                    </td>
                                    <td class="border px-4 py-2">
                                        {{ table.table_name }}
                                    </td>
                                    <td class="border px-4 py-2">
                                        <span
                                            v-if="areas && areas[table.area_id]"
                                        >
                                            {{ areas[table.area_id].area_name }}
                                        </span>
                                    </td>
                                    <td class="border px-4 py-2">
                                        <div class="flex flex-col space-y-2">
                                            <Link
                                                tabIndex="1"
                                                class="px-4 py-2 text-sm text-white bg-blue-500 rounded"
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
                                                class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
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
                                        Không có bàn nào.
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
