<template>
  <div
    v-if="status"
    class="flex justify-center items-center bg-black z-50 w-screen h-screen fixed top-0 left-0"
  >
    <transition appear name="modal" v-if="props.name === 'project'">
      <div
        class="text-white bg-sky-950 p-10 transition w-[80%] h-[80%] overflow-scroll md:overflow-auto m-auto relative rounded-xl"
      >
        <section>
          <p class="text-3xl font-bold mt-10">{{ data.name }}</p>
        </section>
        <section class="md:flex justify-between items-center mt-3">
          <span class="w-[55%]">
            <img :src="data.img" :alt="data.name" class="w-full mb-2" />
          </span>
          <span class="w-[40%]">
            <p class="text-xl font-bold mb-2">Project Information</p>
            <section class="mb-3">
              <ul class="font-semibold">
                <li>
                  Category :
                  <span class="font-thin my-3">{{ data.category }}</span>
                </li>
                <li class="my-3">
                  Project Date :
                  <span class="font-thin my-3">{{ data.project_date }}</span>
                </li>
                <li class="flex gap-x-2 items-center my-3">
                  Find More on :
                  <GithubIcon :url="data.url" size="1.2em" />
                </li>
                <li class="my-3">
                  Technologies :
                  <span
                    class="grid lg:grid-cols-3 grid-cols-1 gap-y-3 text-center items-center text-xs mt-2 w-full"
                  >
                    <p
                      v-for="(item, index) in data.technologies"
                      :key="index"
                      class="bg-sky-900 px-2 py-1 rounded-full w-28"
                    >
                      {{ item }}
                    </p>
                  </span>
                </li>
                <li class="my-3">
                  Description :
                  <span class="text-justify text-sm font-normal">
                    {{ data.description }}
                  </span>
                </li>
              </ul>
            </section>
          </span>
        </section>
      </div>
    </transition>
    <transition v-else name="modal" appear>
      <div class="w-[60%]">
        <img :src="data.img" alt="certificate" class="w-full" />
      </div>
    </transition>
    <div
      class="absolute flex flex-col hover:scale-110 transition items-end gap-1 top-5 md:right-20 right-3 text-white cursor-pointer"
      @click="closeModal"
    >
      <div
        class="bg-white w-6 h-1 rounded-full translate-x-0 translate-y-[8px] -rotate-45 transform"
      ></div>
      <div class="bg-white w-6 h-1 rounded-full transition opacity-0"></div>
      <div
        class="bg-white w-6 h-1 rounded-full translate-x-0 -translate-y-[8px] rotate-45 transform"
      ></div>
    </div>
    <div v-if="data.id != 1">
      <RightArrowIcon
        class="absolute top-1/2 md:left-20 left-3 cursor-pointer hover:scale-110 transition-transform"
      />
    </div>
    <div
      class="absolute top-1/2 md:right-20 right-3 cursor-pointer hover:scale-110 transition-transform"
    >
      <LeftArrowIcon />
    </div>
  </div>
</template>

<script setup>
import { inject, provide, toRefs } from 'vue'
import GithubIcon from './icons/GithubIcon.vue'
import LeftArrowIcon from './icons/LeftArrowIcon.vue'
import RightArrowIcon from './icons/RightArrowIcon.vue'

const project = inject('projects')

const props = defineProps({
  name: {
    type: String,
    default: 'project'
  },
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
  transition:
    opacity 0.3s ease,
    transform 0.3s ease-in-out;
  transform: scale(1);
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.3);
}
</style>
