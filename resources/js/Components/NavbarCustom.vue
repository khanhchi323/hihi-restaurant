<script setup>
import Logo from "/public/images/logohihi.png";
</script>
<template>
    <div>
        <!-- Image Logo -->
        <div class="flex flex-col items-center">
            <div>
                <a href="/">
                    <img :src="Logo" alt="Logo" class="w-16 h-14 mt-4 mb-2" />
                </a>
            </div>
            <!-- Icons Container -->
            <div class="flex flex-col items-center my-4">
                <!-- Icon Home -->
                <a
                    href="/"
                    class="group relative flex items-center justify-center mb-2 icon"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="icon size-6 my-4 group-hover:text-orangered"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                        />
                    </svg>
                    <div
                        class="absolute top-0 left-12 w-[3px] h-0 bg-red-500 bg-line transition-all"
                    ></div>
                </a>
                <!-- Cart Icon -->
                <a
                    href="/Menu"
                    class="group relative flex items-center justify-center mb-2 icon"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="icon size-6 my-4 group-hover:text-orangered"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                    </svg>
                    <div
                        class="absolute top-0 left-12 w-[3px] h-0 bg-red-500 bg-line transition-all"
                    ></div>
                </a>
                <!-- Booking -->
                <a
                    href="/Contact"
                    class="group relative flex items-center justify-center mb-2 icon"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="icon size-6 my-4 group-hover:text-orangered"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                        />
                    </svg>

                    <div
                        class="absolute top-0 left-12 w-[3px] h-0 bg-red-500 bg-line transition-all"
                    ></div>
                </a>

                <!-- Users Icon -->
                <a
                    href="#"
                    class="group relative flex items-center justify-center mb-2 icon"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="icon size-6 my-4 group-hover:text-orangered"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                        />
                    </svg>
                    <div
                        class="absolute top-0 left-12 w-[3px] h-0 bg-red-500 bg-line transition-all"
                    ></div>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.icon:hover {
    color: orangered;
}
.icon:hover .bg-line {
    height: 100%;
}
</style>
