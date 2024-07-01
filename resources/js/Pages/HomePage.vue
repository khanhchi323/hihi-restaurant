<template>
    <div class="home flex min-h-screen overflow-hidden relative">
        <!-- Navbar -->
        <div class="w-[6%] bg-white relative z-20">
            <NavbarCustom />
        </div>

        <!-- Lớp mờ màu khói -->
        <div class="absolute inset-0 bg-gradient-to-b from-gray-300 to-transparent z-10"></div>

        <!-- Main content in the center -->
        <div class="main-content w-[94%] flex-1 flex flex-col items-center justify-center relative z-50 my-1">
            <Head title="Home" />
            <div class="w-[90%]">
                <img
                    :src="currentBannerImage"
                    alt="Banner Image"
                    class="object-cover h-[70vh] mx-auto rounded-lg shadow-lg"
                />
            </div>
            <div class="thumbnails flex flex-wrap justify-center px-4">
                <Thumbnail
                    v-for="(thumbnail, index) in thumbnails"
                    :key="index"
                    :thumbnailImage="thumbnail.image"
                    class="thumbnail-item"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import NavbarCustom from "@/Components/NavbarCustom.vue";
import Thumbnail from "@/Components/Thumbnail.vue";
import { Head } from "@inertiajs/inertia-vue3";

const banners = [
    "/images/Banner.jpg",
    "/images/Banner1.png",
    "/images/Banner2.png",
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

// Thay đổi banner mỗi 5 giây
onMounted(() => {
    setInterval(() => {
        currentBannerIndex.value = (currentBannerIndex.value + 1) % banners.length;
        currentBannerImage.value = banners[currentBannerIndex.value];
    }, 5000); // 5000 milliseconds = 5 seconds
});
</script>

<style scoped>
.home {
    text-align: center;
    background-color: #f3f4f6; /* Màu nền */
    font-family: "Arial", sans-serif; /* Font chữ chính */
}

.main-content {
    width: 100%; /* Đảm bảo nội dung chính rộng bằng trang */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh; /* Chiều cao tối thiểu của nội dung chính là chiều cao của màn hình */
    position: relative; /* Để có thể sử dụng z-index */
    z-index: 20; /* Đẩy nội dung chính lên phía trước */
}

.main-content img {
    width: 100%; /* Kéo rộng banner ra toàn bộ chiều rộng của phần main-content */
    max-width: 90%; /* Chiều rộng tối đa của banner là 90% của main-content */
    height: auto; /* Chiều cao tự động tính toán để duy trì tỉ lệ */
    object-fit: cover; /* Đảm bảo bao phủ toàn bộ khu vực */
    border-radius: 8px; /* Bo tròn viền */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Đổ bóng */
    transition: transform 0.3s ease; /* Hiệu ứng khi hover */
}

.main-content img:hover {
    transform: scale(1.03); /* Phóng to khi hover */
}

.thumbnails {
    max-width: 100%;
    padding: 0 2rem;
}

.thumbnail-item {
    transition: transform 0.3s ease; /* Hiệu ứng khi hover */
    max-width: 180px; /* Giới hạn chiều rộng tối đa của thumbnail */
    margin: 8px; /* Khoảng cách giữa các thumbnail */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Đổ bóng */
    border-radius: 8px; /* Bo tròn viền */
}

.thumbnail-item img {
    width: 100%; /* Đảm bảo hình ảnh điền vào thumbnail */
    border-radius: 8px; /* Bo tròn góc của hình ảnh */
}

.thumbnail-item img:hover {
    transform: scale(1.1); /* Phóng to khi hover */
}

/* Lớp mờ màu khói */
.bg-gradient-to-b {
    background-image: linear-gradient(to bottom, rgba(231, 90, 30, 0.83), transparent);
}
</style>
