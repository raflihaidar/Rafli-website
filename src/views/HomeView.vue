<template>
  <div class="bg-slate-950 w-full h-screen">
    <main
      class="absolute w-[80%] top-[50%] left-[50%] lg:text-left text-center -translate-x-[50%] -translate-y-[50%]"
    >
      <section class="lg:w-[50%]" v-motion-fade>
        <p
          class="lg:text-5xl text-3xl font-bold text-slate-200 hover:underline transition cursor-pointer"
        >
          Rafli Haidar Nashif
        </p>
      </section>
      <section class="my-10" v-motion-fade>
        <p class="text-2xl text-slate-200 font-bold">Hi, Folks!</p>
        <span class="lg:text-2xl text-xl text-green-700 font-bold">{{ description }}</span>
        <span
          class="w-[3px] ml-[4px] inline-block bg-white"
          :class="!typedStatus ? 'animate-blink' : ''"
          >&nbsp;</span
        >
      </section>
      <section class="lg:w-[15%] gap-x-5 flex lg:justify-between justify-center my-10">
        <span
          class="w-auto bg-gray-800 hover:bg-green-700 transition-colors cursor-pointer rounded-full p-3"
        >
          <InstagramIcon />
        </span>
        <span
          class="w-auto bg-gray-800 hover:bg-green-700 transition-colors cursor-pointer rounded-full p-3"
        >
          <GithubIcon url="https://github.com/raflihaidar" size="1em" />
        </span>
        <span
          class="w-auto bg-gray-800 hover:bg-green-700 transition-colors cursor-pointer rounded-full p-3"
        >
          <LinkedinIcon />
        </span>
        <span
          class="w-auto bg-gray-800 hover:bg-green-700 transition-colors cursor-pointer rounded-full p-3"
        >
          <EmailIcon size="1" />
        </span>
      </section>
    </main>
    <footer
      class="absolute bottom-2 bg-inherit left-2/4 text-center -translate-x-[50%] -translate-y-[50%]"
    >
      <FooterComponent />
    </footer>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'
const InstagramIcon = defineAsyncComponent(() => import('../components/icons/InstagramIcon.vue'))
const GithubIcon = defineAsyncComponent(() => import('../components/icons/GithubIcon.vue'))
const LinkedinIcon = defineAsyncComponent(() => import('../components/icons/LinkedinIcon.vue'))
const EmailIcon = defineAsyncComponent(() => import('../components/icons/EmailIcon.vue'))
const FooterComponent = defineAsyncComponent(() => import('../components/FooterComponent.vue'))

let stringIndex = 0
let typedStatus = ref(true)
const text = ['I am a Web Developer', 'Especially a Front end Developer']
let arrIndex = 0
let description = ref('')

const typedText = () => {
  if (stringIndex < text[arrIndex].length) {
    description.value += text[arrIndex].charAt(stringIndex)
    stringIndex += 1
    setTimeout(typedText, 100)
  } else {
    typedStatus.value = false
    setTimeout(eraseText, 2000)
  }
}

const eraseText = () => {
  typedStatus.value = true
  if (typedStatus.value && description.value != '') {
    description.value = description.value.substring(0, stringIndex - 1)
    stringIndex--
    setTimeout(eraseText, 100)
  } else {
    arrIndex = (arrIndex + 1) % text.length
    setTimeout(typedText, 100)
  }
}

typedText()
</script>
