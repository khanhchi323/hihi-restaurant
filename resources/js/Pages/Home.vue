<script >

import { Head, Link } from '@inertiajs/vue3';
import { defineProps } from 'vue';
import Header from '@/Components/Header.vue';
import Navbar from '@/Components/Navbar.vue';
export default {
  components: {
    Header,
    Navbar,
  },    
   methods: {
    performSearch(query) {
      // Thực hiện tìm kiếm với query được truyền vào
      // Gửi yêu cầu AJAX đến API hoặc xử lý tìm kiếm theo ý định của bạn
      // Hiển thị kết quả tìm kiếm hoặc cập nhật dữ liệu
      console.log('Perform search with query:', query);
    }
   }
};
</script>

<style>
#navbar {
  display: flex;
}

.nav-view {
  margin-left: 200px; /* Độ rộng của navbar */
  padding: 20px;
  width: calc(100% - 200px);
}
</style>

<script setup>
    defineProps({
        canLogin: {
            type: Boolean,
        },
        canRegister: {
            type: Boolean,
        },
        laravelVersion: {
            type: String,
            required: true,
        },
        phpVersion: {
            type: String,
            required: true,
        },
    });

function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}
</script>

<template>
    <Head title="Home"/>
    <div class="bg-gray-50 text-black/50 dark:bg-b  lack dark:text-white/50">
        
        <div
            class="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white"
        >
            <div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                <header class="flex mt-3">
                    <div class="flex lg:justify-center lg:col-start-2">
                        <p>Contact us: 0789141111 | 0738817482</p>
                    </div>
                    <nav v-if="canLogin" class="-mx-3 flex flex-1 justify-end">
                        <Link
                            v-if="$page.props.auth.user"
                            :href="route('dashboard')"
                            class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Dashboard
                        </Link>

                        <template v-else>
                            <Link
                                :href="route('login')"
                                class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Log in
                            </Link>

                            <Link
                                v-if="canRegister"
                                :href="route('register')"
                                class="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                            >
                                Register
                            </Link>
                        </template>
                    </nav>
                </header>

                <main class="mt-2">
                    <div>
                        <Header />
                        <Navbar />
                        <router-view />
                    </div>
                </main>

                <footer class="py-16 text-center text-sm text-black dark:text-white/70">
                    Laravel v{{ laravelVersion }} (PHP v{{ phpVersion }})
                </footer>
            </div>
        </div>
    </div>
</template>