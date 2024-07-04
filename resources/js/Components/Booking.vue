<script setup>
import PublicLayout from "@/Layouts/PublicLayout.vue";
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import { ref } from "vue";

const form = useForm({
    customer_name: "",
    phone_number: "",
    reservation_date: "",
    reservation_time: "",
    number_of_guests: "",
});

const submit = () => {
    const formData = new FormData();
    formData.append("customer_name", form.customer_name);
    formData.append("phone_number", form.phone_number);
    formData.append("reservation_date", form.reservation_date);
    formData.append("reservation_time", form.reservation_time);
    formData.append("number_of_guests", form.number_of_guests);

    // Send POST request to store reservation
    const storeRequest = form.post(route("reservation.store"), {
        data: formData,
        preserveState: false,
        forceFormData: true,
    });

    // Redirect to HomePage after successful store
    storeRequest.then(() => {
        form.reset(); // Reset form fields
        form.get(route('/HomePage')); // Redirect to HomePage
    }).catch((error) => {
        console.error('Error storing reservation:', error);
        // Handle error if needed
    });
};

</script>

<template>
    <Head title="Create Reservation" />
    <PublicLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Create Reservation
            </h2>
        </template>
        <div class="py-6 flex justify-center items-center">
            <div class="w-full max-w-2xl">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <form name="createForm" @submit.prevent="submit">
                            <div class="flex flex-col">
                                <div class="mb-4">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="customer_name"
                                        >Customer Name:</label
                                    >
                                    <input
                                        type="text"
                                        id="customer_name"
                                        v-model="form.customer_name"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                                <div class="mb-4">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="phone_number"
                                        >Phone Number:</label
                                    >
                                    <input
                                        type="text"
                                        id="phone_number"
                                        v-model="form.phone_number"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                <div class="mb-4">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="reservation_date"
                                        >Reservation Date:</label
                                    >
                                    <input
                                        type="date"
                                        id="reservation_date"
                                        v-model="form.reservation_date"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                <div class="mb-4">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="reservation_time"
                                        >Reservation Time:</label
                                    >
                                    <input
                                        type="time"
                                        id="reservation_time"
                                        v-model="form.reservation_time"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                <div class="mb-4">
                                    <label
                                        class="block text-gray-700 text-sm font-bold mb-2"
                                        for="number_of_guests"
                                        >Slots:</label
                                    >
                                    <input
                                        type="number"
                                        id="number_of_guests"
                                        v-model="form.number_of_guests"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                <div
                                    class="flex items-center justify-between mb-6"
                                >
                                    <Link
                                        class="px-6 py-2 text-white bg-red-500 rounded-md focus:outline-none"
                                        :href="route('reservation.list')"
                                    >
                                        Back
                                    </Link>

                                    <button
                                        type="submit"
                                        class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                                    >
                                    
                                        Create
                                        
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </PublicLayout>
</template>
