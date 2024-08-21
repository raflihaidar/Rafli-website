<template>
  <section id="experience">
    <div class="w-[80%] mx-auto py-20">
      <section class="text-white flex flex-col gap-y-5 my-10" v-motion-slide-left>
        <SubTittleComponent name="WORK" />
        <div
          class="lg:w-full mx-auto w-full bg-sky-950 hover:bg-blue-950 transition-colors ease-in-out rounded-xl"
          v-for="(item, index) in workExperiences"
          :key="index"
        >
          <header
            :class="[
              'flex max-sm:flex-col justify-between items-center max-sm:items-start w-full mb-5 px-5 pt-5',
              isHidden === item.title ? 'border-b border-b-white pb-5' : ''
            ]"
          >
            <section class="flex flex-wrap items-center gap-x-2 w-full">
              <h1 class="text-lg max-sm:text-md font-bold">{{ item.title }}</h1>
              <p class="max-sm:hidden">@</p>
              <h2 class="text-md max-sm:text-sm font-semibold text-green-500">
                {{ item.company }}
              </h2>
            </section>
            <section
              class="flex flex-wrap-reverse items-center justify-end max-sm:justify-between w-[30%] max-sm:w-full gap-x-2"
            >
              <p class="text-md font-semibold max-sm:text-sm">
                {{ item.date }}
              </p>
              <div class="cursor-pointer">
                <Icon
                  v-if="isHidden !== item.title"
                  icon="ic:round-plus"
                  width="2rem"
                  height="2rem"
                  style="color: #22c564"
                  class="block"
                  @click="isHidden = item.title"
                />
                <Icon
                  v-else
                  icon="ic:round-minus"
                  width="2rem"
                  height="2rem"
                  style="color: #22c564"
                  class="block"
                  @click="isHidden = null"
                />
              </div>
            </section>
          </header>
          <transition>
            <section class="px-10 pb-10" v-if="isHidden === item.title">
              <ul class="list-disc text-left ml-10 mb-5">
                <li v-for="(value, number) in item.tasks" :key="number" class="mb-3">
                  {{ value }}
                </li>
              </ul>
              <footer>
                <ul class="flex text-xs gap-x-5 text-gray-200">
                  <li v-for="(value, number) in item.skills" :key="number">{{ value }}</li>
                </ul>
              </footer>
            </section>
          </transition>
        </div>
      </section>
      <section class="text-white flex flex-col gap-y-5 my-10" v-motion-slide-left>
        <SubTittleComponent name="ACHIVEMENT" />
        <div
          class="lg:w-full mx-auto w-full bg-sky-950 hover:bg-blue-950 transition-colors ease-in-out rounded-xl"
          v-for="(item, index) in achivements"
          :key="index"
        >
          <header
            :class="[
              'flex max-sm:flex-col justify-between items-center max-sm:items-start w-full mb-5 px-5 pt-5',
              isHidden === item.title ? 'border-b border-b-white pb-5' : ''
            ]"
          >
            <section class="flex flex-wrap items-center gap-x-2 w-full">
              <h1 class="text-lg max-sm:text-md font-bold">{{ item.title }}</h1>
              <p class="max-sm:hidden">@</p>
              <h2 class="text-md max-sm:text-sm font-semibold text-green-500">
                {{ item.organization }}
              </h2>
            </section>
            <section
              class="flex flex-wrap-reverse items-center justify-end max-sm:justify-between w-[30%] max-sm:w-full gap-x-2"
            >
              <p class="text-md font-semibold max-sm:text-sm">
                {{ item.date }}
              </p>
              <div class="cursor-pointer">
                <Icon
                  v-if="isHidden !== item.title"
                  icon="ic:round-plus"
                  width="2rem"
                  height="2rem"
                  style="color: #22c564"
                  class="block"
                  @click="isHidden = item.title"
                />
                <Icon
                  v-else
                  icon="ic:round-minus"
                  width="2rem"
                  height="2rem"
                  style="color: #22c564"
                  class="block"
                  @click="isHidden = null"
                />
              </div>
            </section>
          </header>
          <transition>
            <section class="px-5 pb-5" v-if="isHidden === item.title">
              <p>
                {{ item.description }}
              </p>
              <footer>
                <ul class="flex text-xs gap-x-5 text-gray-200">
                  <li v-for="(value, number) in item.skills" :key="number">{{ value }}</li>
                </ul>
              </footer>
            </section>
          </transition>
        </div>
      </section>
      <section class="text-white flex flex-col gap-y-5 my-10" v-motion-slide-left>
        <SubTittleComponent name="ACTIVITY" />
        <div
          class="lg:w-full mx-auto w-full bg-sky-950 hover:bg-blue-950 transition-colors ease-in-out rounded-xl"
          v-for="(item, index) in activity"
          :key="index"
        >
          <header
            :class="[
              'flex max-sm:flex-col justify-between items-center max-sm:items-start w-full mb-5 px-5 pt-5',
              isHidden === item.title ? 'border-b border-b-white pb-5' : ''
            ]"
          >
            <section class="flex flex-wrap items-center gap-x-2 w-full">
              <h1 class="text-lg max-sm:text-md font-bold">{{ item.title }}</h1>
              <p class="max-sm:hidden">@</p>
              <h2 class="text-md max-sm:text-sm font-semibold text-green-500">
                {{ item.organization }}
              </h2>
            </section>
            <section
              class="flex flex-wrap-reverse items-center justify-end max-sm:justify-between w-[30%] max-sm:w-full gap-x-2"
            >
              <p class="text-md font-semibold max-sm:text-sm">
                {{ item.date }}
              </p>
              <div class="cursor-pointer">
                <Icon
                  v-if="isHidden !== item.title"
                  icon="ic:round-plus"
                  width="2rem"
                  height="2rem"
                  style="color: #22c564"
                  class="block"
                  @click="isHidden = item.title"
                />
                <Icon
                  v-else
                  icon="ic:round-minus"
                  width="2rem"
                  height="2rem"
                  style="color: #22c564"
                  class="block"
                  @click="isHidden = null"
                />
              </div>
            </section>
          </header>
          <transition>
            <section class="px-5 pb-5" v-if="isHidden === item.title">
              <ul class="list-disc text-left ml-10 mb-5">
                <li v-for="(value, number) in item.tasks" :key="number" class="mb-3">
                  {{ value }}
                </li>
              </ul>
              <footer>
                <ul class="flex text-xs gap-x-5 text-gray-200">
                  <li v-for="(value, number) in item.skills" :key="number">{{ value }}</li>
                </ul>
              </footer>
            </section>
          </transition>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'
import { workExperiences, achivements, activity } from '../assets/data.js'
import { Icon } from '@iconify/vue'
const SubTittleComponent = defineAsyncComponent(() => import('../components/BaseSubTittle.vue'))
const isHidden = ref(null)
</script>
