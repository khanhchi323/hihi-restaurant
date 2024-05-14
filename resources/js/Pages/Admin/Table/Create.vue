<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

const form = useForm({
    name: "",
    area: "",
});

const submit = () => {
    form.post(route("table.store"), {
        onFinish: () => {
            form.reset();
        },
    });
};
</script>

<template>
    <Head title="Create Table" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Create Table
            </h2>
        </template>
        <div class="py-6 flex">
            <div class="w-2/3 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <form @submit.prevent="submit">
                            <div class="flex flex-col">
                                <div class="mb-4">
                                    <label
                                        for="name"
                                        class="block text-sm font-medium text-gray-700"
                                        >No. Table</label
                                    >
                                    <input
                                        type="text"
                                        v-model="form.name"
                                        id="name"
                                        name="name"
                                        class="mt-1 p-2 border rounded-md w-full"
                                    />
                                    <div
                                        v-if="form.errors.name"
                                        class="text-red-600 mt-1"
                                    >
                                        {{ form.errors.name }}
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label
                                        for="area"
                                        class="block text-sm font-medium text-gray-700"
                                        >Area</label
                                    >
                                    <select
                                        v-model="form.area"
                                        id="area"
                                        name="area"
                                        class="mt-1 p-2 border rounded-md w-full"
                                    >
                                        <option value="Area A">Area A</option>
                                        <option value="Area B">Area B</option>
                                        <option value="Area C">Area C</option>
                                    </select>
                                    <div
                                        v-if="form.errors.area"
                                        class="text-red-600 mt-1"
                                    >
                                        {{ form.errors.area }}
                                    </div>
                                </div>
                                <div
                                    class="flex items-center justify-between mb-6"
                                >
                                    <Link
                                        className="px-6 py-2 text-white bg-red-500 rounded-md focus:outline-none"
                                        :href="route('table.list')"
                                    >
                                        Back</Link
                                    >
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
