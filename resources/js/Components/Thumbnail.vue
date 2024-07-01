<template>
    <div
        class="thumbnail max-w-xs rounded overflow-hidden shadow-lg m-2 bg-white"
    >
        <img class="w-full" :src="thumbnailImage" alt="Thumbnail" />
    </div>
</template>

<script setup>
const props = defineProps({
    thumbnailImage: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
});
</script>

<style scoped>
.thumbnail {
    position: relative;
    transition: transform 0.3s ease; /* Hiệu ứng khi hover */
}

.thumbnail:hover {
    transform: scale(1.05); /* Phóng to khi hover */
}
</style>
