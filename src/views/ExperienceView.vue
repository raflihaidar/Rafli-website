<template>
  <main class="bg-slate-950 w-full py-10">
    <div class="w-[80%] mx-auto my-10">
      <section class="text-white my-10">
        <SubTittleComponent name="Work" />
        <div
          class="lg:w-full mx-auto w-full bg-sky-950 hover:bg-blue-950 transition-colors ease-in-out rounded-xl p-10"
        >
          <h1 class="text-2xl font-bold">Front End Developer</h1>
          <h2 class="text-xl font-semibold text-green-500">Final Project Inosoft Bootcamp</h2>
          <p class="text-lg font-semibold">September 2022 - May 2023</p>
          <p class="text-lg font-semibold italic">Certification</p>
          <ul class="list-disc text-justify ml-10">
            <li>
              Leading, directing, and managing the project team, which involves assigning tasks,
              scheduling, and ensuring that each team member understands their roles and
              responsibilities.
            </li>
            <li>
              Developed 1 third-party website application for inventory management using Laravel,
              Vue, and Mongodb within a week
            </li>
            <li>Connected API endpoints using Vuex and Axios</li>
            <li>Conducted online meetings with team members 3 times a week</li>
            <li>Presented the final project results to the mentor</li>
          </ul>
        </div>
      </section>
      <section class="text-white my-10">
        <SubTittleComponent name="Activity" />
        <div
          class="lg:w-full mx-auto w-full bg-sky-950 hover:bg-blue-950 transition-colors ease-in-out rounded-xl p-10"
        >
          <h1 class="text-2xl font-bold">Participant</h1>
          <h2 class="text-xl font-semibold text-green-500">
            Application of ultrasonic wave-based pest-free IoT in Keloposepuluh village, sidoarjo
          </h2>
          <p class="text-lg font-semibold">December 2023 - February 2024</p>
          <p class="text-lg font-semibold italic">Social Project</p>
          <ul class="list-disc text-justify ml-10">
            <li>
              The Social Project Competition in creating Young Technology and Digital Sociopreneur
              organized by Telkom Indonesia and Telkom University. My team successfully passed the
              funding stage to realize the proposal submitted in KelopoSepuluh village, Sidoarjo,
              East Java.
            </li>
            <li>
              Secured 14 million in funding from Telkom Indonesia for the project's social
              implementation
            </li>
            <li>Coordinated with Keloposepuluh village to implement the social project</li>
            <li>Designed 2 ultrasonic wave-based IoT devices within 3 months</li>
            <li>Arranged events and being the MC at the socialization event with farmer</li>
          </ul>
        </div>
      </section>
      <section class="text-white">
        <SubTittleComponent name="Organizations" />
        <div
          class="lg:w-full mx-auto my-5 w-full bg-sky-950 hover:bg-blue-950 transition-colors ease-in-out rounded-xl p-10"
        >
          <h1 class="text-2xl font-bold">Web Development Division</h1>
          <h2 class="text-xl font-semibold text-green-500">
            Google Developer Student Club Telkom University Surabaya
          </h2>
          <p class="text-lg font-semibold">2023 – present</p>
          <p class="text-lg font-semibold italic">UKM</p>
          <ul class="list-disc text-justify ml-10">
            <li>
              Conducted joint learning with division members every month on google web technology
            </li>
          </ul>
        </div>
        <div
          class="lg:w-full mx-auto w-full bg-sky-950 hover:bg-blue-950 transition-colors ease-in-out rounded-xl p-10"
        >
          <h1 class="text-2xl font-bold">Web Development Division</h1>
          <h2 class="text-xl font-semibold text-green-500">Coder Telkom University Surabaya</h2>
          <p class="text-lg font-semibold">2023 – present</p>
          <p class="text-lg font-semibold italic">UKM</p>
          <ul class="list-disc text-justify ml-10">
            <li>Learned web technology with division members every 3 times a month</li>
            <li>
              Acted as the logistics division in the implementation of the breaking fast together
              and handover of positions which was attended by 70 guests..
            </li>
          </ul>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const SubTittleComponent = defineAsyncComponent(() =>
  import('../components/SubTittleComponent.vue')
)
</script>
