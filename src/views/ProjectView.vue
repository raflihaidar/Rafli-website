<template>
  <main class="w-full bg-slate-950" id="projectView">
    <div class="w-[80%] mx-auto my-10">
      <section>
        <subTitleComponent name="PROJECTS" />
        <div class="grid lg:grid-cols-3 pb-5 grid-cols-1 gap-8 text-slate-200 font-semibold text-xl text-center">
          <span v-for="(item, index) in projects" :key="index">
            <p>{{ item.name }}</p>
            <div class="relative border-4 mt-3 border-slate-200 cursor-pointer" @mouseover="handleHover(index, true)"
              @mouseleave="handleHover(index, false)">
              <div>
                <img :src="item.img" alt="mitra pasar" class="w-full">
              </div>
              <span v-if="hoverIndex === index"
                class="absolute animate-fadeout flex gap-x-3 items-center justify-center bg-black opacity-70 w-full h-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10">
                <InformationIcon @click="openModal(item)" />
              </span>
            </div>
          </span>
        </div>
        <transition to="projectView">
          <ModalComponent :status="modalStatus" :data="modalContent" />
        </transition>
      </section>
    </div>
  </main>
</template>


<script setup>
import { reactive, ref } from "vue"
import subTitleComponent from "../components/SubTittleComponent.vue"
import InformationIcon from "../components/icons/InformationIcon.vue"
import ModalComponent from "../components/ModalComponent.vue"

let hoverIndex = ref(0);
let modalStatus = ref(false);
let modalContent = ref(null)

const handleHover = (index, isHover) => {
  hoverIndex.value = isHover ? index : null
}

const openModal = (item) => {
  modalStatus.value = true
  modalContent.value = item
  console.log(modalContent.value)
}
const projects = reactive([
  {
    name: "Mitra Pasar",
    img: "src/assets/img/Mitra_Pasar.jpg",
    description: "Pasar Mitra is an e-commerce platform that is used to advance traditional markets and local MSMEs. Where e-commerce sells products and adapts activities that exist in traditional markets.",
    technologies: [
      "Vue js",
      "Express js",
      "Mysql",
      "Pinia",
      "Google auth library",
      "Tailwind css"
    ]
  },
  {
    name: "Student Service Center",
    img: "src/assets/img/Web_SSC.jpg",
    description: "This platform is used as a place for students to get information about the services provided by the Telkom Surabaya IT Student Service Center.",
    technologies: [
      "Vue js",
      "Vuex",
      "Tailwind css"
    ]
  },
  {
    name: "Gmail Clone",
    img: "src/assets/img/gmail.jpg",
    description: "Web email that adapts Gmail features such as real-time inbox, logging in with a Google account, and etc.",
    technologies: [
      "Vue js",
      "Firebase",
      "Google auth library",
      "Tailwind css"
    ]
  },
])
</script>