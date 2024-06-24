<script setup>
import { defineProps, useForm } from "@inertiajs/inertia-vue3";
import BreezeAuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import Head from "@inertiajs/inertia-vue3";

const props = defineProps({
    area: Object,
});

const form = useForm({
    area_name: props.area.area_name,
});

const submit = () => {
    form.post(route("area.update", props.area.id), {
        forceFormData: true,
    });
};
</script>

<template>
    <Head title="Edit Area" />
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Edit Area
            </h2>
        </template>
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <form name="createForm" @submit.prevent="submit">
                            <div class="mb-4">
                                <label
                                    for="name"
                                    class="block text-sm font-medium text-gray-700"
                                    >Name:</label
                                >
                                <input
                                    type="text"
                                    id="name"
                                    v-model="form.area_name"
                                    class="mt-1 p-2 border rounded-md w-full"
                                />
                            </div>
                            <div class="flex items-center justify-between mb-6">
                                <Link
                                    class="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    :href="route('area.list')"
                                    aria-label="Back to Area List"
                                    title="Back to Area List"
                                >
                                    Back
                                </Link>
                                <button
                                    type="submit"
                                    class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                    aria-label="Save Area"
                                    title="Save Area"
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
