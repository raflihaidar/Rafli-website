<template>
  <div v-if="status" class="flex justify-center items-center bg-black z-20 w-screen h-screen absolute top-0 left-0">
    <div class="text-lg text-white bg-sky-950 p-10  w-[90%] h-[80%] m-auto relative">
      <section>
        <p class="text-3xl font-bold">{{ data.name }}</p>
      </section>
      <section class="flex justify-between mt-3">
        <span class="w-[60%]">
          <img :src="data.img" :alt="data.name" class="w-full">
        </span>
        <span class="w-[35%]">
          <p class="text-xl font-bold mb-2">Project Information</p>
          <section class="mb-2">
            <p>Technologies :</p>
            <span class="flex gap-x-2 text-sm">
              <p v-for="(item, index) in data.technologies" :key="index">{{ item }}</p>
            </span>
          </section>
          <section class="flex gap-x-2 items-center mb-2">
            <p>Find More : </p>
            <GithubIcon :url="data.url" size="1em" />
          </section>
          <section>
            <p>description : </p>
            <p>{{ data.description }}</p>
          </section>
        </span>
      </section>
    </div>
    <span class="absolute top-5 right-10 text-white">
      close
    </span>
  </div>
</template>

<script setup>
import { toRefs } from "vue"
import GithubIcon from "./icons/GithubIcon.vue";
const props = defineProps({
  status: Boolean,
  data: Object
})

const { status, data } = toRefs(props)
</script>