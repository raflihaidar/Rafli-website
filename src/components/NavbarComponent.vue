<template>
  <nav class="w-screen">
    <div class="w-full lg:flex hidden justify-center py-5 lg:bg-sky-950">
      <section class="w-[40%] text-slate-200 font-semibold transition-colors text-lg flex justify-between cursor-pointer">
        <router-link class="py-2 px-3 rounded-lg"
          :class="item.status ? 'bg-green-700 text-white' : 'hover:text-green-700'"
          v-for="(item, index) in navigationMenu" :key="index" :to="item.page" @click="handleClick(index)">
          {{ item.name }}
        </router-link>
      </section>
    </div>

    <div class="lg:hidden flex flex-col items-end gap-1 p-6 cursor-pointer" @click="change = !change">
      <div class="bg-white w-6 h-1 rounded-full transition"
        :class="change ? 'translate-x-0 translate-y-[8px] -rotate-45 transform' : null">
      </div>
      <div class="bg-white w-6 h-1 rounded-full transition" :class="change ? 'opacity-0' : null"></div>
      <div class="bg-white w-6 h-1 rounded-full transition"
        :class="change ? 'translate-x-0 -translate-y-[8px] rotate-45 transform' : null">
      </div>
    </div>

    <div v-if="change"
      class="lg:hidden absolute flex flex-col items-start pt-5 bg-black opacity-90 z-10 w-[90%] h-[80%] top-[50%] left-[50%] lg:text-left text-center -translate-x-[50%] -translate-y-[50%] border border-white rounded-lg">
      <router-link class="py-2 px-3 text-lg text-white font-semibold"
        :class="item.status ? 'text-green-700' : 'hover:text-green-700'" v-for="(item, index) in navigationMenu"
        :key="index" :to="item.page" @click="handleClick(index)">
        {{ item.name }}
      </router-link>
    </div>
  </nav>
</template>


<script setup>
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
let change = ref(false);
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
    name: 'Contact',
    page: '/contact',
    status: false
  }
])

const handleClick = (index) => {
  change.value = false
  navigationMenu.forEach((item) => {
    if (item.status) item.status = false
  })
  navigationMenu[index].status = !navigationMenu[index].status
}

onMounted(() => {
  navigationMenu.forEach((item) => item.status ? router.push({ path: item.page }) : null)
})
</script>