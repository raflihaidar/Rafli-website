<template>
  <main class="bg-slate-950 w-full" id="projectView">
    <div class="w-[80%] mx-auto my-10">
      <section class="mb-20">
        <SubTittleComponent name="EDUCATION" />
        <div
          class="lg:w-[35%] w-full bg-sky-950 hover:bg-blue-950 transition-colors ease-in-out rounded-b-xl"
        >
          <span>
            <img src="../assets//img/Telkom-University.jpg" alt="Telkom University" />
          </span>
          <div class="w-full text-white px-2 py-3">
            <a
              href="https://ittelkom-sby.ac.id/"
              target="_blank"
              class="text-xl font-semibold hover:underline cursor-pointer transition"
              >Telkom University Campus Surabaya</a
            >
            <p class="text-lg">Sep 2022 - Present</p>
            <p class="text-md italic">Bachelor;s Degree in Information Technology - S.Kom.</p>
          </div>
        </div>
      </section>

      <section class="py-10">
        <SubTittleComponent name="CERTIFICATIONS" />
        <div
          class="grid lg:grid-cols-3 pb-5 grid-cols-1 gap-8 text-slate-200 font-semibold text-xl text-center"
        >
          <span v-for="(item, index) in certificate" :key="index">
            <div
              class="relative border-4 mt-3 border-slate-200 cursor-pointer"
              @mouseover="handleHover(index, true)"
              @mouseleave="handleHover(index, false)"
            >
              <div>
                <img :src="item.img" alt="mitra pasar" class="w-full" />
              </div>
              <span
                v-if="hoverIndex === index"
                class="absolute animate-fadeout flex gap-x-3 items-center justify-center bg-black opacity-80 w-full h-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10"
              >
                <ZoomIcon @click="openModal(item)" size="1.5em" />
                <a :href="item.url" target="_blank">
                  <LinkIcon />
                </a>
                <CopyIcon @click="copyToClipBoard(item.url)" />
              </span>
            </div>
          </span>
        </div>
        <transition to="projectView">
          <ModalComponent
            name="certificate"
            :status="modalStatus"
            :data="modalContent"
            @close-modal="closeModal"
          />
        </transition>
      </section>
      <section class="py-10">
        <SubTittleComponent name="ACHIVEMENT" />
        <div
          class="grid lg:grid-cols-3 pb-5 grid-cols-1 gap-8 text-slate-200 font-semibold text-xl text-center"
        >
          <span v-for="(item, index) in achivement" :key="index">
            <div
              class="relative border-4 mt-3 border-slate-200 cursor-pointer"
              @mouseover="handleHover(index, true)"
              @mouseleave="handleHover(index, false)"
            >
              <div>
                <img :src="item.img" :alt="item.name" class="w-full" />
              </div>
              <span
                v-if="hoverIndex === index"
                class="absolute animate-fadeout flex gap-x-3 items-center justify-center bg-black opacity-80 w-full h-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10"
              >
                <ZoomIcon @click="openModal(item)" size="1.5em" />
                <a :href="item.url" target="_blank">
                  <LinkIcon />
                </a>
                <CopyIcon @click="copyToClipBoard(item.url)" />
              </span>
            </div>
          </span>
        </div>
        <transition to="projectView">
          <ModalComponent
            name="certificate"
            :status="modalStatus"
            :data="modalContent"
            @close-modal="closeModal"
          />
        </transition>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import SubTittleComponent from '../components/SubTittleComponent.vue'
import InosoftCertificate from '../assets//img/sertifikat-inosoft.jpg'
import JavascriptCertif from '../assets//img/js-certification.jpg'
import InnovillageCertification from '../assets/img/sertifikat-Innovillage.jpg'
import ModalComponent from '../components/ModalComponent.vue'
import ZoomIcon from '../components/icons/ZoomIcon.vue'
import LinkIcon from '../components/icons/LinkIcon.vue'
import CopyIcon from '../components/icons/CopyIcon.vue'

let hoverIndex = ref(null)
let modalStatus = ref(false)
let modalContent = ref(null)

const handleHover = (index, isHover) => {
  hoverIndex.value = isHover ? index : null
}

const openModal = (item) => {
  modalStatus.value = true
  modalContent.value = item
}

const closeModal = () => {
  modalStatus.value = false
  console.log(modalStatus.value)
}

const copyToClipBoard = async (url) => {
  try {
    // Copy the text inside the text field
    await navigator.clipboard.writeText(url)

    // Alert the copied text
    alert('Link copied!')
  } catch (error) {
    console.log(error)
  }
}
const certificate = [
  {
    id: 1,
    name: 'Inosoft Bootcamp',
    img: InosoftCertificate,
    url: ''
  },
  {
    id: 2,
    name: 'Javascript FreeCodeCamp',
    img: JavascriptCertif,
    url: 'https://www.freecodecamp.org/certification/fccf9986e11-1a49-43b3-98b9-c16b4dec8773/javascript-algorithms-and-data-structures'
  }
]

const achivement = [
  {
    id: 1,
    name: 'Innovillage 2023',
    img: InnovillageCertification,
    url: ''
  }
]
</script>
