<template>
  <div
    v-if="status"
    class="flex justify-center items-center bg-black z-50 w-screen h-screen fixed top-0 left-0"
  >
    <transition appear name="modal" v-if="props.name === 'project'">
      <div
        ref="target"
        class="text-white bg-sky-950 p-10 transition w-full h-full lg:w-[80%] lg:h-[80%] overflow-scroll md:overflow-auto m-auto relative rounded-xl"
      >
        <section>
          <p class="text-3xl font-bold mt-10">{{ data[currentIndex - 1].name }}</p>
        </section>
        <section class="md:flex justify-between items-center mt-3">
          <span class="w-[55%]">
            <img
              :src="data[currentIndex - 1].img"
              :alt="data[currentIndex - 1].name"
              class="w-full mb-2"
            />
          </span>
          <span class="w-[40%]">
            <p class="text-xl font-bold mb-2">Project Information</p>
            <section class="mb-3">
              <ul class="font-semibold">
                <li>
                  Category :
                  <span class="font-thin my-3">{{ data[currentIndex - 1].category }}</span>
                </li>
                <li class="my-3">
                  Project Date :
                  <span class="font-thin my-3">{{ data[currentIndex - 1].project_date }}</span>
                </li>
                <li class="flex gap-x-2 items-center my-3">
                  Find More on :
                  <SocialIcon :url="data[currentIndex - 1].url" size="1.2em">
                    <template #icon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 496 512"
                        fill="#fff"
                      >
                        <path
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                        />
                      </svg>
                    </template>
                  </SocialIcon>
                </li>
                <li class="my-3">
                  Technologies :
                  <span
                    class="grid lg:grid-cols-3 grid-cols-1 gap-y-3 text-center items-center text-xs mt-2 w-full"
                  >
                    <p
                      v-for="(item, index) in data[currentIndex - 1].technologies"
                      :key="index"
                      class="bg-sky-900 px-2 py-1 rounded-full lg:w-28"
                    >
                      {{ item }}
                    </p>
                  </span>
                </li>
                <li class="my-3">
                  Description :
                  <span class="text-justify text-sm font-normal">
                    {{ data[currentIndex - 1].description }}
                  </span>
                </li>
              </ul>
            </section>
          </span>
        </section>
      </div>
    </transition>
    <transition v-else name="modal" appear>
      <div class="lg:w-[60%] w-full">
        <img :src="data[currentIndex - 1].img" :alt="data[currentIndex - 1].name" class="w-full" />
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
    <div v-if="currentIndex != 1">
      <RightArrowIcon
        @click="prevSlide"
        class="absolute top-1/2 md:left-20 left-3 cursor-pointer hover:scale-110 transition-transform"
      />
    </div>
    <div
      v-if="currentIndex < data.length"
      @click="nextSlide"
      class="absolute top-1/2 md:right-20 right-3 cursor-pointer hover:scale-110 transition-transform"
    >
      <LeftArrowIcon />
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import SocialIcon from './BaseSocialIcon.vue'
import LeftArrowIcon from './icons/LeftArrowIcon.vue'
import RightArrowIcon from './icons/RightArrowIcon.vue'

const props = defineProps({
  name: {
    type: String,
    default: 'project'
  },
  status: Boolean,
  data: Array,
  currentIndex: Number
})
const { status, data, currentIndex } = toRefs(props)

const emit = defineEmits(['closeModal', 'prevSlide', 'nextSlide'])
const closeModal = () => emit('closeModal')
const prevSlide = () => {
  emit('prevSlide')
}
const nextSlide = () => emit('nextSlide')
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
