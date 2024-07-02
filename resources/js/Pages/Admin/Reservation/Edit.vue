<template>
    <div class="container mx-auto mt-10">
        <h1 class="text-2xl mb-6">Chỉnh Sửa Đặt Bàn</h1>
        <form @submit.prevent="submitForm">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="customer_name">Tên Khách Hàng:</label>
                <input
                    type="text"
                    id="customer_name"
                    v-model="form.customer_name"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="phone_number">Số Điện Thoại:</label>
                <input
                    type="text"
                    id="phone_number"
                    v-model="form.phone_number"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="reservation_date">Ngày Đặt:</label>
                <input
                    type="date"
                    id="reservation_date"
                    v-model="form.reservation_date"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="reservation_time">Giờ Đặt:</label>
                <input
                    type="time"
                    id="reservation_time"
                    v
