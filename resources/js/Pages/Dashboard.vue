<template>
    <div>
        <div class="w-[76%] bg-slate-100 px-6 h-full">
            <Home />
        </div>
        <div class="fixed top-0 right-0 w-[24%] h-[100vh] px-4">
            <Order />
        </div>
    </div>
</template>
<script setup>
import { Head } from "@inertiajs/vue3";
import Header from "@/Components/Header.vue";
import Navbar from "@/Components/Navbar.vue";
import Home from "@/Components/Home.vue";
import Order from "@/Components/Order.vue";
import NavbarCustom from "@/Components/NavbarCustom.vue";
</script>
