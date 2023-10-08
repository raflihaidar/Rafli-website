<template>
  <main class="bg-slate-950">
    <div class="w-[80%] h-full mx-auto my-10">
      <section class="text-slate-200 font-bold tracking-wide">
        <SubTittleComponent name="ABOUT" />
        <div class="flex text-justify items-center">
          <span class="w-[20%]">
            <img src="../assets/img/foto_saya.png" alt="my photo" class="w-full h-full">
          </span>
          <span class="w-[60%] mx-auto grid gap-y-5">
            <p>Junior year student majoring in Technology Information who is interested in Web Development</p>
            <p>I have been working as <span class="text-green-600">Web Developer</span> since 2022. I’ve always been
              someone
              who has both a
              <span class="text-green-600">creative and
                a logical side</span>. When I discovered web design in college, I realized it would be the perfect fit. I
              could use
              my creative side to design and my logical side to code. As a bonus, being both designer and developer allows
              me to make sure no detail is lost in translation.
            </p>
            <p>Resourceful professional with successful track
              record in developing <span class="text-green-600">innovative web designs and
                features</span>. Possesses solid knowledge of Web Development with ability to quickly
              learn new technologies. Demonstrated success in
              identifying and resolving complex code issues.</p>
          </span>
        </div>
      </section>

      <section class="my-10 py-10 w-full">
        <SubTittleComponent name="SKILLS & TOOLS" />
        <SkillsCardComponent />
      </section>
    </div>
  </main>
</template>

<script setup>
import SubTittleComponent from '../components/SubTittleComponent.vue';
import SkillsCardComponent from '../components/SkillsCardComponent.vue';
</script>
