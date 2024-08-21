<!-- Template Vue -->
<template>
  <main class="w-full h-full grid lg:grid-cols-4 grid-cols-1 gap-8">
    <transition :css="false" v-for="(item, index) in skillFiltered" :key="index" name="card-skills">
      <a
        :href="item.url"
        target="_blank"
        v-motion-pop
        class="bg-sky-950 flex gap-x-3 items-center lg:hover:bg-blue-900 lg:hover:bg-opacity-50 transition-colors px-5 py-5 text-center text-slate-200 text-lg font-bold cursor-pointer"
      >
        <img :src="getImageUrl(item.image)" :alt="'image ' + item.name" class="w-8" />
        <p>{{ item.name }}</p>
      </a>
    </transition>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const skillFiltered = ref(null)
const skills = [
  {
    name: 'Javascript',
    image: 'js.png',
    url: 'https://www.javascript.com',
    category: 'language'
  },
  {
    name: 'Typescript',
    image: 'ts.png',
    url: 'https://www.javascript.com',
    category: 'language'
  },
  {
    name: 'Vue',
    image: 'vue.svg',
    url: 'https://vuejs.org/',
    category: 'language'
  },
  {
    name: 'Nuxt',
    image: 'nuxt.png',
    url: 'https://vuejs.org/',
    category: 'language'
  },
  {
    name: 'Node js',
    image: 'node js.png',
    url: 'https://vuejs.org/',
    category: 'language'
  },
  {
    name: 'Express',
    image: 'express.svg',
    url: 'https://expressjs.com/',
    category: 'language'
  },
  {
    name: 'Mysql',
    image: 'mysql.png',
    url: 'https://www.mysql.com/',
    category: 'database'
  },
  {
    name: 'Tailwind css',
    image: 'tailwind.svg',
    url: 'https://tailwindcss.com/',
    category: 'styling'
  },
  {
    name: 'Bootstrap',
    image: 'bootstrap.png',
    url: 'https://getbootstrap.com/',
    category: 'styling'
  },
  {
    name: 'Jest',
    image: 'jest.png',
    url: 'https://getbootstrap.com/',
    category: 'tools'
  },
  {
    name: 'Git',
    image: 'git.png',
    url: 'https://getbootstrap.com/',
    category: 'tools'
  },
  {
    name: 'Prisma',
    image: 'prisma.png',
    url: 'https://getbootstrap.com/',
    category: 'tools'
  },
  {
    name: 'Linux',
    image: 'linux.png',
    url: 'https://getbootstrap.com/',
    category: 'tools'
  }
]

const groupBy = (event, category) => {
  const hasClass = event.target.classList.contains('bg-green-600')
  const allButton = document.getElementById('allButton')
  console.log(hasClass)
  if (!hasClass && event.target.tagName === 'BUTTON') {
    allButton.classList.remove('bg-green-600')
    allButton.classList.add('bg-white', 'bg-opacity-10')
  }
  if (category) {
    skillFiltered.value = skills.filter((value) => value.category === category)
  } else {
    skillFiltered.value = skills
  }
}

const getImageUrl = (name) => {
  return new URL(`../assets/img/${name}`, import.meta.url).href
}

onMounted(() => {
  skillFiltered.value = skills
})
</script>

<style scoped>
.card-skills-leave-active .card-skills-enter-active {
  transition: transform 0.5s ease;
}

.card-skills-leave-from .card-skills-enter-to {
  transform: scale(1);
  opacity: 1;
}

.card-skills-leave-to .card-skills-enter-from {
  transform: scale(0);
  opacity: 0;
}
</style>
