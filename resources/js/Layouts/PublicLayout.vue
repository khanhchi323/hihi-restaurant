<script setup>
import { Head, Link } from "@inertiajs/vue3";
import { defineProps } from "vue";
import Header from "@/Components/Header.vue";
import Navbar from "@/Components/Navbar.vue";
</script>

<template>
    <Head title="HomeTest" />
    <div class="bg-gray-50 text-black/50 dark:bg-b lack dark:text-white/50">
        <div
            class="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"
        >
            <div class="relative w-full px-6">
                <main class="mt-2">
                    <div>
                        <Header />
                        <Navbar />
                        <!-- Page Content -->
                        <main class="p-4 md:ml-20 h-auto pt-20">
                            <slot />
                        </main>
                        <router-view />
                    </div>
                </main>
            </div>
        </div>
    </div>
</template>
