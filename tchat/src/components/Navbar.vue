<template>
  <div class="navbar">
      <span class="navbar__item">
          STICK
      </span>
  </div>
</template>

<script>
import { TweenLite } from 'gsap';

export default {
    methods: {
        init() {
          this.elements = [];
          this.elements.push(this.$el.querySelector('.navbar__item')); 
          this.delta = 0; 
        },
        createElements() {
            let v = {
                w: window.innerWidth,
                h: window.innerHeight
            }

            let model = this.$el.querySelector('.navbar__item');
            let modelSize = model.getBoundingClientRect().width;

            let item = this.createElement();

            let amount = Math.ceil(v.w / modelSize);
            console.log(amount);

            for (let i = 0; i <= amount; i++) {
                let clone = item.cloneNode(true);
                document.querySelector('.navbar').appendChild(clone);
                this.elements.push(clone);
            }
        },
        createElement() {
            let item = document.createElement('span');
            item.innerHTML = 'STICK';
            item.setAttribute('class', 'navbar__item');

            return item;
        }
    },  
    mounted() {
        this.init();
        this.createElements();
    }
}
</script>

<style lang="scss">
    .navbar {
        position: absolute;
        left: 0;
        top: 0;

        width: 100%;
        height: 100px;

        background-color: black;

        text-align: left;

        display: flex;
        flex-wrap: nowrap;

        z-index: 1;
    }

    .navbar__item {
        display: inline;

        padding-right: 10px;

        white-space: nowrap;

        text-transform: uppercase;
        color: white;
        font-size: 90px;
    }
</style>