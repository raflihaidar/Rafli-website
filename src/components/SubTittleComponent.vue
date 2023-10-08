<template>
  <div class="flex gap-x-2 mb-3 items-center w-full text-slate-100">
    <span class="text-sm tracking-widest font-bold">{{ name }}</span>
    <hr class="w-28 border-b-0 border-slate-200 mt-1">
  </div>
</template>

<script setup>
defineProps({
  name: String
})
</script>