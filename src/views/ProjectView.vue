<template>
  <main class="w-full bg-slate-950" id="projectView">
    <div class="w-[80%] mx-auto my-10">
      <section>
        <subTitleComponent name="PROJECTS" />
        <div
          class="grid lg:grid-cols-3 pb-5 grid-cols-1 gap-8 text-slate-200 font-semibold text-xl text-center"
        >
          <span v-for="(item, index) in projects" :key="index">
            <p>{{ item.name }}</p>
            <div
              class="relative border-4 mt-3 border-slate-200 cursor-pointer"
              @mouseover="handleHover(index, true)"
              @mouseleave="handleHover(index, false)"
            >
              <div>
                <img :src="item.img" alt="mitra pasar" class="w-full h-40" />
              </div>
              <span
                v-if="hoverIndex === index"
                class="absolute animate-fadeout flex gap-x-3 items-center justify-center bg-black opacity-80 w-full h-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10"
              >
                <InformationIcon @click="openModal(item.id)" size="1.5em" />
              </span>
            </div>
          </span>
        </div>
        <transition to="projectView">
          <ModalComponent
            :status="modalStatus"
            :data="projects"
            :currentIndex="currentIndex"
            @nextSlide="currentIndex++"
            @prevSlide="currentIndex--"
            @close-modal="closeModal"
          />
        </transition>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import subTitleComponent from '../components/SubTittleComponent.vue'
import InformationIcon from '../components/icons/InformationIcon.vue'
import ModalComponent from '../components/ModalComponent.vue'
import Super_hotel from '../assets/img/super_hotel.jpg'
import Simag from '../assets/img/simag.jpg'
import MitraPasar from '../assets/img/Mitra_Pasar.jpg'
import ExpenseTracker from '../assets/img/Expense_Tracker.png'
import SSC from '../assets/img/Web_SSC.jpg'
import gmail from '../assets/img/gmail.jpg'

const projects = ref([
  {
    id: 1,
    name: 'Mitra Pasar',
    category: 'Website',
    project_date: 'April 2023 - October 2023',
    img: MitraPasar,
    description:
      'Pasar Mitra is an e-commerce platform that is used to advance traditional markets and local MSMEs. Where e-commerce sells products and adapts activities that exist in traditional markets.',
    technologies: ['Vue js', 'Express js', 'Mysql', 'Pinia', 'Google auth library', 'Tailwind css'],
    url: 'https://github.com/raflihaidar/Mitra-Pasar'
  },
  {
    id: 2,
    name: 'Student Service Center',
    category: 'Website',
    project_date: 'April 2023',
    img: SSC,
    description:
      'This platform is used as a place for students to get information about the services provided by the Telkom Surabaya IT Student Service Center.',
    technologies: ['Vue js', 'Vuex', 'Tailwind css'],
    url: 'https://github.com/raflihaidar/Web-SSC'
  },
  {
    id: 3,
    name: 'Gmail Clone',
    category: 'Website',
    project_date: 'September 2023',
    img: gmail,
    description:
      'Web email that adapts Gmail features such as real-time inbox, logging in with a Google account, and etc.',
    technologies: ['Vue js', 'Firebase', 'Google auth library', 'Tailwind css'],
    url: 'https://github.com/raflihaidar/gmail-clone'
  },
  {
    id: 4,
    name: 'SIMAG',
    category: 'Desktop',
    project_date: 'November 2023 - December 2023',
    img: Simag,
    description:
      'SIMAG is a desktop application designed to help manage and optimize the operations of a warehouse. By using this application, users can easily track and manage the inventory of goods in the warehouse.',
    technologies: ['Java', 'SQLite', 'GUI'],
    url: 'https://github.com/raflihaidar/Aplikasi-Pergudangan'
  },
  {
    id: 5,
    name: 'Super Hotel',
    category: 'Website',
    project_date: 'December 2023 - January 2023',
    img: Super_hotel,
    description:
      'Web email that adapts Gmail features such as real-time inbox, logging in with a Google account, and etc.',
    technologies: ['Vue js', 'Pinia', 'Laravel', 'Flowbite', 'Mysql', 'Tailwind CSS'],
    url: 'https://github.com/raflihaidar/Super-Hotel'
  },
  {
    id: 6,
    name: 'SpendSmart',
    category: 'Website',
    project_date: 'February 2024 - present',
    img: ExpenseTracker,
    description:
      "a website as a tool used to record and track one's financial expenses and one's financial income and expenses.",
    technologies: ['Vue', 'Typescript', 'Express', 'Prisma ORM', 'Mysql'],
    url: 'https://github.com/raflihaidar/expense-tracker-app'
  }
])

let hoverIndex = ref(null)
let modalStatus = ref(false)
let currentIndex = ref(0)

const handleHover = (index, isHover) => {
  hoverIndex.value = isHover ? index : null
}

const openModal = (id) => {
  modalStatus.value = true
  currentIndex.value = id
}

const closeModal = () => {
  modalStatus.value = false
}
</script>
