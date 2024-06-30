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
            <div
                class="my-4 w-[40%] flex justify-center border rounded-md relative"
            >
                <input
                    type="text"
                    placeholder="Search..."
                    class="pl-8 border-none rounded-lg w-full"
                />
                <img
                    src="/images/loupe.png"
                    alt="Search Icon"
                    class="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-auto"
                />
            </div>
        </div>
        <!-- Icon -->
        <div class="w-full h-16 my-6 flex justify-center items-center">
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
                    <div
                        class="text-lg text-center font-semibold text-gray-800 mt-2"
                    >
                        {{ menu.menu_name }}
                    </div>
                    <div class="text-gray-500">
                        {{ menu.description }}
                    </div>
                    <div class="text-orange-500 font-bold text-bottom">
                        Price: {{ menu.price }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style>
.hover\\:text-white:hover .icon-text {
    color: white;
}
</style>
