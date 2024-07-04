<script setup>
import { defineProps, useForm } from "@inertiajs/inertia-vue3";
import BreezeAuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Link } from "@inertiajs/inertia-vue3";
import Head from "@inertiajs/inertia-vue3";
import { ref } from "vue";


const props = defineProps({
    reservation: Object,
});
const form = useForm({
    customer_name: props.reservation.customer_name,
    phone_number: props.reservation.phone_number,
    reservation_date: props.reservation.reservation_date,
    reservation_time: props.reservation.reservation_time,
    number_of_guests: props.reservation.number_of_guests,
});


const submit = () => {
    form.post(route("reservation.update", props.reservation.id), {
        forceFormData: true,
    });
};
</script>

<template>
    <Head title="Edit Reservation" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Edit Reservation
            </h2>
        </template>

        <div class="py-6 flex justify-center items-center">
            <div class="w-full max-w-2xl">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <form @submit.prevent="submit">
                            <div class="flex flex-col">
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="customer_name">Tên Khách Hàng:</label>
                                    <input
                                        type="text"
                                        id="customer_name"
                                        v-model="form.customer_name"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="phone_number">Số Điện Thoại:</label>
                                    <input
                                        type="text"
                                        id="phone_number"
                                        v-model="form.phone_number"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="reservation_date">Ngày Đặt:</label>
<input
                                        type="date"
                                        id="reservation_date"
                                        v-model="form.reservation_date"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="reservation_time">Giờ Đặt:</label>
                                    <input
                                        type="time"
                                        id="reservation_time"
                                        v-model="form.reservation_time"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-700 text-sm font-bold mb-2" for="number_of_guests">Số Khách:</label>
                                    <input
                                        type="number"
                                        id="number_of_guests"
                                        v-model="form.number_of_guests"
                                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        required
                                    />
                                </div>
                                <div class="flex items-center justify-between mb-6">
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
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>