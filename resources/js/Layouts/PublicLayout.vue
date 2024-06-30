<script setup>
import Banner from "@/Components/Banner.vue";
import Thumbnail from "@/Components/Thumbnail.vue";
import NavbarCustom from "@/Components/NavbarCustom.vue";
import bannerImage from "/public/images/bannertest.jpg";

const thumbnails = [
    {
        image: "path/to/your/thumbnail-image1.jpg",
        title: "Thumbnail 1",
        description: "Description for thumbnail 1",
    },
    {
        image: "path/to/your/thumbnail-image2.jpg",
        title: "Thumbnail 2",
        description: "Description for thumbnail 2",
    },
    {
        image: "path/to/your/thumbnail-image3.jpg",
        title: "Thumbnail 3",
        description: "Description for thumbnail 3",
    },
];
</script>

<template>
    <div class="home flex min-h-screen overflow-hidden">
        <div class="w-[6%]">
            <NavbarCustom />
        </div>

        <!-- Nội dung chính ở giữa -->
        <div
            class="main-content flex-1 flex flex-col items-center justify-center"
        >
            <div class="w-[80%]">
                <img
                    :src="bannerImage"
                    alt="Banner Image"
                    class="w-full object-cover"
                />
            </div>
            <div class="thumbnails flex flex-wrap justify-center mt-8 px-4">
                <Thumbnail
                    v-for="(thumbnail, index) in thumbnails"
                    :key="index"
                    :thumbnailImage="thumbnail.image"
                    :title="thumbnail.title"
                    :description="thumbnail.description"
                />
            </div>
        </div>
    </div>
</template>

<style scoped>
.home {
    text-align: center;
}

.main-content img {
    max-height: 50vh;
    width: 94%;
    object-fit: cover;
}
</style>
