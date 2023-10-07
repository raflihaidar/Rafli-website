<template>
  <div class="bg-gray-900 w-screen h-screen">
    <NavbarComponent />
    <router-view></router-view>
  </div>
</template>

<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
</script>

