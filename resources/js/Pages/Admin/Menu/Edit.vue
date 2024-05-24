//lỗi rùi
<script setup>
import { Head, useForm } from "@inertiajs/inertia-vue3";
import { route } from "vue";

// Lấy dữ liệu menu từ trang
const { props } = usePage();
const menu = props.menu;

// Sử dụng form để chỉnh sửa thông tin
const form = useForm({
    name: menu.name,
    // Các trường thông tin khác
});

const submit = () => {
    form.put(route("menu.update", menu.id))
        .then(() => {
            // Redirect về trang danh sách sau khi cập nhật thành công
            window.location.href = route("menu.list");
        })
        .catch((error) => {
            console.error("Error submitting form:", error);
        });
};
</script>

<template>
    <Head title="Edit Menu" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Edit Menu
            </h2>
        </template>
        <div class="py-6">
            <!-- Form chỉnh sửa menu -->
            <form name="editForm" @submit.prevent="submit">
                <!-- Các trường thông tin để chỉnh sửa -->
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" v-model="form.name" />
                </div>
                <!-- Các trường thông tin khác -->
                <!-- Ví dụ: -->
                <!-- <div>
                    <label for="price">Price:</label>
                    <input type="text" id="price" v-model="form.price" />
                </div> -->
                <!-- Nút lưu -->
                <button type="submit">Save</button>
            </form>
        </div>
    </AuthenticatedLayout>
</template>
