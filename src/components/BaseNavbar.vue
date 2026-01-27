<template>
  <nav
    class="w-full h-auto fixed z-20 top-0 flex justify-around items-center md:px-3 md:py-5"
    :class="{
      'bg-base/40 backdrop-saturate-50 backdrop-blur-md shadow-lg transition': isScrolling
    }"
  >
    <section class="w-[30%]">
      <a href="#home" class="text-white text-md md:text-xl">
        <figure class="w-full flex items-center gap-x-3">
          <div class="w-12 rounded-full overflow-hidden">
            <img src="../assets/img/logo.png" alt="main logo" class="w-full h-full" />
          </div>
          <h2 class="text-white font-extrabold">
            raflihaidar<span class="text-base-green">.my.id</span>
          </h2>
        </figure>
      </a>
    </section>
    <div class="w-[40%] lg:flex hidden">
      <section class="text-slate-200 font-semibold flex justify-between gap-x-5">
        <a
          v-for="(item, index) in navigationMenu"
          :key="index"
          :href="item.page"
          class="relative py-2 px-3 rounded-lg group cursor-pointer"
          :class="item.status ? ' text-base-green' : 'text-white hover: text-base-green'"
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

    <!-- <div
      :class="{ 'bg-blue-950 transition': isScrolling }"
      class="lg:hidden flex flex-col items-end gap-1 p-6 cursor-pointer"
      @click="change = !change"
      s
    >
      <div
        class="bg-white w-6 h-1 rounded-full transition"
        :class="change ? 'translate-x-0 translate-y-[8px] -rotate-45 transform' : null"
      ></div>
      <div
        class="bg-white w-6 h-1 rounded-full transition"
        :class="change ? 'opacity-0' : null"
      ></div>
      <div
        class="bg-white w-6 h-1 rounded-full transition"
        :class="change ? 'translate-x-0 -translate-y-[8px] rotate-45 transform' : null"
      ></div>
    </div> -->

    <!-- <div
      v-if="change"
      class="lg:hidden fixed flex flex-col items-start pt-5 bg-black opacity-90 z-10 w-[90%] h-[80%] top-[55%] left-[50%] lg:text-left text-center -translate-x-[50%] -translate-y-[50%] border border-white rounded-lg"
    >
      <a
        class="py-2 px-3 text-lg text-white font-semibold"
        :class="item.status ? 'text-green-700' : 'hover:text-green-700'"
        v-for="(item, index) in navigationMenu"
        :key="index"
        :href="item.page"
        @click="handleClick(index)"
      >
        {{ item.name }}
      </a>
    </div> -->
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
    if (window.scrollY > 0) {
      isScrolling.value = true
    } else {
      isScrolling.value = false
    }

    window.addEventListener('scroll', console.log('Scroll Connected'))
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
