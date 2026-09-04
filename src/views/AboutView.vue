<template>
  <div class="relative scroll-smooth w-full h-full" id="about">
    <div
      class="w-40 h-40 z-10 md:w-48 md:h-48 rounded-full border border-opacity-30 border-white absolute -right-10 md:botom-10 -bottom-20 md:-right-20"
    ></div>
    <div class="w-[80%] h-full mx-auto flex flex-col lg:flex-row items-start gap-x-10">
      <section class="lg:w-[40%] text-slate-200 font-bold tracking-wide my-10">
        <SubTittleComponent name="ABOUT ME" />
        <section
          class="w-full pb-5 border-white/10 bg-white/10 border-[0.5px] transition-colors ease-in-out rounded-xl overflow-hidden"
        >
          <div class="w-full h-28 bg-gradient-to-r from-green-500 to-base-green relative">
            <figure
              class="absolute lg:h-32 lg:w-32 h-28 w-28 left-5 top-1/2 rounded-full flex justify-center overflow-hidden"
            >
              <img src="../assets/img/logo.png" alt="my photo" class="w-full h-full" />
            </figure>
            <div class="absolute right-5 -bottom-10 flex items-center gap-x-2">
              <SocialIcon
                class="text-white hover:text-base-green"
                url="mailto:www.rafli.haidar30@gmail.com"
              >
                <template #icon>
                  <Icon icon="weui:email-outlined" class="size-6 lg:size-8" />
                </template>
              </SocialIcon>
              <SocialIcon
                class="text-white hover:text-base-green"
                url="https://www.linkedin.com/in/rafli-haidar-nashif/"
              >
                <template #icon>
                  <Icon icon="circum:linkedin" class="size-6 lg:size-8" />
                </template>
              </SocialIcon>
              <SocialIcon
                class="text-white hover:text-base-green"
                url="https://www.instagram.com/rafli_haidarr/"
              >
                <template #icon>
                  <Icon icon="ph:instagram-logo-light" class="size-6 lg:size-8" />
                </template>
              </SocialIcon>
            </div>
          </div>
          <section class="mt-16 lg:mt-24 px-5">
            <div>
              <h3 class="font-semibold text-lg lg:text-xl">Rafli Haidar Nashif</h3>
              <ul class="flex text-xs lg:text-sm mt-2 whitespace-nowrap">
                <li class="border-e-2 pr-2 mr-2">Software Engineer</li>
                <li>Full-stack Developer</li>
              </ul>
              <div class="flex items-center gap-x-2 mt-2">
                <Icon icon="twemoji:flag-indonesia" class="size-6" />
                <p class="text-xs lg:text-sm">Surabaya, Indonesia</p>
              </div>
              <div class="mt-5">
                <h4 class="text-sm">About</h4>
                <p class="text-xs lg:text-sm text-justify mt-2">
                  Hi i'm Rafli - A Full-Stack Developer with 2+ years of experience in web
                  development, specializing in enterprise systems, internal platforms, and consumer
                  applications. Committed to building scalable web systems and delivering impactful
                  digital solutions
                </p>
              </div>
              <!-- <div class="w-full flex items-center gap-x-5 mt-10">
                <button
                  class="bg-green-600 rounded-lg py-3 flex-grow text-sm lg:text-xl font-bold cursor-pointer"
                >
                  Let's Talk
                </button>
                <button
                  class="border-white/10 bg-white/10 border-[0.5px] rounded-lg transition-colors ease-in-out py-3 w-16 flex justify-center"
                >
                  <Icon icon="bytesize:download" class="size-5 lg:size-6" />
                </button>
              </div> -->
            </div>
          </section>
        </section>
      </section>

      <section class="my-12 py-10 w-full lg:w-[60%]">
        <div>
          <SubTittleComponent name="SKILLS & TOOLS" />
          <SkillsCardComponent />
        </div>
        <div class="mt-10">
          <SubTittleComponent name="EDUCATION" />
          <div
            class="flex items-center py-5 px-3 gap-x-5 text-white border-white/10 bg-white/10 border-[0.5px] transition-colors ease-in-out rounded-xl"
          >
            <div class="border-white/10 bg-white/10 border-[0.5px] p-3 rounded-xl">
              <img
                src="../assets/img/telu.png"
                alt="Education Image"
                class="size-6 lg:size-7 bg-cover"
              />
            </div>
            <div class="w-full">
              <div
                class="flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center"
              >
                <h4>Telkom University</h4>
                <p class="text-xs lg:text-sm">Sept 2022 - Aug 2026</p>
              </div>
              <div class="flex flex-col lg:flex-row">
                <p class="text-xs lg:text-sm">Information Technology</p>
                <span class="hidden lg:block text-sm mx-2">-</span>
                <p class="text-xs lg:text-sm">GPA : 3.79</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { Icon } from '@iconify/vue'
const SubTittleComponent = defineAsyncComponent(() => import('../components/BaseSubTittle.vue'))
const SocialIcon = defineAsyncComponent(() => import('../components/BaseSocialIcon.vue'))

const SkillsCardComponent = defineAsyncComponent(
  () => import('../components/SkillsCardComponent.vue')
)
</script>
