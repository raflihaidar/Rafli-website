<template>
  <div
    class="bg-black w-full h-full font-display2 selection:bg-green-700 scroll-smooth overflow-x-hidden"
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
import BaseNavbar from './components/BaseNavbar.vue'
import BaseFooter from './components/BaseFooter.vue'
import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import EducationView from './views/EducationView.vue'
import ExperienceView from './views/ExperienceView.vue'
import ProjectView from './views/ProjectView.vue'
</script>
