<script setup>
import BreezeAuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import { onMounted } from "vue";
import { Inertia } from "@inertiajs/inertia";

const props = defineProps(["areas"]);
const form = useForm();

function destroy(id) {
    if (confirm("Bạn có chắc chắn muốn xóa danh mục này không?")) {
        form.delete(route("area.destroy", id), {
            onFinish: () => {
                Inertia.reload({ only: ["areas"] });
                console.log("Area deleted successfully");
            },
        });
    }
}

onMounted(() => {});
</script>

<template>
    <Head title="List Area" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Manage Area
            </h2>
        </template>
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <div class="flex items-center justify-between mb-6">
                            <Link
                                class="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                :href="route('area.create')"
                            >
                                Create</Link
                            >
                        </div>
                        <table class="w-full bg-gray-100">
                            <thead>
                                <tr>
                                    <th class="border px-4 py-2 w-32">ID</th>
                                    <th class="border px-4 py-2">Name</th>
                                    <th class="border px-4 py-2 w-32">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="text-center">
                                <tr v-for="area in areas" :key="area.id">
                                    <td class="border px-4 py-2">
                                        {{ area.id }}
                                    </td>
                                    <td class="border px-4 py-2">
                                        {{ area.area_name }}
                                    </td>
                                    <td class="border px-4 py-2">
                                        <div class="flex flex-col space-y-2">
                                            <Link
                                                tabIndex="1"
                                                class="px-4 py-2 text-sm text-center text-white bg-blue-500 rounded"
                                                :href="
                                                    route('area.edit', area.id)
                                                "
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                @click="destroy(area.id)"
                                                class="px-2 py-1 bg-red-500 text-white text-center rounded hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr
                                    v-if="
                                        props.areas && props.areas.length === 0
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
