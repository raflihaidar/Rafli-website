<template>
  <div id="education">
    <div class="w-[80%] mx-auto py-20">
      <section class="my-20">
        <SubTittleComponent name="EDUCATION" />
        <figure
          v-motion-pop
          class="lg:w-[35%] text-white w-full bg-sky-950 hover:bg-blue-950 transition-colors ease-in-out rounded-b-xl"
        >
          <img src="../assets//img/Telkom-University.jpg" alt="Telkom University" />
          <figcaption class="w-full text-whites px-3 py-2 grid">
            <a
              href="https://ittelkom-sby.ac.id/"
              target="_blank"
              class="text-xl font-semibold hover:underline cursor-pointer transition"
              >Telkom University Campus Surabaya</a
            >
            <p class="text-lg">Sep 2022 - Present</p>
            <p class="text-md italic">Bachelor;s Degree in Information Technology - S.Kom</p>
          </figcaption>
        </figure>
      </section>

      <section class="py-10">
        <SubTittleComponent name="CERTIFICATIONS & AWARDS" />
        <div
          class="w-full grid lg:grid-cols-3 pb-5 grid-cols-1 gap-8 text-slate-200 font-semibold text-xl text-center"
        >
          <span v-for="(item, index) in certificate" :key="index">
            <div
              v-motion-pop-visible
              class="relative border-4 mt-3 border-slate-200 cursor-pointer w-full"
              @mouseover="item.isHover = true"
              @mouseleave="item.isHover = false"
            >
              <div>
                <img :src="item.img" :alt="item.name" class="w-full h-56" />
              </div>
              <span
                v-if="item.isHover"
                class="absolute animate-fadeout flex gap-x-3 items-center justify-center bg-black opacity-80 w-full h-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10"
              >
                <ZoomIcon @click="openModal(item.id)" size="1.5em" />
                <a :href="item.url" target="_blank" v-show="item.url">
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
            :data="certificate"
            :currentIndex="currentIndex"
            @nextSlide="currentIndex++"
            @prevSlide="currentIndex--"
            @close-modal="closeModal"
          />
        </transition>
      </section>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'
const SubTittleComponent = defineAsyncComponent(() => import('../components/BaseSubTittle.vue'))
const ModalComponent = defineAsyncComponent(() => import('../components/BaseModal.vue'))
const ZoomIcon = defineAsyncComponent(() => import('../components/icons/ZoomIcon.vue'))
const LinkIcon = defineAsyncComponent(() => import('../components/icons/LinkIcon.vue'))
const CopyIcon = defineAsyncComponent(() => import('../components/icons/CopyIcon.vue'))
import InosoftCertificate from '../assets//img/sertifikat-inosoft.jpg'
import JavascriptCertif from '../assets//img/js-certification.jpg'
import InnovillageCertification from '../assets/img/sertifikat-Innovillage.jpg'
import LuarSekolahCertificate from '../assets/img/sertif-luarsekolah.jpg'
import FapertaFairCertificate from '../assets/img/sertif-fapertafair.png'
let modalStatus = ref(false)
let currentIndex = ref(0)

const openModal = (id) => {
  modalStatus.value = true
  currentIndex.value = id
}

const closeModal = () => {
  modalStatus.value = false
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

const certificate = ref([
  {
    id: 1,
    name: 'Inosoft Bootcamp',
    img: InosoftCertificate,
    url: '',
    isHover: false
  },
  {
    id: 2,
    name: 'Javascript FreeCodeCamp',
    img: JavascriptCertif,
    url: 'https://www.freecodecamp.org/certification/fccf9986e11-1a49-43b3-98b9-c16b4dec8773/javascript-algorithms-and-data-structures',
    isHover: false
  },
  {
    id: 3,
    name: 'Innovillage 2023',
    img: InnovillageCertification,
    url: '',
    isHover: false
  },
  {
    id: 4,
    name: 'Web Developer Internship',
    img: LuarSekolahCertificate,
    url: '',
    isHover: false
  },
  {
    id: 5,
    name: 'Finalist Essay Faperta Fair Batch 6',
    img: FapertaFairCertificate,
    url: '',
    isHover: false
  }
])
</script>
