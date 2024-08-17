<template>
  <nav class="w-full h-32 fixed z-20 top-0 flex items-center justify-between md:px-3">
    <section class="pl-4">
      <router-link class="text-white text-md md:text-xl font-normal flex md:flex-col gap-x-2">
        <span>Rafli</span><span>Haidar</span>
      </router-link>
    </section>
    <div class="w-full mx-auto lg:flex hidden justify-center items-center py-5">
      <section
        class="text-slate-200 font-semibold transition-colors text-lg flex justify-between cursor-pointer gap-x-5"
        :class="{ 'bg-blue-950 transition': isScrolling }"
      >
        <router-link
          class="py-2 px-3 rounded-lg group"
          :class="item.status ? 'text-green-700' : 'hover:text-green-600'"
          @mouseleave="onLeave(index)"
          @mouseenter="onEnter(index)"
          v-for="(item, index) in navigationMenu"
          :key="index"
          :to="item.page"
          @click="handleClick(index)"
        >
          {{ item.name }}
          <span>
            <transition name="border">
              <hr
                class="b-bottom transition-transform border-yellow-500 border-0"
                v-if="item.status || item.hover"
                :class="
                  item.status
                    ? 'w-5 border-[1.5px] '
                    : 'group-hover:text-green-600 group-hover:w-5 w-0 group-hover:border-[1.5px] group-hover:animate-fromLeft mx-0'
                "
              />
            </transition>
          </span>
        </router-link>
      </section>
    </div>

    <div
      :class="{ 'bg-blue-950 transition': isScrolling }"
      class="lg:hidden flex flex-col items-end gap-1 p-6 cursor-pointer"
      @click="change = !change"
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
    </div>

    <div
      v-if="change"
      class="lg:hidden fixed flex flex-col items-start pt-5 bg-black opacity-90 z-10 w-[90%] h-[80%] top-[55%] left-[50%] lg:text-left text-center -translate-x-[50%] -translate-y-[50%] border border-white rounded-lg"
    >
      <router-link
        class="py-2 px-3 text-lg text-white font-semibold"
        :class="item.status ? 'text-green-700' : 'hover:text-green-700'"
        v-for="(item, index) in navigationMenu"
        :key="index"
        :to="item.page"
        @click="handleClick(index)"
      >
        {{ item.name }}
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'

const router = useRouter()
let change = ref(false)
let isScrolling = ref(false)

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    isScrolling.value = true
  } else {
    isScrolling.value = false
  }
})

let navigationMenu = ref([
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
  navigationMenu.value.forEach((item) => (item.status ? router.push({ path: item.page }) : null))
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
