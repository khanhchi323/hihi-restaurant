<template>
    <div
        class="banner bg-cover bg-center flex items-center justify-center text-white text-3xl font-bold"
        :style="{ backgroundImage: `url(${bannerImage})` }"
    >
        <slot></slot>
    </div>
</template>

<script setup>
import { ref } from "vue";

// Thay đổi đường dẫn hình ảnh banner tại đây
</script>

<style scoped>
.banner {
    max-width: 100%; /* Đảm bảo banner không vượt quá kích thước tối đa */
    height: 400px; /* Thiết lập chiều cao của banner */
    /* Các thuộc tính khác như background-position, background-size có thể được đặt trong lớp này */
}
</style>
