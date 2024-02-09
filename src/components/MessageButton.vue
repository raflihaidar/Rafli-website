<template>
  <main class="md:w-full">
    <transition name="message">
      <section
        class="lg:w-[25%] lg:h-[60%] bg-white text-center rounded-lg fixed w-full h-screen lg:bottom-24 lg:right-8 bottom-0"
        v-if="showMessage">
        <div
          class="bg-blue-600 w-full text-white text-xs gap-y-1 rounded-t-lg py-3 text-center flex flex-col justify-center items-center">
          <span class="flex bg-blue-700 gap-x-2 px-3 w-[20%] justify-center items-center rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#" class="w-6 h-6">
              <path
                d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
              <path
                d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
            </svg>
            <p>chat</p>
          </span>
          <span>
            <p>Ask me your questions</p>
          </span>
          <span>
            <p>Last active 15 minutes ago</p>
          </span>
        </div>
        <div class=" w-full rounded-lg my-20">
          <p class="text-red-500 font-semibold">This feature is currently in development</p>
        </div>
      </section>
    </transition>
    <div
      class="bg-blue-600  block rounded-full p-4  text-white fixed bottom-5 md:right-8 right-4 cursor-pointer hover:scale-110 transition-transform"
      @click="showMessage = !showMessage" @mouseenter="hover = true" @mouseleave="hover = false">
      <MessageIcon v-if="!showMessage" />
      <CloseIcon v-else />
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
const hover = ref(false)
const showMessage = ref(false)
import MessageIcon from "./icons/MessageIcon.vue";
import CloseIcon from "./icons/CloseIcon.vue"
</script>

<style>
.message-enter-active,
.message-leave-active {
  transition: opacity 1s ease, transform 0.5s ease
}

.message-enter-from,
.message-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>