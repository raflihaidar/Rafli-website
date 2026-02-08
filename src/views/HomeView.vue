<script setup>
import { defineAsyncComponent } from 'vue'
import { Icon } from '@iconify/vue'
const SocialIcon = defineAsyncComponent(() => import('../components/BaseSocialIcon.vue'))

const openMyResume = () => {
  window.open('/CV Rafli Haidar Nashif 2026.pdf', '_blank')
}
</script>

<template>
  <section class="w-screen h-screen relative bg-dot" id="home">
    <div
      class="w-40 h-40 z-10 md:w-48 md:h-48 rounded-full border border-opacity-30 border-white absolute -right-10 md:botom-10 -bottom-20 md:-right-20"
    ></div>

    <section
      class="absolute md:w-[90%] w-[90%] top-1/2 max-sm:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col text-white items-center gap-y-10 lg:gap-y-10"
    >
      <h1 class="text-4xl lg:text-7xl font-extrabold w-auto text-center">Rafli Haidar Nashif</h1>

      <h3 class="text-2xl lg:text-3xl text-base-green font-bold">Full-stack Developer</h3>

      <section class="lg:w-full left-0 w-[90%] gap-x-5 flex lg:justify-center justify-center">
        <SocialIcon
          class="text-white hover:text-base-green"
          url="mailto:www.rafli.haidar30@gmail.com"
        >
          <template #icon>
            <Icon icon="weui:email-outlined" />
          </template>
        </SocialIcon>
        <SocialIcon class="text-white hover:text-base-green" url="https://github.com/raflihaidar">
          <template #icon>
            <Icon icon="ri:github-fill" />
          </template>
        </SocialIcon>
        <SocialIcon
          class="text-white hover:text-base-green"
          url="https://www.linkedin.com/in/rafli-haidar-nashif/"
        >
          <template #icon>
            <Icon icon="circum:linkedin" />
          </template>
        </SocialIcon>
        <SocialIcon
          class="text-white hover:text-base-green"
          url="https://www.instagram.com/rafli_haidarr/"
        >
          <template #icon>
            <Icon icon="ph:instagram-logo-light" />
          </template>
        </SocialIcon>
      </section>

      <section>
        <div class="bg-base" @click="openMyResume">
          <div class="btn-glass">
            <Icon icon="weui:download-outlined" class="size-6" />
            <h3 class="text-sm md:text-lg text-white">Download my CV</h3>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>

<style scoped>
.bg-dot {
  background-image: radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 16px 16px;
}
</style>
