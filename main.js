const app = new Vue({
  el: '#app',
  data: {
    imgs: ['img/lake.webp', 'img/ backlight.webp', 'img/sunset.webp'],
    i: 0,
  },
  createtd() {},
  methods: {
    next() {
      // this.i = 2 ? this.i = 0 : this.i++;
      console.log(this.i);
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
  },
});
