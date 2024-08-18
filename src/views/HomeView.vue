<template>
  <div class="w-screen h-screen relative" id="home">
    <div
      class="w-40 h-40 z-10 md:w-48 md:h-48 rounded-full border border-opacity-30 border-white absolute -left-3 md:botom-10 md:-left-10 -top-8 md:-top-10"
    ></div>
    <div
      class="w-40 h-40 z-10 md:w-48 md:h-48 rounded-full border border-opacity-30 border-white absolute -right-10 md:botom-10 -bottom-20 md:-right-20"
    ></div>
    <main
      class="absolute md:w-[90%] w-[90%] top-1/2 max-sm:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <header class="w-full flex flex-col gap-y-5 mb-5 text-center lg:text-left">
        <section class="flex justify-between items-center gap-x-5">
          <h1
            class="text-white text-4xl md:text-6xl lg:text-9xl font-bold w-auto whitespace-nowrap"
          >
            Full-stack
          </h1>

          <div
            class="w-full flex flex-grow justify-end max-sm:justify-start gap-x-3 items-center max-sm:absolute -bottom-3"
          >
            <div
              class="w-[300px] max-sm:w-[200px] bg-white px-3 py-2 font-normal italic text-black rounded-full text-xl max-sm:text-md text-center"
            >
              <p>Projects</p>
            </div>
            <button class="bg-white rounded-full p-2 cursor-pointer">
              <Icon icon="ic:round-arrow-right-alt" width="2rem" height="2rem" />
            </button>
          </div>
        </section>

        <section class="flex lg:justify-between justify-end items-center gap-x-10">
          <article
            class="text-white max-w-[400px] max-sm:w-[90%] left-0 text-md text-left max-sm:absolute top-[45%]"
          >
            <p>
              My goal is to <span class="text-green-500 font-bold">write maintainable</span>,
              <span class="text-green-500 font-bold">clean</span>, and
              <span class="text-green-500 font-bold">understanable code</span> to process
              development was enjoyable.
            </p>
          </article>
          <h1
            class="text-white text-4xl md:text-6xl lg:text-9xl font-bold lg:self-end text-center w-auto"
          >
            Developer
          </h1>
        </section>
      </header>

      <section
        class="lg:w-full max-sm:relative -bottom-32 w-[90%] gap-x-5 flex max-sm:grid grid-cols-2 gap-y-2 lg:justify-center justify-center mt-12"
      >
        <span
          class="w-auto flex items-center gap-x-2 text-white bg-gray-800 hover:bg-green-700 transition-colors cursor-pointer rounded-full p-3"
        >
          <SocialIcon icon-name="instagram" url="mailto:www.rafli.haidar30@gmail.com">
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1rem"
                viewBox="0 0 512 512"
                fill="#fff"
              >
                <path
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>
            </template>
          </SocialIcon>
        </span>
        <span
          class="w-auto flex items-center gap-x-2 text-white bg-gray-800 hover:bg-green-700 transition-colors cursor-pointer rounded-full p-3"
        >
          <SocialIcon url="https://github.com/raflihaidar" icon-name="Github">
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 496 512"
                fill="#fff"
              >
                <path
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </template>
          </SocialIcon>
        </span>
        <span
          class="w-auto flex items-center gap-x-2 text-white bg-gray-800 hover:bg-green-700 transition-colors cursor-pointer rounded-full p-3"
        >
          <SocialIcon icon-name="LinkedIn">
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                fill="#fff"
              >
                <path
                  d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                />
              </svg>
            </template>
          </SocialIcon>
        </span>
        <span
          class="w-auto flex items-center gap-x-2 text-white bg-gray-800 hover:bg-green-700 transition-colors cursor-pointer rounded-full p-3"
        >
          <SocialIcon icon-name="Email" url="mailto:www.rafli.haidar30@gmail.com">
            <template #icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
                fill="#fff"
              >
                <path
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>
            </template>
          </SocialIcon>
        </span>
      </section>
    </main>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'
import { Icon } from '@iconify/vue'
const SocialIcon = defineAsyncComponent(() => import('../components/BaseSocialIcon.vue'))

let stringIndex = 0
let typedStatus = ref(true)
const text = ['I am a Web Developer', 'Especially a Full Stack Developer']
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
