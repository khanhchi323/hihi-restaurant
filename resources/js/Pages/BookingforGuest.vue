<script setup>
import NavbarCustom from "@/Components/NavbarCustom.vue";
import Booking from "@/Components/Booking.vue";
</script>

<template>
    <Head title="BookingforGuest" />
    <div class="flex">
        <div class="fixed top-0 left-0 w-[6%] bg-white h-[100vh]">
            <NavbarCustom />
        </div>
        <div class="ml-[6%] w-[94%] bg-slate-100 px-6 h-full">
            <Booking />
        </div>
    </div>
</template>
