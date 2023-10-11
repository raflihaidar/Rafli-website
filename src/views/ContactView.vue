<template>
  <main class="lg:w-[80%] w-[90%] mx-auto my-10">
    <section>
      <SubTittleComponent name="CONTACTS" />
      <div class="grid lg:grid-cols-2 gap-8 text-green-700">
        <section class="flex gap-x-5 items-center bg-sky-950 rounded-xl px-4 py-8">
          <span class="bg-slate-600 rounded-full p-4">
            <EmailIcon size="1.3" />
          </span>
          <span>
            <p class="text-xl font-bold">Email</p>
            <a href="mailto:www.rafli.haidar30@gmail.com"
              class="text-slate-200 text-lg hover:underline hover:text-green-700 transition-colors  delay-150 ">rafli.haidar30@gmail.com</a>
          </span>
        </section>
        <section class="flex gap-x-5 items-center bg-sky-950 rounded-xl px-4 py-5">
          <span class="bg-slate-600 rounded-full p-4">
            <ShareIcon size="1.3" />
          </span>
          <span>
            <p class="text-xl font-bold">Social Profiles</p>
            <span class="flex items-center gap-x-5 mt-2">
              <span class="w-auto bg-gray-800 hover:bg-green-700 transition-colors cursor-pointer rounded-full p-3">
                <InstagramIconVue />
              </span>
              <span class="w-auto bg-gray-800 hover:bg-green-700 transition-colors cursor-pointer rounded-full p-3">
                <LinkedinIcon />
              </span>
              <span class="w-auto bg-gray-800 hover:bg-green-700 transition-colors cursor-pointer rounded-full p-3">
                <GithubIconVue />
              </span>
            </span>
          </span>
        </section>
      </div>
    </section>
  </main>
</template>

<script setup>
import SubTittleComponent from '../components/SubTittleComponent.vue';
import ShareIcon from '../components/icons/ShareIcon.vue'
import EmailIcon from '../components/icons/EmailIcon.vue';
import InstagramIconVue from '../components/icons/InstagramIcon.vue';
import LinkedinIcon from '../components/icons/LinkedinIcon.vue';
import GithubIconVue from '../components/icons/GithubIcon.vue';
</script>