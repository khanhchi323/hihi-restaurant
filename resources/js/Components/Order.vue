<script setup>
import { ref, computed, defineProps } from "vue";

const props = defineProps({
    orderItems: {
        type: Array,
        default: () => [],
    },
});

const increaseQuantity = (item) => {
    item.quantity += 1;
};

const decreaseQuantity = (item) => {
    if (item.quantity === 1) {
        const index = props.orderItems.findIndex((i) => i.id === item.id);
        if (index !== -1) {
            props.orderItems.splice(index, 1);
        }
    } else if (item.quantity > 1) {
        item.quantity -= 1;
    }
};

// Compute subtotal
const subtotal = computed(() => {
    return props.orderItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );
});

// Discount options
const discountOptions = [
    { label: "0%", value: 0 },
    { label: "10%", value: 0.1 },
    { label: "15%", value: 0.15 },
    { label: "20%", value: 0.2 },
];

// Selected discount
const selectedDiscount = ref(discountOptions[0].value); // Default to 0%

const totalSalesTax = computed(() => {
    return subtotal.value * 0.05;
});

const discountAmount = computed(() => {
    return subtotal.value * selectedDiscount.value;
});

const total = computed(() => {
    return subtotal.value + totalSalesTax.value - discountAmount.value;
});

const formatCurrency = (value) => {
    return `${value.toFixed(0)}`;
};

// Modal control
const showModal = ref(false);

// Function to handle continue to payment
const handleContinueToPayment = () => {
    showModal.value = true; // Show the modal
};

// Function to handle paid
const handlePaid = () => {
    alert("Payment confirmed!"); // Replace with your logic to handle payment confirmation
    props.orderItems.splice(0, props.orderItems.length); // Clear order items
    showModal.value = false; // Close the modal
};

// Function to handle not paid
const handleNotPaid = () => {
    showModal.value = false; // Close the modal
    // Optionally, you can keep the user on the current page/order
};
</script>

<template>
    <div class="flex justify-between flex-col mt-[21%]">
        <!-- Current Order -->
        <div>
            <div class="w-full h-12 bg-white p-2">
                <b class="text-2xl text-gray-700">Current Order</b>
            </div>
            <div class="text-gray-800 w-full h-64 overflow-y-auto bg-white p-2">
                <div
                    v-for="item in orderItems"
                    :key="item.id"
                    class="flex items-center mb-2 py-2 pr-2 border-b border-gray-200"
                >
                    <img
                        :src="item.image"
                        :alt="item.name"
                        class="w-16 h-16 mr-4 rounded-sm shadow-lg"
                    />
                    <div class="flex flex-col flex-grow">
                        <span class="">{{ item.name }}</span>
                        <span class="text-orange-400 font-bold">
                            {{ formatCurrency(item.price * item.quantity) }}
                        </span>
                    </div>
                    <div class="flex items-center">
                        <button
                            @click="decreaseQuantity(item)"
                            class="border text-black py-1 px-2 rounded"
                        >
                            -
                        </button>
                        <span class="mx-2">{{ item.quantity }}</span>
                        <button
                            @click="increaseQuantity(item)"
                            class="border text-black py-1 px-2 rounded"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Order Summary -->
        <div>
            <div class="bg-white shadow-md p-4">
                <div class="flex justify-between py-2">
                    <span class="font-bold text-gray-700">Subtotal</span>
                    <span class="text-gray-700"
                        >{{ formatCurrency(subtotal) }} đ</span
                    >
                </div>
                <div class="flex justify-between">
                    <span class="font-bold text-gray-700 py-1">Discount</span>
                    <select
                        v-model="selectedDiscount"
                        class="w-1/2 border-gray-300 rounded p-1px shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                        <option
                            v-for="(option, index) in discountOptions"
                            :key="index"
                            :value="option.value"
                        >
                            {{ option.label }}
                        </option>
                    </select>
                </div>
                <div class="flex justify-between py-2">
                    <span class="font-bold text-gray-700">Total sales tax</span>
                    <span class="text-gray-700"
                        >{{ formatCurrency(totalSalesTax) }} đ</span
                    >
                </div>
                <hr class="my-" />
                <div class="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span class="text-green-500"
                        >{{ formatCurrency(total) }}đ</span
                    >
                </div>
                <div class="w-full text-center">
                    <button
                        @click="handleContinueToPayment"
                        class="bg-white rounded-md hover:text-white hover:border-white hover:bg-orange-600 text-orange-500 border-2 border-orange-400 text-center py-2 px-4 mt-4"
                    >
                        Continue to Payment
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div
        class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
        v-if="showModal"
    >
        <div class="bg-white p-6 rounded-lg shadow-lg max-w-md text-center">
            <p class="text-lg font-semibold mb-4">Confirm Payment</p>
            <div class="flex justify-between">
                <div class="px-2">
                    <button
                        @click="handleNotPaid"
                        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                    >
                        Not Paid
                    </button>
                </div>
                <div class="px-2">
                    <button
                        @click="handlePaid"
                        class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded"
                    >
                        Paid
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
