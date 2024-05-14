<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm, route } from "@inertiajs/inertia-vue3";
import { defineProps } from "vue";

const props = defineProps({
    Tables: Object,
});

// const form = useForm({
//   title: props.area.title,
//   body: props.area.body,
// });

const submit = () => {
    form.put(route("table.update", props.table.id))
        .then(() => {
            // Redirect to list page after successful update
            window.location.href = route("table.list");
        })
        .catch((error) => {
            // Handle errors here, e.g., display error messages
            console.error("Error submitting form:", error);
        });
};
</script>

<template>
    <Head title="Edit Table" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Edit Table
            </h2>
        </template>
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <form name="createForm" @submit.prevent="submit">
                            <div class="flex flex-col">
                                <div class="mb-4">
                                    <label
                                        for="area"
                                        class="block text-sm font-medium text-gray-700"
                                        >Area</label
                                    >
                                    <select
                                        v-model="tableArea"
                                        id="area"
                                        name="area"
                                        class="mt-1 p-2 border rounded-md w-full"
                                    >
                                        <option value="Area A">Area A</option>
                                        <option value="Area B">Area B</option>
                                        <option value="Area C">Area C</option>
                                        <!-- Thêm các tùy chọn khác nếu cần -->
                                    </select>
                                </div>
                                <div
                                    class="flex items-center justify-between mb-6"
                                >
                                    <Link
                                        class="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                        :href="route('table.list')"
                                    >
                                        Back
                                    </Link>
                                    <button
                                        type="submit"
                                        class="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
