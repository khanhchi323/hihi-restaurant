<template>
  <div class="navbar">
    <NavButton href="/" icon="fa-home" label="Home"/>
    <NavButton :href="route('menu')" icon="fa-file-alt" label="Menu"/>  
    <NavButton href="/payment" icon="fa-credit-card" label="Payment"/>
    <NavButton href="/orders" icon="fa-box" label="Orders"/>
    <NavButton href="/login" icon="fa-cog" label="Log In"/>
    <NavButton href="/register" icon="fa-box" label="Register"/>
    <NavButton href="/settings" icon="fa-cog" label="Settings"/>
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
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
</style>
