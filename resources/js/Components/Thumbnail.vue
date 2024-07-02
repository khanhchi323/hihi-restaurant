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
<template>
    <div class="group relative rounded-md shadow-lg m-2 bg-white">
        <img class="w-full transition-transform duration-500 ease-in-out transform group-hover:scale-125" :src="thumbnailImage" alt="Thumbnail" />
    </div>
</template>
