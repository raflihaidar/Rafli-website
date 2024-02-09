<template>
  <section
    class="text-white flex font-semibold lg:justify-center justify-start gap-x-5 my-10 overflow-x-scroll lg:w-full w-[80%] mx-auto">
    <button id="allButton"
      class="bg-green-600 focus:bg-green-600 hover:bg-green-600  z-0 py-2 px-3 rounded-md cursor-pointer"
      ref="allSelected" @click="groupBy($event)">
      All
    </button>
    <button class="bg-white bg-opacity-10 focus:bg-green-600 hover:bg-green-600 py-2 px-3 rounded-md cursor-pointer"
      @click="groupBy($event, 'language')">
      Language
    </button>
    <button class="bg-white bg-opacity-10 focus:bg-green-600 hover:bg-green-600 py-2 px-3 rounded-md cursor-pointer"
      @click="groupBy($event, 'database')">
      Database
    </button>
    <button class="bg-white bg-opacity-10 focus:bg-green-600 hover:bg-green-600 py-2 px-3 rounded-md cursor-pointer"
      @click="groupBy($event, 'styling')">
      Styling
    </button>
    <button class="bg-white bg-opacity-10 focus:bg-green-600 hover:bg-green-600 py-2 px-3 rounded-md cursor-pointer"
      @click="groupBy($event, 'tools')">
      Tools
    </button>
  </section>
  <main class="w-full h-full grid lg:grid-cols-4 grid-cols-1 gap-8">
    <transition :css="false" v-for="(item, index) in skillFiltered" :key=index name="card-skills">
      <a :href="item.url" target="_blank" v-motion-pop
        class="bg-sky-950 flex gap-x-3 items-center lg:hover:bg-blue-900 lg:hover:bg-opacity-50 transition-colors  px-5 py-5 text-center text-slate-200 text-lg font-bold cursor-pointer">
        <img :src='getImageUrl(item.image)' :alt="'image ' + item.name" class="w-8">
        <p>{{ item.name }}</p>
      </a>
    </transition>
  </main>
</template>

<script setup>
import { onMounted, ref } from "vue"

const allSelected = ref(null)
const skillFiltered = ref(null)
const skills = [
  {
    name: "Javascript",
    image: "js.png",
    url: "https://www.javascript.com",
    category: "language",
  },
  {
    name: "Typescript",
    image: "ts.png",
    url: "https://www.javascript.com",
    category: "language",
  },

  {
    name: "Vue",
    image: 'vue.svg',
    url: "https://vuejs.org/",
    category: "language",
  },
  {
    name: "Node js",
    image: 'node js.png',
    url: "https://vuejs.org/",
    category: "language",
  },
  {
    name: 'Express',
    image: 'express.png',
    url: "https://expressjs.com/",
    category: "language",
  },
  {
    name: "C++",
    image: "c++.png",
    url: "",
    category: "language",
  },
  {
    name: "Java",
    image: "java.png",
    url: "",
    category: "language",
  },
  {
    name: 'Mysql',
    image: 'mysql.png',
    url: "https://www.mysql.com/",
    category: "database",
  },
  {
    name: 'MongoDB',
    image: 'mongodb.png',
    url: "https://www.mysql.com/",
    category: "database"
  },
  {
    name: 'Tailwind css',
    image: 'tailwind.svg',
    url: "https://tailwindcss.com/",
    category: "styling",
  },
  {
    name: 'Bootstrap',
    image: 'bootstrap.png',
    url: "https://getbootstrap.com/",
    category: "styling",
  },
  {
    name: 'Jest',
    image: 'jest.png',
    url: "https://getbootstrap.com/",
    category: "tools",
  },
  {
    name: 'Pinia',
    image: 'pinia.svg',
    url: "https://getbootstrap.com/",
    category: "tools",
  },
  {
    name: 'Github',
    image: 'github.png',
    url: "https://getbootstrap.com/",
    category: "tools",
  },
  {
    name: 'Git',
    image: 'git.png',
    url: "https://getbootstrap.com/",
    category: "tools",
  },
  {
    name: 'Postman',
    image: 'postman.png',
    url: "https://getbootstrap.com/",
    category: "tools",
  }
]

const groupBy = (event, category) => {
  const hasClass = event.target.classList.contains('bg-green-600')
  const allButton = document.getElementById('allButton')
  console.log(hasClass)
  if (!hasClass && event.target.tagName === 'BUTTON') {
    allButton.classList.remove('bg-green-600')
    allButton.classList.add("bg-white", "bg-opacity-10")
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

<style>
.card-skills-leave-active .card-skills-enter-active {
  transition: transform 0.5s ease;
}

.card-skills-leave-from .card-skills-enter-to {
  transform: scale(1);
  opacity: 1,
}

.card-skills-leave-to .card-skills-enter-from {
  transform: scale(0);
  opacity: 0,
}
</style>
