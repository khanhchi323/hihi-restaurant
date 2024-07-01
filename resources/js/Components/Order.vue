<template>
    <div class="flex justify-between flex-col mt-20">
        <!-- Current Order -->
        <div>
            <div class="w-full h-12 bg-white p-2">
                <b class="text-xl text-gray-800">Current Order</b>
            </div>
            <div
                class="text-gray-800 w-full h-64 overflow-y-auto bg-white p-2 rounded-md"
            >
                <div
                    v-for="item in orderItems"
                    :key="item.id"
                    class="flex items-center mb-2 py-2 pr-2 border-b border-gray-200"
                >
                    <img
                        :src="item.image"
                        :alt="item.name"
                        class="w-16 h-16 mr-4 rounded-lg shadow-lg"
                    />
                    <div class="flex flex-col flex-grow">
                        <span class="font-bold">{{ item.name }}</span>
                        <span class="text-orange-400 font-bold">
                            {{ formatCurrency(item.price * item.quantity) }}
                        </span>
                    </div>
                    <div class="flex items-center">
                        <button
                            @click="decreaseQuantity(item)"
                            class="border-2 text-black py-1 px-2 rounded"
                        >
                            -
                        </button>
                        <span class="mx-2">{{ item.quantity }}</span>
                        <button
                            @click="increaseQuantity(item)"
                            class="border-2 text-black py-1 px-2 rounded"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Order Summary -->
        <div>
            <div class="bg-white rounded-lg shadow-md p-4">
                <div class="flex justify-between">
                    <span class="font-bold text-gray-700">Subtotal</span>
                    <span class="text-gray-700">{{
                        formatCurrency(subtotal)
                    }}</span>
                </div>
                <div class="flex justify-between">
                    <span class="font-bold text-gray-700">Discount sales</span>
                    <span class="text-red-500">-5000.00</span>
                    <!-- Assuming fixed discount -->
                </div>
                <div class="flex justify-between">
                    <span class="font-bold text-gray-700">Total sales tax</span>
                    <span class="text-gray-700">{{
                        formatCurrency(totalSalesTax)
                    }}</span>
                </div>
                <hr class="my-2" />
                <div class="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span class="text-green-500">{{
                        formatCurrency(total)
                    }}</span>
                </div>
                <button
                    class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-6"
                >
                    Continue to Payment
                </button>
            </div>
            <div class="text-black w-full h-12 mb-4 bg-red-50">Logo</div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";

const orderItems = ref([
    {
        id: 1,
        name: "Beef Pho",
        price: 50000,
        image: "/images/hot-food.png",
        quantity: 1,
    },
    {
        id: 2,
        name: "Beef Pho",
        price: 50000,
        image: "/images/hot-food.png",
        quantity: 1,
    },
]);

const increaseQuantity = (item) => {
    item.quantity += 1;
};

const decreaseQuantity = (item) => {
    if (item.quantity === 1) {
        const index = orderItems.value.findIndex((i) => i.id === item.id);
        if (index !== -1) {
            orderItems.value.splice(index, 1);
        }
    } else if (item.quantity > 1) {
        item.quantity -= 1;
    }
};

// Compute subtotal
const subtotal = computed(() => {
    return orderItems.value.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
});

const discount = -5.0;

const totalSalesTax = computed(() => {
    return subtotal.value * 0.005;
});

const total = computed(() => {
    return subtotal.value + totalSalesTax.value + discount;
});

const formatCurrency = (value) => {
    return `${value.toFixed(2)}`;
};
</script>

<style scoped></style>
