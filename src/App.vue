<template>
  <div
    class="bg-base w-full h-full font-display2 selection:bg-green-700 scroll-smooth overflow-x-hidden"
    ref="container"
    data-scroll-container
  >
    <BaseNavbar />
    <header>
      <HomeView />
    </header>
    <main>
      <AboutView />
      <EducationView />
      <ExperienceView />
      <ProjectView />
    </main>
    <BaseFooter />
  </div>
</template>

<script setup>
import LocomotiveScroll from 'locomotive-scroll'
import BaseNavbar from './components/BaseNavbar.vue'
import BaseFooter from './components/BaseFooter.vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import EducationView from './views/EducationView.vue'
import ExperienceView from './views/ExperienceView.vue'
import ProjectView from './views/ProjectView.vue'
import { onMounted } from 'vue'

onMounted(() => {
  new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.05,
    multiplier: 1.5,
    reloadOnContextChange: true,
    touchMultiplier: 1.5,
    smoothMobile: 0,
    smartphone: {
      smooth: false,
      breakpoint: 767
    },
    tablet: {
      smooth: false,
      breakpoint: 1024
    }
  })
})
</script>
