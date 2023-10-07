<template>
  <nav class="w-[80%] mx-auto flex justify-center py-5">
    <section class="w-[80%] text-slate-200 font-bold transition-colors text-lg flex justify-between cursor-pointer">
      <router-link class="hover:text-green-700 py-2 px-3 rounded-lg"
        :class="item.status ? 'bg-green-700 hover:text-white' : ''" v-for="(item, index) in navigationMenu" :key="index"
        :to="item.page" @click="handleClick(index)">
        {{ item.name }}
      </router-link>
    </section>
  </nav>
</template>

<script setup>
import { reactive } from 'vue'
let navigationMenu = reactive([
  {
    name: 'Home',
    page: '/',
    status: true
  },
  {
    name: 'About',
    page: '/about',
    status: false
  },
  {
    name: 'Education',
    page: '/education',
    status: false
  },
  {
    name: 'Experience',
    page: '/experience',
    status: false
  },
  {
    name: 'Project',
    page: '/project',
    status: false
  },
  {
    name: 'Resume',
    page: '/resume',
    status: false
  },
  {
    name: 'Contact',
    page: '/contact',
    status: false
  }
])

const handleClick = (index) => {
  for (const item of navigationMenu) {
    if (item.status) {
      item.status = false;
    }
  }

  navigationMenu[index].status = !navigationMenu[index].status
}
</script>