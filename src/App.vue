<template>
  <div class="bg-slate-950 font-display selection:bg-green-700">
    <NavbarComponent />
    <router-view></router-view>
    <MessageButton />
  </div>
</template>

<script setup>
import MessageButton from './components/MessageButton.vue'
import NavbarComponent from './components/NavbarComponent.vue'
</script>
