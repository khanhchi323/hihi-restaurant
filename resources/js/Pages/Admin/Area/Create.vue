<script setup>
import BreezeAuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";

const form = useForm({
    area_name: "",
});

function submit() {
    form.post(route("area.store"));
}
</script>

<template>
    <Head title="Create Area" />

    <BreezeAuthenticatedLayout>
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
                                    <label for="name" class="">Name Area</label>
                                    <input
                                        id="name"
                                        type="text"
                                        class="mt-1 block w-full rounded-lg border-gray-400"
                                        v-model="form.area_name"
                                    />
                                </div>
                            </div>
                            <div class="flex items-center justify-between mb-6">
                                <Link
                                    class="px-6 py-2 text-white bg-red-500 rounded-md focus:outline-none"
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
    </BreezeAuthenticatedLayout>
</template>
