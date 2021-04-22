const app = new Vue({
  el: '#app',
  data: {
    imgs: ['img/lake.webp', 'img/ backlight.webp', 'img/sunset.webp'],
    i: 0,
    intId: 0,
    loopTime: 2000,
  },
  mounted() {
    this.startLoop();
  },
  methods: {
    next() {
      this.i == this.imgs.length - 1 ? (this.i = 0) : this.i++;
    },
    prev() {
      this.i == 0 ? (this.i = this.imgs.length - 1) : this.i--;
    },
    startLoop() {
      this.$refs.root.blur();
      this.intId = setInterval(() => {
        this.next();
      }, this.loopTime);
    },
    stopLoop() {
      clearInterval(this.intId);
      this.$refs.root.focus();
    },
  },
});
