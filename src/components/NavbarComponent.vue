<template>
  <nav class="w-screen">
    <div class="w-full lg:flex hidden justify-center py-5">
      <section
        class="w-[40%] text-slate-200 font-semibold transition-colors text-lg flex justify-between cursor-pointer gap-x-5">
        <router-link class="py-2 px-3 rounded-lg group" :class="item.status ? 'text-green-700' : 'hover:text-green-600'"
          @mouseleave="onLeave(index)" @mouseenter="onEnter(index)" v-for="(item, index) in navigationMenu" :key="index"
          :to="item.page" @click="handleClick(index)">
          {{ item.name }}
          <span>
            <transition name="border">
              <hr class="b-bottom transition-transform border-yellow-500 border-0" v-if="item.status || item.hover"
                :class="item.status ? 'w-5 border-[1.5px] ' : 'group-hover:text-green-600 group-hover:w-5 w-0 group-hover:border-[1.5px] group-hover:animate-fromLeft mx-0'">
            </transition>
          </span>
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

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
let change = ref(false);
let navigationMenu = reactive([
  {
    name: 'Home',
    page: '/',
    status: true,
    hover: false
  },
  {
    name: 'About',
    page: '/about',
    status: false,
    hover: false
  },
  {
    name: 'Education',
    page: '/education',
    status: false,
    hover: false
  },
  {
    name: 'Experience',
    page: '/experience',
    status: false,
    hover: false
  },
  {
    name: 'Projects',
    page: '/project',
    status: false,
    hover: false
  },
  {
    name: 'Contact',
    page: '/contact',
    status: false,
    hover: false
  }
])

const onLeave = (index) => {
  navigationMenu[index].hover = false
}

const onEnter = (index) => {
  navigationMenu[index].hover = true
}

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

<style>
.border-enter-active,
.border-leave-active {
  transition: width 0.5s ease, border-width 0.5s ease;
}

.border-enter-from,
.border-leave-to {
  width: 0;
  border-width: 0;
}

.border-enter-to,
.border-leave-from {
  width: 1.25rem;
  border-width: 1.5px;
}
</style>
