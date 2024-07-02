<script setup>
import { ref, onMounted } from "vue";
import NavbarCustom from "@/Components/NavbarCustom.vue";
import Thumbnail from "@/Components/Thumbnail.vue";
import Footer from "@/Components/Footer.vue"
import { Head } from "@inertiajs/inertia-vue3";

const banners = [
    "/images/Banner.jpg",
    "/images/Banner1.png",
    "/images/Banner2.png",
    "/images/Banner3.jpg",
    "/images/Banner4.jpg",
    "/images/Banner5.jpg",
    "/images/Banner6.jpg",
];

const thumbnails = [
    { image: "/images/vuheonuong.jpg" },
    { image: "/images/thitbachiuopsate.jpg" },
    { image: "/images/suonnuongmoi.jpg" },
    { image: "/images/OIP.jpg" },
    { image: "/images/OIP (2).jpg" },
];

const currentBannerIndex = ref(0);
const currentBannerImage = ref(banners[currentBannerIndex.value]);

// Thay đổi banner
onMounted(() => {
    setInterval(() => {
        currentBannerIndex.value =
            (currentBannerIndex.value + 1) % banners.length;
        currentBannerImage.value = banners[currentBannerIndex.value];
    }, 2000);
});
</script>
<template>
    <div
        class="home flex  min-h-screen overflow-hidden relative text-center bg-gray-100 font-sans"
    >
        <!-- Navbar -->
        <div class="w-[6%] bg-white relative z-20">
            <NavbarCustom />
        </div>

        <!-- Lớp mờ màu khói -->
        <div
            class="absolute inset-0 bg-gradient-to-b from-gray-300 to-transparent z-10"
        ></div>

        <!-- Main content in the center -->
        <div
            class="main-content w-[94%] h-full right-0 flex-1 flex flex-col items-center justify-center relative z-50"
        >
            <Head title="Home" />
            <div>
                <img
                    :src="currentBannerImage"
                    alt="Banner Image"
                    class="object-cover mx-auto rounded-lg shadow-lg w-full h-screen max-w-screen"
                />
            </div>
            <div class="flex flex-wrap justify-center p-8">
                <Thumbnail
                    v-for="(thumbnail, index) in thumbnails"
                    :key="index"
                    :thumbnailImage="thumbnail.image"
                    class="rounded-lg hover:z-10"
                />
            </div>
            <div class="bg-slate-800 w-1/2 h-px"></div>
            <div class="my-4">
                <div class="text-4xl font-semibold">Discount</div>
            </div>
            <div class="bg-slate-800 w-1/2 h-px"></div>
            <div class="my-4">
                <div class="text-4xl font-semibold">NEWS & Event</div>
            </div>
            <div class="w-full">
                <Footer/>
            </div> 
        </div>
        
    </div>
</template>
