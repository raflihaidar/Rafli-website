<template>
  <main class="bg-slate-950">
    <div class="w-[80%] mx-auto my-10">
      <section class="mb-20">
        <SubTittleComponent name="EDUCATION" />
        <div class="lg:w-[35%] w-full bg-sky-950 hover:bg-blue-950 transition-colors ease-in-out rounded-b-xl">
          <span>
            <img src="../assets//img/Telkom-University.jpg" alt="Telkom University">
          </span>
          <div class="w-full text-white px-2 py-3">
            <a href="https://ittelkom-sby.ac.id/" target="_blank"
              class="text-xl font-semibold hover:underline cursor-pointer transition">Institute Technology Telkom
              Surabaya</a>
            <p class="text-lg">Sep 2022 - Present</p>
            <p class="text-md italic">Bachelor;s Degree in Information Technology - S.Kom.</p>
          </div>
        </div>
      </section>

      <section class="py-10">
        <SubTittleComponent name="CERTIFICATIONS" />
        <span class="grid grid-rows-1">
          <img src="../assets//img/sertifikat.jpg" alt="certification" class="lg:w-[30%] w-full">
        </span>
      </section>
    </div>
  </main>
</template>

<script setup>
import SubTittleComponent from '../components/SubTittleComponent.vue';
</script>