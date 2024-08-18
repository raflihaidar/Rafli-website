<template>
  <a
    :href="url"
    target="_blank"
    :aria-label="iconName"
    class="flex items-center gap-x-2 w-full cursor-pointer"
  >
    <slot name="icon"> </slot>
    <p>{{ iconName }}</p>
  </a>
</template>

<script setup>
const props = defineProps({
  url: String,
  iconName: String
})
</script>
