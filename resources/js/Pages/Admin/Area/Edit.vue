<script setup>
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { Head, Link, useForm, route } from "@inertiajs/inertia-vue3";

// const props = defineProps({
//     areas: Object,
// });

const area = useForm({
  name: ""
});

// const submit = () => {
//     form.put(route("area.update", props.area.id))
//         .then(() => {
//             // Redirect to list page after successful update
//             window.location.href = route("area.list");
//         })
//         .catch((error) => {
//             // Handle errors here, e.g., display error messages
//             console.error("Error submitting form:", error);
//         });
// };
const handleSubmit = () => {
    editArea.put(route("area.update", { id: props.area.id }), {
        onSuccess: () => {
            window.location.href = route('area.list');
        },
    });
};
</script>

<template>
    <Head title="Edit Area" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Edit Area
            </h2>
        </template>
        <div class="py-6">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <form name="createForm" @submit.prevent="handleSubmit">
                            <div class="flex flex-col">
                                <div class="mb-4">
                                    <Label for="name" value="name" />
                                    <Input
                                        id="title"
                                        type="text"
                                        class="mt-1 block w-full"
                                        v-model="area.name"
                                        autofocus
                                    />

                                    <!-- <span
                                        class="text-red-600"
                                        v-if="form.errors.title"
                                    >
                                        {{ form.errors.title }}
                                    </span> -->
                                </div>
                            </div>
                            <div class="flex items-center justify-between mb-6">
                                <Link
                                    class="px-6 py-2 text-white bg-blue-500 rounded-md focus:outline-none"
                                    :href="route('area.list')"
                                >
                                    Back
                                </Link>
                                <button
                                    type="submit"
                                    class="px-6 py-2 font-bold text-white bg-green-500 rounded"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
