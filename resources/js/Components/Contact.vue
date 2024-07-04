<!-- components/Contact.vue -->
<script setup>
import PublicLayout from "@/Layouts/PublicLayout.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";

const form = useForm({
    user_name: "",
    email: "",
    phonenumber: "", 
    message: "",
});

function submit() {
    form.post(route("contact.store"));
}
</script>

<template>
    <Head title="Contact Us" />

    <PublicLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Contact Us
            </h2>
        </template>
        <div class="py-6 flex">
            <div class="w-2/3 max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <form name="createForm" @submit.prevent="submit" method="POST">
                            <div class="mb-4">
                                <label
                                    for="user_name"
                                    class="block text-sm font-medium text-gray-700"
                                    >Name</label
                                >
                                <input
                                    id="user_name"
                                    type="text"
                                    v-model="form.user_name"
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div class="mb-4">
                                <label
                                    for="phonenumber"
                                    class="block text-sm font-medium text-gray-700"
                                    >Phone Number</label
                                >
                                <input
                                    id="phonenumber"
                                    type="text"
                                    v-model="form.phonenumber"
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div class="mb-4">
                                <label
                                    for="email"
                                    class="block text-sm font-medium text-gray-700"
                                    >Email</label
                                >
                                <input
                                    id="email"
                                    type="email"
                                    v-model="form.email"
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div class="mb-4">
                                <label
                                    for="message"
                                    class="block text-sm font-medium text-gray-700"
                                    >Message</label
                                >
                                <textarea
                                    id="message"
                                    v-model="form.message"
                                    class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                ></textarea>
                            </div>
                            <div class="flex items-center justify-between">
                                <Link
                                    :href="route('HomePage')"
                                    class="text-sm font-medium text-gray-500 hover:text-gray-700"
                                >
                                    Back to Home
                                </Link>
                                <button
                                    type="submit"
                                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </PublicLayout>
</template>
