<template>
  <div class="navbar">
    <NavButton href="/" icon="fa-home" label="Home" />
    <NavButton href="/menu" icon="fa-file-alt" label="Menu" />
    <NavButton href="/payment" icon="fa-credit-card" label="Payment" />
    <NavButton href="/orders" icon="fa-box" label="Orders" />
    <NavButton href="/settings" icon="fa-cog" label="Settings" />
    <div class="version">V.1.0</div>
  </div>
</template>

<script setup>
import NavButton from './NavButton.vue';
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100px;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}

.version {
  margin-top: auto;
  margin-bottom: 20px;
  color: #adb5bd;
  font-size: 0.9rem;
}
</style>
