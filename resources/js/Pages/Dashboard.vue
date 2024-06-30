<template>
    <div>
        <div class="w-[76%] bg-slate-100 px-6 h-full">
            <HomeforStaff />
        </div>
        <div class="fixed top-0 right-0 w-[24%] h-[100vh] px-4">
            <Order />
        </div>
    </div>
</template>
<script setup>

import HomeforStaff from "@/Components/HomeforStaff.vue";
import Order from "@/Components/Order.vue";
</script>
