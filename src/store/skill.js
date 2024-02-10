import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSkillStore = defineStore('Skill', () => {
  const skill = ref('HTML')

  return {
    skill
  }
})
