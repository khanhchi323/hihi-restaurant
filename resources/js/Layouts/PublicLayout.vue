<script setup>
import { Head } from "@inertiajs/vue3";
import Header from "@/Components/Header.vue";
import Navbar from "@/Components/Navbar.vue";
import Home from "@/Components/Home.vue";
import Order from "@/Components/Order.vue";
import NavbarCustom from "@/Components/NavbarCustom.vue";
</script>

<template>
    <Head title="HomeTest" />
    <div class="flex">
        <div class="fixed top-0 left-0 w-[6%] bg-slate-50 h-[100vh]">
            <NavbarCustom />
        </div>
        <div class="ml-[6%] w-[70%] bg-slate-200 px-6 ">
            <Home/>
        </div>
        <div class="fixed top-0 right-0 w-[24%] bg-orange-100 h-[100vh] px-4">
            <Order/>
        </div>
    </div>
</template>
