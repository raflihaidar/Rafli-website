<!-- Template Vue -->
<template>
  <main class="w-full h-full grid lg:grid-cols-4 grid-cols-2 gap-5 text-sm">
    <transition :css="false" v-for="(item, index) in skillFiltered" :key="index" name="card-skills">
      <a
        :href="item.url"
        target="_blank"
        v-motion-pop
        class="text-white border-[0.5px] flex items-center gap-x-3 shadow-lg cursor-pointer hover:scale-105 transition-transform rounded-xl border-white/10 bg-white/10 px-5 py-3"
      >
        <Icon :icon="item.icon" class="size-5" />
        <p>{{ item.name }}</p>
      </a>
    </transition>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Icon } from '@iconify/vue'
const skillFiltered = ref(null)
const skills = [
  {
    name: 'Javascript',
    icon: 'logos:javascript',
    url: 'https://www.javascript.com',
    category: 'language'
  },
  {
    name: 'Typescript',
    icon: 'logos:typescript-icon',
    url: 'https://www.javascript.com',
    category: 'language'
  },
  {
    name: 'Vue',
    icon: 'logos:vue',
    url: 'https://vuejs.org/',
    category: 'language'
  },
  {
    name: 'Nuxt',
    icon: 'logos:nuxt-icon',
    url: 'https://vuejs.org/',
    category: 'language'
  },
  {
    name: 'Node js',
    icon: 'logos:nodejs-icon',
    url: 'https://vuejs.org/',
    category: 'language'
  },
  {
    name: 'Express',
    icon: 'skill-icons:expressjs-light',
    url: 'https://expressjs.com/',
    category: 'language'
  },
  {
    name: 'Laravel',
    icon: 'logos:laravel',
    url: 'https://expressjs.com/',
    category: 'language'
  },
  {
    name: 'Mysql',
    icon: 'skill-icons:mysql-light',
    url: 'https://www.mysql.com/',
    category: 'database'
  },
  {
    name: 'MongoDB',
    icon: 'skill-icons:mongodb',
    url: 'https://www.mysql.com/',
    category: 'database'
  },
  {
    name: 'Tailwind',
    icon: 'vscode-icons:file-type-tailwind',
    url: 'https://tailwindcss.com/',
    category: 'styling'
  },
  {
    name: 'Bootstrap',
    icon: 'logos:bootstrap',
    url: 'https://getbootstrap.com/',
    category: 'styling'
  },
  {
    name: 'Jest',
    icon: 'logos:jest',
    url: 'https://getbootstrap.com/',
    category: 'tools'
  },
  {
    name: 'Git',
    icon: 'logos:git-icon',
    url: 'https://getbootstrap.com/',
    category: 'tools'
  },
  {
    name: 'Prisma',
    icon: 'vscode-icons:file-type-prisma',
    url: 'https://getbootstrap.com/',
    category: 'tools'
  },
  {
    name: 'Linux',
    icon: 'flat-color-icons:linux',
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
