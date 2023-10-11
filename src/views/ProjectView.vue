<template>
  <main class="w-full bg-slate-950">
    <div class="w-[80%] mx-auto my-10">
      <section>
        <subTitleComponent name="PROJECTS" />
        <div class="grid lg:grid-cols-3 pb-5 grid-cols-1 gap-8 text-slate-200 font-semibold text-xl text-center">
          <span>
            <p>Mitra Pasar</p>
            <div class="mt-3 border-4 border-slate-200">
              <img src="../assets/img/Mitra_Pasar.jpg" alt="mitra pasar" class="w-full">
            </div>
          </span>
          <span>
            <p>Student Service Center</p>
            <div class="mt-3 border-4 border-slate-200">
              <img src="../assets/img/Web_SSC.jpg" alt="ssc" class="w-full">
            </div>
          </span>
          <span>
            <p>Gmail Clone</p>
            <div class="mt-3 border-4 border-slate-200">
              <img src="../assets/img/gmail.jpg" alt="gmail clone" class="w-full">
            </div>
          </span>
        </div>
      </section>
    </div>
  </main>
</template>


<script setup>
import subTitleComponent from "../components/SubTittleComponent.vue"
</script>