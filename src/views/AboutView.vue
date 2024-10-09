<template>
  <div class="bg-black relative scroll-smooth w-full h-full" id="about">
    <div
      class="w-40 h-40 z-10 md:w-48 md:h-48 rounded-full border border-opacity-30 border-white absolute -right-10 md:botom-10 -bottom-20 md:-right-20"
    ></div>
    <div class="w-[80%] h-full mx-auto">
      <section class="text-slate-200 font-bold tracking-wide my-10">
        <SubTittleComponent name="ABOUT" />
        <div>
          <!-- <figure class="md:w-[20%] h-full w-full" v-motion-slide-left>
            <img src="../assets/img/foto_saya.png" alt="my photo" class="w-full h-full" />
          </figure> -->
          <span
            class="md:w-[60%] h-full w-full mt-5 text-justify mx-auto grid gap-y-5"
            v-motion-slide-right
          >
            <p>
              Experienced <span class="text-green-600"> Full-Stack Developer</span> passionate about
              crafting exceptional user experiences. Proficient in
              <span class="text-green-600">MySQL, Vue.js, Express.js, and Node.js</span>. Skilled in
              using development tools such as VS Code and Linux. Successfully
              <span class="text-green-600">built three web projects</span>, ranging from e-commerce
              platforms to real-time web applications.
            </p>
          </span>
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
const SubTittleComponent = defineAsyncComponent(() => import('../components/BaseSubTittle.vue'))

const SkillsCardComponent = defineAsyncComponent(
  () => import('../components/SkillsCardComponent.vue')
)
</script>
