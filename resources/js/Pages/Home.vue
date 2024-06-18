<script setup>
import PublicLayout from "@/Layouts/PublicLayout.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { ref } from "vue";
</script>

<template>
    <PublicLayout>
        <div>
            <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4"
            >
                <div
                    v-for="menu in $page.props.menus"
                    :key="menu.id"
                    class="text-center"
                >
                    <div
                        class="text-red-600 border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-32 md:h-64"
                    >
                        {{ menu.name }}
                    </div>
                </div>
            </div>
            <div
                class="text-red-600 border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
            >
                123456
            </div>
            <div class="grid grid-cols-2 gap-4 mb-4">
                <div
                    class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                ></div>
                <div
                    class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                ></div>
                <div
                    class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                ></div>
                <div
                    class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                ></div>
            </div>
            <div
                class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4"
            ></div>
            <div class="grid grid-cols-2 gap-4">
                <div
                    class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                ></div>
                <div
                    class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                ></div>
                <div
                    class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                ></div>
                <div
                    class="border-2 border-dashed rounded-lg border-gray-300 dark:border-gray-600 h-48 md:h-72"
                ></div>
            </div>
        </div>
    </PublicLayout>
</template>
