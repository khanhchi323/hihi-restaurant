<template>
  <Link :href="href" :class="buttonClasses">
    <font-awesome-icon :icon="icon" class="icon" />
    <span class="label">{{ label }}</span>
  </Link>
</template>

<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faFileAlt, faCreditCard, faBox, faCog } from '@fortawesome/free-solid-svg-icons';

// Add icons to the library
library.add(faHome, faFileAlt, faCreditCard, faBox, faCog);

const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});

const buttonClasses = computed(() =>
  'nav-button inline-flex flex-col items-center px-3 py-2 border-b border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 focus:outline-none transition duration-150 ease-in-out'
);
</script>

<style scoped>
.nav-button {
  width: 100%;
  text-align: center;
  padding: 10px 0;
}

.icon {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

.label {
  font-size: 0.75rem;
}
</style>
    