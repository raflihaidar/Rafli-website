<template>
  <main class="bg-slate-950 w-full py-10">
    <div class="w-[80%] mx-auto my-10">
      <section class="text-white my-10">
        <SubTittleComponent name="Work" />
        <div class="lg:w-full mx-auto w-full bg-sky-950 hover:bg-blue-950 transition-colors ease-in-out rounded-xl p-10">
          <h1 class="text-2xl font-bold">Front End Developer</h1>
          <h2 class="text-xl font-semibold text-green-500">Final Project Inosoft Bootcamp</h2>
          <p class="text-lg font-semibold">September 2022 - May 2023</p>
          <p class="text-lg font-semibold italic">Certification</p>
          <p>Develop a web application third party instruction Collaborated with backend developer
            during development processes
          </p>
        </div>
      </section>
      <section class="text-white">
        <SubTittleComponent name="Activity" />
        <div class="lg:w-full mx-auto w-full bg-sky-950 hover:bg-blue-950 transition-colors ease-in-out rounded-xl p-10">
          <h1 class="text-2xl font-bold">Participant</h1>
          <h2 class="text-xl font-semibold text-green-500">Top 163 Innovillage 2023</h2>
          <p class="text-lg font-semibold">December 2023 - February 2024</p>
          <p class="text-lg font-semibold italic">Competition</p>
          <p>
            The Social Project Competition in creating Young Technology and Digital Sociopreneur organized by Telkom
            Indonesia and Telkom University. My team successfully passed the funding stage to realize the proposal
            submitted
            in KelopoSepuluh village, Sidoarjo, East Java.
          </p>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import SubTittleComponent from '../components/SubTittleComponent.vue';
</script>