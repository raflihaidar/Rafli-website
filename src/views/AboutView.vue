<template>
  <main class="bg-slate-950">
    <div class="w-[80%] h-full mx-auto py-20">
      <section class="text-slate-200 font-bold tracking-wide my-10">
        <SubTittleComponent name="ABOUT" />
        <div class="flex flex-col lg:flex-row text-justify items-center">
          <span class="lg:w-[20%] h-full w-full" v-motion-slide-left>
            <img src="../assets/img/foto_saya.png" alt="my photo" class="w-full h-full" />
          </span>
          <span
            class="lg:w-[60%] h-full w-full mt-5 text-justify mx-auto grid gap-y-5"
            v-motion-slide-right
          >
            <p>
              Junior year student majoring in Technology Information who is interested in Web
              Development
            </p>
            <p>
              I have been working as <span class="text-green-600">Web Developer</span> since 2022.
              I’ve always been someone who has both a
              <span class="text-green-600">creative and a logical side</span>. When I discovered web
              design in college, I realized it would be the perfect fit. I could use my creative
              side to design and my logical side to code. As a bonus, being both designer and
              developer allows me to make sure no detail is lost in translation.
            </p>
            <p>
              Resourceful professional with successful track record in developing
              <span class="text-green-600">innovative web designs and features</span>. Possesses
              solid knowledge of Web Development with ability to quickly learn new technologies.
              Demonstrated success in identifying and resolving complex code issues.
            </p>
          </span>
        </div>
      </section>

      <section class="my-12 py-10 w-full">
        <SubTittleComponent name="SKILLS & TOOLS" />
        <SkillsCardComponent />
      </section>
    </div>
  </main>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const SubTittleComponent = defineAsyncComponent(() =>
  import('../components/SubTittleComponent.vue')
)

const SkillsCardComponent = defineAsyncComponent(() =>
  import('../components/SkillsCardComponent.vue')
)
</script>
