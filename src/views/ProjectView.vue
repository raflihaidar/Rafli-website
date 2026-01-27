<template>
  <section id="project">
    <div class="w-[80%] mx-auto py-20">
      <section class="my-10">
        <subTitleComponent name="PROJECTS" />
        <div
          class="grid lg:grid-cols-3 justify-items-center pb-5 grid-cols-1 gap-8 text-slate-200 font-semibold text-xl text-center"
        >
          <figure
            v-for="(item, index) in projects"
            :key="index"
            v-motion-fade
            class="mt-3 cursor-pointer border-white/10 bg-white/10 border-[0.5px] rounded-2xl relative"
          >
            <img
              :src="item.img"
              alt="mitra pasar"
              class="w-full h-52 rounded-tr-2xl rounded-tl-2xl"
              loading="lazy"
            />
            <figcaption class="text-white w-full text-left px-2 py-3 pb-10">
              <section class="pb-5">
                <p>{{ item.name }}</p>
                <p class="text-sm mt-5">{{ item.description }}</p>
                <ul class="flex flex-wrap gap-2 text-center items-center mt-5">
                  <li
                    v-for="(value, id) in item.technologies"
                    :key="id"
                    class="text-xs border-white/10 bg-white/10 border-[0.5px] px-2 py-1 rounded-full"
                  >
                    {{ value }}
                  </li>
                </ul>
              </section>

              <footer
                class="flex justify-between items-center mt-5 absolute bottom-0 left-0 w-full p-3 border-white/10 bg-white/10 border-[0.5px] rounded-bl-2xl rounded-br-2xl"
              >
                <SocialIcon :url="item.preview" icon-name="Live Preview" class="text-sm">
                  <template #icon>
                    <LinkIcon />
                  </template>
                </SocialIcon>
                <div>
                  <p class="text-xs">{{ item.project_date }}</p>
                </div>
              </footer>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import LinkIcon from '../components/icons/LinkIcon.vue'
import subTitleComponent from '../components/BaseSubTittle.vue'
// import Ethereal from '../assets/img/Ethereal-Web.png'
// import SpendSmart from '../assets/img/spendSmart.png'
import Mahha from '../assets/img/Mahha dii Meru.webp'
import SocialIcon from '../components/BaseSocialIcon.vue'
import SSC from '../assets/img/ssc.png'
import ERP from '../assets/img/ERP_Jeans.webp'
// import gmail from '../assets/img/Gmail-clone.png'

const projects = ref([
  {
    id: 1,
    name: 'Student Service Center',
    category: 'Website',
    project_date: 'Apr 2025 - Dec 2025',
    img: SSC,
    description:
      'ticketing-based help desk system to manage and track student service requests within Telkom University Campus Surabaya’s campus environment.',
    technologies: ['Vue', 'Inertia', 'Laravel', 'Tailwind', 'Mysql', 'MongoDB'],
    repo: '',
    preview: 'https://ssc.telu-sby.id/'
  },
  {
    id: 2,
    name: 'ERP Jeans',
    category: 'Website',
    project_date: 'Feb 2024 - Aug 2025',
    img: ERP,
    description: 'an ERP system for a jeans manufacturing company',
    technologies: ['Vue', 'Vuetify', 'SCSS', 'Express', 'PostgreSQL', 'Jquery'],
    repo: 'https://github.com/raflihaidar/Etheral-company-website',
    preview: 'https://erp-dev.kingtech.site/'
  },
  {
    id: 3,
    name: 'MAHHA dii MERU',
    category: 'Website',
    project_date: 'Nov 2024 - Feb 2024',
    img: Mahha,
    description:
      'a company profile website for a resort located in Bogor to enhance online presence and brand visibility.',
    technologies: ['Vue js', 'Tailwind CSS', 'GSAP'],
    repo: '',
    preview: 'https://mahharesorts.com/'
  }
])
</script>
