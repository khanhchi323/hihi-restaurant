<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";

defineProps({
    areas: Array,
});

const form = useForm();


function destroy(id) {
    if (confirm("Are you sure you want to Delete")) {
        form.delete(route("areas.destroy", id));
    }
}
</script>

<template>
    <Head title="List Area" />

    <AuthenticatedLayout>
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
                                    <th class="border px-4 py-2 w-64">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="area in areas" :key="area.id">
                                    <td class="border px-4 py-2">
                                        {{ area.id }}
                                    </td>
                                    <td class="border px-4 py-2">
                                        {{ area.name }}
                                    </td>
                                    <td class="border px-4 py-2">
                                        <router-link
                                            :to="'/Area/' + area.id + '/edit'"
                                            class="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                            >Edit</router-link
                                        >
                                        <button
                                            @click="destroy(area.id)"
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
        </div>
    </AuthenticatedLayout>
</template>
