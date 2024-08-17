<template>
  <div class="bg-slate-95 font-display selection:bg-green-700">
    <NavbarComponent />
    <router-view></router-view>
  </div>
</template>

<script setup>
import NavbarComponent from './components/NavbarComponent.vue'
</script>
