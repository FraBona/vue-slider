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
      index: 0,
      time: true,
    }
  },
  methods: {
    nextImage(){
      this.currentIndex++;
      if(this.currentIndex > (this.images.length - 1)){
        this.currentIndex = 0;
      } 
      this.autoplay();
    },
    prevImage(){
      this.currentIndex--;
      if(this.currentIndex < 0){
        this.currentIndex = (this.images.length - 1);
      }
    },
    takeImage(thumbIndex){
      this.currentIndex = thumbIndex;
    },
    autoplay(){
      if (this.time === true){
        this.time = setInterval(() => {
          this.nextImage();
       }, 1000)
      }
    },
    stopPlay(){
      clearInterval(this.time);
    }
  }
}).mount('#app');