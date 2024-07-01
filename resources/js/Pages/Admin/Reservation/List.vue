<template>
 <Head title="List Reservation" />
<AuthenticatedLayout>
<template #header>
    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Menu Management
            </h2>
        </template>
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200 flex">
                        <div class="w-full">
                            <label
                                for="category"
                                class="block text-sm font-medium text-gray-700"
                            >
                                Reservation Table
                            </label>
                            
                        </div>
                        <div class="flex mb-6">
                            <Link
                                class="px-6 py-2 text-white bg-green-500 rounded-md focus:outline-none"
                                :href="route('reservation.create')"
                            >
                                Create
                            </Link>
                        </div>
                    </div>

                    <table class="w-full">
                        <thead>
                            <tr>
                                <th class="px-4 py-2 w-16">ID</th>
                                <th class="px-4 py-2 w-1/5">Customer Name</th>
                                <th class="px-4 py-2 w-1/5">Phone Number</th>
                                <th class="px-4 py-2 w-1/6">Reservation Date</th>
                                <th class="px-4 py-2 w-1/6">Reservation Time</th>
                                <th class="px-4 py-2 w-1/4">Number of guests</th>
                                <th class="px-4 py-2 w-16">Table ID</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr
                                v-for="reservation in props.reservations"
                                :key="reservation.id"
                                class="text-center"
                            >
                                <td class="border px-2 py-2 w-16">
                                    {{ reservation.reservation_id}}
                                </td>
                                <td class="border px-4 py-2 w-1/6">
                                    {{ reservation.customer_name }}
                                </td>
                                <td class="border px-4 py-2 w-1/5">
                                    {{ reservation.phone_number}}
                                </td>
                                <td class="border px-4 py-2 w-1/6">
                                    {{ reservation.reservation_date }}
                                </td>
                                <td class="border px-4 py-2 w-1/5">
                                    {{ reservation.reservation_time }}
                                </td>
                                <td class="border px-4 py-2 w-1/5">
                                    {{ reservation.number_of_guests }}
                                </td>
                                <td class="border px-4 py-2 w-1/5">
                                    {{ reservation.table_id }}
                                </td>
                                <td class="border px-4 py-2">
                                    <div class="flex flex-col space-y-2">
                                        <Link
                                            tabIndex="1"
                                            className="px-4 py-2 text-sm text-white bg-blue-500 rounded"
                                            :href="route('reservation.edit', reservation.id)"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            @click="destroy(reservation.id)"
                                            class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="props.reservations && props.reservations.length === 0">
                                <td
                                    colspan="7"
                                    class="border px-4 py-2 text-center"
                                >
                                    Không có danh mục nào
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>   
</AuthenticatedLayout>
   
</template>

<script setup>
import AuthentictedLayout from '@/Layouts/AuthenticatedLayout.vue';     
import {Head, Link, useForm, Inertia } from "@inertiajs/inertia-vue3";

const props = defineProps(["reservations"]);
const form = useForm();

function destroy(id) {
    if (confirm("Bạn có chắc chắn muốn xóa không?")) {
        form.delete(route("reservation.destroy", id));
    }
}   
</script>

