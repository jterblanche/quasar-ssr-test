import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStateStore = defineStore('state', () => {
  const authenticated = ref(false);
  const isomorphicItem = ref();

  return {
    authenticated,
    isomorphicItem
  }
});
