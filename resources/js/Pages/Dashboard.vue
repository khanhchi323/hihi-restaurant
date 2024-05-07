<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
</script>

<template>
    <Head title="Dashboard" />
    

    <AuthenticatedLayout>
        <template #header>
            <div class="flex space-x-4">
                    <a  v-bind:href="Catogory.Index" class="font-semibold text-xl text-gray-800 leading-tight">Loại</a>
                
            <router-link to="/" class="font-semibold text-xl text-gray-800 leading-tight">Dashboard</router-link>
            <!-- Các mục menu -->
            
                    <!-- Liên kết tới trang Sản phẩm -->
                    <router-link to="/products" class="font-semibold text-xl text-gray-800 leading-tight">Sản phẩm</router-link>

                    <!-- Liên kết tới trang Loại -->

                    <!-- Liên kết tới trang Nhân viên -->
                    <router-link to="/employees" class="font-semibold text-xl text-gray-800 leading-tight">Nhân viên</router-link>
                </div>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">You're logged in!</div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
