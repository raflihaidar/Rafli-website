<script setup>
defineProps({
  data: Array,
  isHidden: Boolean
})
</script>

<template>
  <div
    class="lg:w-full mx-auto w-full bg-sky-950 hover:bg-blue-950 transition-colors ease-in-out rounded-xl"
    v-for="(item, index) in data"
    :key="index"
  >
    <header
      :class="[
        'flex max-sm:flex-col justify-between items-center max-sm:items-start w-full mb-5 px-5 pt-5',
        isHidden === item.title ? 'border-b border-b-white pb-5' : ''
      ]"
    >
      <section class="flex flex-wrap items-center gap-x-2 w-full">
        <h1 class="text-xl max-sm:text-md font-bold">{{ item.title }}</h1>
        <p class="max-sm:hidden">@</p>
        <h2 class="text-lg font-semibold text-green-500">
          {{ item.company }}
        </h2>
      </section>
      <section
        class="flex flex-wrap-reverse items-center justify-end max-sm:justify-between w-full gap-x-2"
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
          <li v-for="(value, number) in item.description" :value="number" class="mb-3">
            {{ value }}
          </li>
        </ul>
        <footer>
          <ul class="flex text-xs gap-x-5 text-gray-200">
            <li v-for="(value, number) in item.skills" :value="number">{{ value }}</li>
          </ul>
        </footer>
      </section>
    </transition>
  </div>
</template>
