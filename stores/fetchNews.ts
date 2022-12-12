import { defineStore } from 'pinia';

export const useFetchNewsStore = defineStore('news', {
  state: () => ({
    newsList: [
      {
        albumId: 0,
        id: 0,
        title: '',
        url: '',
        thumbnailUrl: '',
      },
    ],
  }),
  getters: {
    shortNewsList: (state) => state.newsList.slice(0, 10),
  },
  actions: {
    async fetchNews() {
      const url = 'https://jsonplaceholder.typicode.com/photos';

      interface photo {
        albumId: number;
        id: number;
        title: string;
        url: string;
        thumbnailUrl: string;
      }

      const data = await $fetch<photo[]>(url, { method: 'GET' }).catch(
        (error) => console.log(error.data)
      );

      if (data && data.length > 0) this.newsList = data;
    },
  },
});
