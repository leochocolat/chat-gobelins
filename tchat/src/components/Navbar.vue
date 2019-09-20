<template>
  <div class="navbar">
      <div class="navbar__item-container">
          <span class="navbar__item">STICK</span>
      </div>
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
        animate() {
            let scrollDiv = document.querySelector('.navbar');
            let content = scrollDiv.querySelector('.navbar__item-container');
            console.log(scrollDiv, content, span);
            let span = content.querySelector('.navbar__item');
            let i;
            let spanCloned;
            let contentCloned;


            for (i = 0; i < 20; i += 1) {
                spanCloned = span.cloneNode(true);
                content.appendChild(spanCloned);
            }
            contentCloned = content.cloneNode(true);
            scrollDiv.appendChild(contentCloned);
            TweenMax.to('.navbar__item-container', 20, { x: -content.offsetWidth, repeat:-1, ease:Linear.easeNone });
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
        this.animate();
        // this.createElements();
    }
}
</script>

<style lang="scss">
    .navbar {
        position: absolute;
        left: 0;
        top: 0;

        width: 100%;

        background-color: black;

        text-align: left;
        font-family: 'GoboldBold';

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
        font-size: 80px;
        line-height: 1.2em;
    }
</style>