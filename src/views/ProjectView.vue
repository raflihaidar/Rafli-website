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
            class="border border-gray-100 mt-3 cursor-pointer bg-slate-900 rounded-2xl relative"
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
                <ul class="flex flex-wrap gap-2 text-center items-center mt-2">
                  <li
                    v-for="(value, id) in item.technologies"
                    :key="id"
                    class="text-xs bg-blue-900 px-2 py-1 rounded-full"
                  >
                    {{ value }}
                  </li>
                </ul>
              </section>

              <footer
                class="flex justify-between items-center mt-5 absolute bottom-0 left-0 w-full px-2 py-3 bg-slate-900 rounded-bl-2xl rounded-br-2xl"
              >
                <SocialIcon :url="item.preview" icon-name="Live Preview" class="text-sm">
                  <template #icon>
                    <LinkIcon />
                  </template>
                </SocialIcon>
                <SocialIcon :url="item.repo" icon-name="View Code" class="text-sm">
                  <template #icon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1.2rem"
                      viewBox="0 0 496 512"
                      fill="#fff"
                    >
                      <path
                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                      /></svg
                  ></template>
                </SocialIcon>
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
import Ethereal from '../assets/img/Ethereal-Web.png'
import SpendSmart from '../assets/img/spendSmart.png'
import SocialIcon from '../components/BaseSocialIcon.vue'
import gmail from '../assets/img/Gmail-clone.png'

const projects = ref([
  {
    id: 1,
    name: 'SpendSmart',
    category: 'Website',
    project_date: 'February 2024 - present',
    img: SpendSmart,
    description:
      "a website as a tool used to record and track one's financial expenses and one's financial income and expenses.",
    technologies: ['Nuxt', 'Vue', 'Typescript', 'TiDB', 'Prisma ORM', 'Mysql'],
    repo: 'https://github.com/raflihaidar/SpendSmart',
    preview: 'https://spend-smart-one.vercel.app/'
  },
  {
    id: 2,
    name: 'Ethereal Photograpy',
    category: 'Website',
    project_date: 'February 2024 - present',
    img: Ethereal,
    description:
      "a website as a tool used to record and track one's financial expenses and one's financial income and expenses.",
    technologies: ['HTML', 'CSS', 'JavaScrpt', 'Jquery'],
    repo: 'https://github.com/raflihaidar/Etheral-company-website',
    preview: ''
  },
  {
    id: 2,
    name: 'Gmail Clone',
    category: 'Website',
    project_date: 'September 2023',
    img: gmail,
    description:
      'Web email that adapts Gmail features such as real-time inbox, logging in with a Google account, and etc.',
    technologies: ['Vue js', 'Firebase', 'Google auth library', 'Tailwind css'],
    repo: 'https://github.com/raflihaidar/gmail-clone',
    preview: 'https://gmail-clone-mauve.vercel.app/'
  }
])
</script>
