const createApp = Vue.createApp

createApp({
  data(){
    return{
      slides: [
        {
          images: "img/01.webp",
          title: "spiderman",
        },
        {
          images: "img/02.webp",
          title: "spiderman",
        },
        {
          images: "img/03.webp",
          title: "spiderman",
        },
        {
          images: "img/04.webp",
          title: "spiderman",
        },
        {
          images: "img/05.webp",
          title: "spiderman",
        }
      ],
      currentIndex: 0,
      index: 0,
      time: true,
    }
  },
  methods: {
    nextImage(){
      this.currentIndex++;
      if(this.currentIndex > (this.slides.length - 1)){
        this.currentIndex = 0;
      } 
      this.autoplay();
    },
    prevImage(){
      this.currentIndex--;
      if(this.currentIndex < 0){
        this.currentIndex = (this.slides.length - 1);
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
      this.time = false;
    }
  }
}).mount('#app');