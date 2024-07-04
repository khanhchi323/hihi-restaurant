<script setup>
import { Head } from "@inertiajs/inertia-vue3";
import NavbarCustom from "@/Components/NavbarCustom.vue";
import MenuforGuest from "@/Components/MenuforGuest.vue";
</script>

<template>
    <Head title="Menu" />
        <div class="flex">
        <div class="fixed top-0 left-0 w-[6%] bg-white h-[100vh]">
            <NavbarCustom />
        </div>
        <div class="ml-[6%] w-[94%] bg-slate-100 px-6 h-full">
            <slot></slot>
        </div>
    </div>
</template>
