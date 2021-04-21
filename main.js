const app = new Vue({
  el: '#app',
  data: {
    imgs: ['img/lake.webp', 'img/ backlight.webp', 'img/sunset.webp'],
    i: 0,
    intId: 0,
    loopTime: 2000,
  },
  created() {
    this.startLoop();
  },
  methods: {
    next() {
      // this.i = 2 ? this.i = 0 : this.i++;
      if (this.i == this.imgs.length - 1) {
        this.i = 0;
      } else {
        this.i++;
      }
    },
    prev() {
      if (this.i == 0) {
        this.i = this.imgs.length - 1;
      } else {
        this.i--;
      }
    },
    startLoop() {
      this.intId = setInterval(() => {
        this.next();
      }, this.loopTime);
    },
    stopLoop() {
      clearInterval(this.intId);
    },
  },
});
