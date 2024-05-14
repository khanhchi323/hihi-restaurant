<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";

const form = useForm({
    title: "",
});

const submit = () => {
    form.post(route("areas.store"));
};
</script>

<template>
    <Head title="Create Area" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Create Area
            </h2>
        </template>
        <div class="py-6 flex">
            <div class="w-2/3 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <form name="createForm" @submit.prevent="submit">
                            <div class="flex flex-col">
                                <div class="mb-4">
                                    <label for="title" class=""
                                        >Name Area</label
                                    >
                                    <input
                                        id="title"
                                        type="text"
                                        class="mt-1 block w-full rounded rounded-lg border-gray-400"
                                        v-model="form.title"
                                        autofocus
                                    />
                                    <span
                                        class="text-red-600"
                                        v-if="form.errors.title"
                                    >
                                        {{ form.errors.title }}
                                    </span>
                                </div>
                            </div>
                            <div class="flex items-center justify-between mb-6">
                                <Link
                                    className="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                    :href="route('area.list')"
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
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
