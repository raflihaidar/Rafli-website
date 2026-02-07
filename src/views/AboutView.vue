<template>
  <div class="relative scroll-smooth w-full h-full" id="about">
    <div
      class="w-40 h-40 z-10 md:w-48 md:h-48 rounded-full border border-opacity-30 border-white absolute -right-10 md:botom-10 -bottom-20 md:-right-20"
    ></div>
    <div class="w-[80%] h-full mx-auto">
      <section class="text-slate-200 font-bold tracking-wide my-10">
        <SubTittleComponent name="ABOUT ME" />
        <div class="flex flex-col lg:flex-row text-justify items-center">
          <section
            class="w-1/2 pb-5 border-white/10 bg-white/10 border-[0.5px] transition-colors ease-in-out rounded-xl overflow-hidden"
          >
            <div class="w-full h-28 bg-gradient-to-r from-green-500 to-base-green relative">
              <figure
                class="absolute h-32 w-32 left-5 top-1/2 rounded-full flex justify-center overflow-hidden"
              >
                <img src="../assets/img/logo.png" alt="my photo" class="w-full h-full" />
              </figure>
              <div class="absolute right-5 -bottom-10 flex items-center gap-x-2">
                <SocialIcon
                  class="text-white hover:text-base-green"
                  url="mailto:www.rafli.haidar30@gmail.com"
                >
                  <template #icon>
                    <Icon icon="weui:email-outlined" class="size-8" />
                  </template>
                </SocialIcon>
                <SocialIcon
                  class="text-white hover:text-base-green"
                  url="https://www.linkedin.com/in/rafli-haidar-nashif/"
                >
                  <template #icon>
                    <Icon icon="circum:linkedin" class="size-8" />
                  </template>
                </SocialIcon>
                <SocialIcon
                  class="text-white hover:text-base-green"
                  url="https://www.instagram.com/rafli_haidarr/"
                >
                  <template #icon>
                    <Icon icon="ph:instagram-logo-light" class="size-8" />
                  </template>
                </SocialIcon>
              </div>
            </div>
            <section class="mt-24 px-5">
              <div>
                <h3 class="font-semibold text-xl">Rafli Haidar Nashif</h3>
                <ul class="flex text-sm mt-2">
                  <li class="border-e-2 pr-2 mr-2">Software Engineer</li>
                  <li>Full-stack Developer</li>
                </ul>
                <div class="flex items-center gap-x-2 mt-2">
                  <Icon icon="twemoji:flag-indonesia" class="size-6" />
                  <p class="text-sm">Surabaya, Indonesia</p>
                </div>
                <div class="mt-5">
                  <h4>About</h4>
                  <p class="text-sm text-justify mt-2">
                    Hi i'm Rafli - A Full-Stack Web Developer with 2+ years of experience in web
                    development, specializing in enterprise systems, internal platforms, and
                    consumer applications Proficient in Vue.js, JavaScript, Laravel, Node.js,
                    Express.js, PHP. Committed to building scalable web systems and delivering
                    impactful digital solutions
                  </p>
                </div>
                <div class="w-full flex items-center gap-x-5 mt-10">
                  <button
                    class="bg-green-600 rounded-lg py-3 flex-grow text-xl font-bold cursor-pointer"
                  >
                    Let's Talk
                  </button>
                  <button
                    class="border-white/10 bg-white/10 border-[0.5px] rounded-lg transition-colors ease-in-out py-3 w-16 flex justify-center"
                  >
                    <Icon icon="bytesize:download" class="size-6" />
                  </button>
                </div>
              </div>
            </section>
          </section>
          <!-- <section>
            <p class="text-sm mb-5 w-[60%]">
              Hi i'm Rafli - A <span class="text-green-600"> Full-Stack Web Developer</span> with 2+
              years of experience in web development, specializing in
              <span class="text-green-600"
                >enterprise systems, internal platforms, and consumer applications</span
              >. Proficient in Vue.js, JavaScript, Laravel, Node.js, Express.js, PHP.
              <span class="text-green-600"
                >Committed to building scalable web systems and delivering impactful digital
                solutions</span
              >.
            </p>
            <div>
              <h3 class="text-lg font-semibold">Education</h3>
              <figure
                v-motion-pop
                class="lg:w-[50%] text-white w-full border-white/10 bg-white/10 border-[0.5px] transition-colors ease-in-out rounded-b-xl"
              >
                <img src="../assets//img/Telkom-University.jpg" alt="Telkom University" />
                <figcaption class="w-full text-whites px-3 py-2 grid">
                  <a
                    href="https://ittelkom-sby.ac.id/"
                    target="_blank"
                    class="text-lg font-semibold hover:underline cursor-pointer transition"
                    >Telkom University Campus Surabaya</a
                  >
                  <p>Sept 2022 - Present</p>
                  <p class="italic">Bachelor;s Degree in Information Technology</p>
                  <p class="text-sm italic">GPA : 3.78 / 4.00</p>
                </figcaption>
              </figure>
            </div>
          </section> -->
        </div>
      </section>

      <section class="my-12 py-10 w-full">
        <SubTittleComponent name="SKILLS & TOOLS" />
        <SkillsCardComponent />
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
