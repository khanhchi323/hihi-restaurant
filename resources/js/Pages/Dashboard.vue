<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import HomeforStaff from "@/Components/HomeforStaff.vue";
import Order from "@/Components/Order.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { ref } from "vue";

const orderItems = ref([]);

const addToOrder = (menu) => {
    const existingItem = orderItems.value.find((item) => item.id === menu.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        orderItems.value.push({
            id: menu.id,
            name: menu.menu_name,
            price: menu.price,
            image: `/storage/${menu.image}`,
            quantity: 1,
        });
    }
};
</script>

<template>
    <AuthenticatedLayout>
        <Head title="Staff " />
        <div>
            <div class="w-[74%] bg-slate-100 pl-6 h-full">
                <HomeforStaff @add-to-order="addToOrder" />
            </div>
            <div class="fixed top-0 right-0 w-[26%] px-4">
                <Order :orderItems="orderItems" />
            </div>
        </div>
    </AuthenticatedLayout>
</template>
