<template>
  <nav
    class="w-full h-auto fixed z-20 top-0 flex justify-between p-3 md:justify-around items-center md:px-3 md:py-5"
    :class="{
      'bg-base/40 backdrop-saturate-50 backdrop-blur-md shadow-lg transition': isScrolling
    }"
  >
    <!-- Logo Section -->
    <section class="lg:w-[30%]">
      <a href="#home" class="text-white text-md md:text-xl">
        <figure class="flex items-center gap-x-3">
          <div class="hidden md:block w-12 rounded-full overflow-hidden">
            <img src="../assets/img/logo.png" alt="main logo" class="w-full h-full" />
          </div>
          <h2 class="text-white font-extrabold text-lg">
            raflihaidar<span class="text-base-green">.my.id</span>
          </h2>
        </figure>
      </a>
    </section>

    <!-- Desktop Menu -->
    <div class="w-[40%] lg:flex hidden">
      <section class="text-slate-200 font-semibold flex justify-between gap-x-5">
        <a
          v-for="(item, index) in navigationMenu"
          :key="index"
          :href="item.page"
          class="relative py-2 px-3 rounded-lg group cursor-pointer"
          :class="item.status ? ' text-base-green' : 'text-white hover:text-base-green'"
          @mouseenter="onEnter(index)"
          @mouseleave="onLeave(index)"
          @click="handleClick(index)"
        >
          {{ item.name }}

          <!-- underline -->
          <span class="block w-full mt-1">
            <span
              class="block h-[1.5px] bg-yellow-500 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform group-hover:scale-x-100"
              :class="item.status ? 'scale-x-100' : ''"
            ></span>
          </span>
        </a>
      </section>
    </div>

    <!-- Hamburger Menu Button (Mobile) -->
    <div
      class="lg:hidden flex flex-col items-end gap-1.5 cursor-pointer z-30"
      @click="change = !change"
    >
      <div
        class="bg-white w-6 h-0.5 rounded-full transition-all duration-300"
        :class="change ? 'translate-y-2 rotate-45 transform' : ''"
      ></div>
      <div
        class="bg-white w-6 h-0.5 rounded-full transition-all duration-300"
        :class="change ? 'opacity-0' : ''"
      ></div>
      <div
        class="bg-white w-6 h-0.5 rounded-full transition-all duration-300"
        :class="change ? '-translate-y-2 -rotate-45 transform' : ''"
      ></div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div
      v-if="change"
      class="lg:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-sm z-20 pt-24 px-8"
    >
      <div class="flex flex-col gap-6">
        <a
          v-for="(item, index) in navigationMenu"
          :key="index"
          :href="item.page"
          class="text-2xl font-semibold transition-colors duration-300"
          :class="item.status ? 'text-base-green' : 'text-white hover:text-base-green'"
          @click="handleClick(index)"
        >
          {{ item.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const change = ref(false)
const isScrolling = ref(false)

const navigationMenu = ref([
  {
    name: 'Home',
    page: '#home',
    status: true,
    hover: false
  },
  {
    name: 'About',
    page: '#about',
    status: false,
    hover: false
  },
  {
    name: 'Education',
    page: '#education',
    status: false,
    hover: false
  },
  {
    name: 'Experience',
    page: '#experience',
    status: false,
    hover: false
  },
  {
    name: 'Projects',
    page: '#project',
    status: false,
    hover: false
  }
])

const onLeave = (index) => {
  navigationMenu.value[index].hover = false
}

const onEnter = (index) => {
  navigationMenu.value[index].hover = true
}

const handleClick = (index) => {
  change.value = false
  navigationMenu.value.forEach((item) => {
    if (item.status) item.status = false
  })
  navigationMenu.value[index].status = !navigationMenu.value[index].status
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolling.value = window.scrollY > 0
  })
})
</script>

<style>
.border-enter-active,
.border-leave-active {
  transition:
    width 0.5s ease,
    border-width 0.5s ease;
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
