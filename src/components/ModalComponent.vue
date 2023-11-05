<template>
  <div v-if="status" class="flex justify-center items-center bg-black z-20 w-screen h-screen absolute top-0 left-0">
    <transition appear name="modal">
      <div
        class="text-lg text-white bg-sky-950 p-10 transition w-[80%] h-[80%] overflow-scroll md:overflow-auto m-auto relative">
        <section>
          <p class="text-3xl font-bold">{{ data.name }}</p>
        </section>
        <section class="md:flex justify-between mt-3">
          <span class="w-[55%]">
            <img :src="data.img" :alt="data.name" class="w-full mb-2">
          </span>
          <span class="w-[40%]">
            <p class="text-xl font-bold mb-2">Project Information</p>
            <section class="mb-3">
              <p class="mb-1 font-semibold">Technologies :</p>
              <span class="grid md:grid-cols-3 gap-5 text-center text-xs">
                <p v-for="(item, index) in data.technologies" :key="index" class="bg-sky-900 p-2 rounded-full">{{ item }}
                </p>
              </span>
            </section>
            <section class="flex gap-x-2 items-center mb-2">
              <p class="font-semibold">Find More on: </p>
              <GithubIcon :url="data.url" size="1.2em" />
            </section>
            <section>
              <p class="font-semibold">Description : </p>
              <p>{{ data.description }}</p>
            </section>
          </span>
        </section>
      </div>
    </transition>
    <div
      class="absolute flex flex-col hover:scale-110 transition items-end gap-1 top-5 md:right-20 right-3 text-white cursor-pointer"
      @click="closeModal">
      <div class="bg-white w-6 h-1 rounded-full translate-x-0 translate-y-[8px] -rotate-45 transform">
      </div>
      <div class="bg-white w-6 h-1 rounded-full transition opacity-0"></div>
      <div class="bg-white w-6 h-1 rounded-full translate-x-0 -translate-y-[8px] rotate-45 transform">
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue"
import GithubIcon from "./icons/GithubIcon.vue";
const props = defineProps({
  status: Boolean,
  data: Object
})

const emit = defineEmits(['closeModal'])
const closeModal = () => emit('closeModal')

const { status, data } = toRefs(props)
</script>


<style>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease-in-out;
  transform: scale(1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.3);
}
</style>