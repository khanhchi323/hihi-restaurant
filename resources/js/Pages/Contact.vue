<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import NavbarCustom from "@/Components/NavbarCustom.vue";
import Contact from "@/Components/Contact.vue";
</script>

<template>
    <Head title="Contact" />
    <div class="flex">
        <div class="fixed top-0 left-0 w-[6%] bg-white h-[100vh]">
            <NavbarCustom />
        </div>
        <div class="ml-[6%] w-[94%] bg-slate-100 px-6 h-full">
            <Contact />
        </div>
    </div>
</template>
