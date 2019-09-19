<template>
  <li :class="randomStyle" class="message-list__item sticker" v-bind:style="randomPosition" >
        <p :class="message.style.className" class="sicker__content" >{{message.text}}</p>
      <!-- <span>{{message.user.username}} : </span> -->
      <!-- <p>{{formatedTime}}</p> -->
  </li>
</template>

<script>
import moment from 'moment';
import { TweenLite } from 'gsap';
import Draggable from "gsap/Draggable"; 

export default {
    props: {
        message: {
            type: Object,
            required: true
        },
        user: {
            type: Object,
            required: true
        }
    },
    computed: {
        formatedTime() {
            return moment(this.message.created).format('LTS')
        },
        isOwner() {
            if (this.user.username == this.message.user.username) {
                return 'isOwner'
            } else {
                return ''
            }
        },
        randomPosition() {
            let transform = `translate(${this.message.style.position.x}px, ${this.message.style.position.y}px) rotate(${Math.random() * (90 + 90) - 90}deg)`

            console.log({ transform: transform });
            return { transform };
        },
        randomStyle() { 
            let classes = [
                "class1",
                "class2",
                "class3",
                "class4",
                "class5",
                "class6",
                "class7",
                "class8",
                "class9",
                "class10",
            ];

            let random = parseInt(Math.random() * classes.length);

            return classes[random];
        }
    },
    methods: {
        init() {
            console.log(this.message);
        },
        draggable() {
            Draggable.create(".sticker", {type: "x,y", edgeResistance: 1, throwProps: true, onDragEnd: (e) => { e.path[1].style.zIndex = 0 } });
        }
    },
    mounted() {
        this.init();
        this.draggable();
    }
}
</script>

<style lang="scss" >
.message-list__item {
    position: absolute;
    left: 30%;
    top: 40%;

    min-height: 100px;
}

.sticker {
    border: black 3px solid;
    background: #efefef;
    font-size: 80px;
}

.sicker__content {
    margin: 0;

    line-height: 1em;
    padding: 30px 30px;

    user-select: none;
}

.isOwner {
    color: red;
}

/* STICKER CUSTOM STYLES */



</style>