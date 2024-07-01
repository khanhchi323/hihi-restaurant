<template>
    <div class="w-full h-full">
        <!-- Header section -->
        <div
            class="w-full h-20 p-4 bg-slate-100 flex items-center justify-between"
        >
            <div>
                <h1 class="text-3xl font-bold text-gray-700">
                    Welcome to our service!
                </h1>
                <p class="text-sm text-gray-500">
                    Discover whatever you need easily
                </p>
            </div>
            <div>
                <Link
                    class="px-6 py-3 text-white font-bold bg-green-500 rounded-md focus:outline-none"
                    :href="route('reservation.list')"
                >
                    Reservation
                </Link>
            </div>
        </div>
        <!-- Icon -->
        <div class="w-full h-16 my-2 flex justify-center items-center">
            <div class="grid grid-cols-5 gap-6">
                <div
                    class="flex flex-col items-center border hover:bg-orange-500 bg-white shadow-lg rounded-lg w-32 transition duration-300 hover:text-white"
                    @click="filterByCategory('beef')"
                >
                    <div class="flex items-center">
                        <img
                            src="/images/beef.png"
                            alt="Beef Icon"
                            class="h-12 w-6 object-contain"
                        />
                        <b class="ml-2 text-base icon-text">Beef</b>
                    </div>
                </div>
                <div
                    class="flex flex-col items-center border hover:bg-orange-500 bg-white shadow-lg rounded-lg w-32 transition duration-300 hover:text-white"
                    @click="filterByCategory('chicken')"
                >
                    <div class="flex items-center">
                        <img
                            src="/images/chicken-leg.png"
                            alt="Chicken Icon"
                            class="h-12 w-6 object-contain"
                        />
                        <b class="ml-2 text-base icon-text">Chicken</b>
                    </div>
                </div>
                <div
                    class="flex flex-col items-center border hover:bg-orange-500 bg-white shadow-lg rounded-lg w-32 transition duration-300 hover:text-white"
                    @click="filterByCategory('pork')"
                >
                    <div class="flex items-center">
                        <img
                            src="/images/meat.png"
                            alt="Pork Icon"
                            class="h-12 w-6 object-contain"
                        />
                        <b class="ml-2 text-base icon-text">Pork</b>
                    </div>
                </div>
                <div
                    class="flex flex-col items-center border hover:bg-orange-500 bg-white shadow-lg rounded-lg w-32 transition duration-300 hover:text-white"
                    @click="filterByCategory('beef')"
                >
                    <div class="flex items-center">
                        <img
                            src="/images/fish.png"
                            alt="Fish Icon"
                            class="h-12 w-6 object-contain"
                        />
                        <b class="ml-2 text-base icon-text">Fish</b>
                    </div>
                </div>
                <div
                    class="flex flex-col items-center border hover:bg-orange-500 bg-white shadow-lg rounded-lg w-32 transition duration-300 hover:text-white"
                >
                    <div class="flex items-center">
                        <img
                            src="/images/hot-beverage.png"
                            alt="Beverage Icon"
                            class="h-12 w-6 object-contain"
                        />
                        <b class="ml-2 text-base icon-text">Beverage</b>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-screen mb-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div
                    v-for="menu in $page.props.menus"
                    :key="menu.id"
                    class="bg-white rounded-lg shadow-md p-2"
                >
                    <img
                        :src="`/storage/${menu.image}`"
                        alt="Menu Image"
                        class="h-44 w-full object-cover shadow-lg"
                    />
                    <h2
                        class="text-lg text-center font-semibold text-gray-800 mt-2"
                    >
                        {{ menu.menu_name }}
                    </h2>
                    <p class="text-gray-500">
                        {{ menu.description }}
                    </p>
                    <p class="text-orange-400 font-bold">
                        Price: {{ menu.price }}
                    </p>
                    <div class="text-center">
                        <button
                            @click="addToOrder(menu)"
                            class="mt-4 bg-white text-orange-400 border-solid border-2 border-orange-400 text-red py-2 px-4 rounded"
                        >
                            Add to Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link } from "@inertiajs/inertia-vue3";
</script>

<style>
.hover\\:text-white:hover .icon-text {
    color: white;
}
</style>
