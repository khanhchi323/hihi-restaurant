<template>
    <Head title="Create Table" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Create Table
            </h2>
        </template>
        <div class="py-6">
            <div class="max-w-2xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <form @submit.prevent="submit">
                            <div class="mb-4">
                                <label for="table_name" class="block text-gray-700">
                                    Table Name
                                </label>
                                <input
                                    v-model="form.table_name"
                                    type="text"
                                    id="table_name"
                                    name="table_name"
                                    class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            <div class="mb-4">
                                <label for="area_id" class="block text-gray-700">
                                    Area
                                </label>
                                <select
                                    v-model="form.area_id"
                                    id="area_id"
                                    name="area_id"
                                    class="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                >
                                    <option value="">Select an area</option>
                                    <option
                                        v-for="area in props.areas"
                                        :key="area.id"
                                        :value="area.id"
                                    >
                                        {{ area.area_name }}
                                    </option>
                                </select>
                            </div>
                            <div class="flex items-center justify-between mb-6">
                                <Link
                                    class="px-6 py-2 text-white bg-red-500 rounded-md focus:outline-none"
                                    :href="route('table.list')"
                                >
                                    Back
                                </Link>
                                <button
                                    type="submit"
                                    class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>

<script setup>
import BreezeAuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import { onMounted, defineProps } from "vue";
const props = defineProps(["tables"]);

const form = useForm({
    table_name: "",
    area_id: "", // Sử dụng area_id để lưu ID của khu vực
});

const submit = () => {
    post(route("table.store"), form);
};

onMounted(() => {
    console.log(props.areas);
});
</script>
