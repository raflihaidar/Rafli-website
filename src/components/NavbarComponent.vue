<template>
  <nav class="w-screen mx-auto flex justify-center py-5 bg-sky-950">
    <section class="w-[40%] text-slate-200 font-semibold transition-colors text-lg flex justify-between cursor-pointer">
      <router-link class="py-2 px-3 rounded-lg" :class="item.status ? 'bg-green-700 text-white' : 'hover:text-green-700'"
        v-for="(item, index) in navigationMenu" :key="index" :to="item.page" @click="handleClick(index)">
        {{ item.name }}
      </router-link>
    </section>
  </nav>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
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
  navigationMenu.forEach((item) => {
    if (item.status) item.status = false
  })
  navigationMenu[index].status = !navigationMenu[index].status
}

onMounted(() => {
  navigationMenu.forEach((item) => {
    if (item.status) {
      router.push({ path: item.page })
    }
  })
})
</script>