const createApp = Vue.createApp

createApp({
  data(){
    return{
      images: [
        "img/01.webp",
        "img/02.webp",
        "img/03.webp",
        "img/04.webp",
        "img/05.webp"
      ],
      title: [
        "Spiderman",
        "Ratchet & Clank:",
        "Fortnite",
        "Stray",
        "Marvel's Avengers"
      ],
      currentIndex: 0,
    }
  },
  methods: {
    nextImage(){
      this.currentIndex++;
      console.log(this.currentIndex);
    }
  }
}).mount('#app');