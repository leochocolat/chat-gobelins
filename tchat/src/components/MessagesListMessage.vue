<template>
  <li :class="message.style.className" class="message-list__item sticker" v-bind:style="randomPosition" >
        <p :class="isOwner" class="sticker__content" >{{message.text}}</p>
        <span class="sticker__username">@{{message.user.username}}</span>
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

            return { transform };
        }
    },
    methods: {
        init() {
            
        },
        draggable() {
            Draggable.create(".sticker", {type: "x,y", edgeResistance: 1, throwProps: true, onClick: (e) => { e.path[1].style.zIndex = 0 }, onDragEnd: (e) => { e.path[1].style.zIndex = 0 } });
        },
        removeZIndex(e) {
            console.log(e.srcElement);
            e.srcElement.style.zIndex = 0.
        }
    },
    mounted() {
        this.init();
        this.draggable();
    }
}
</script>

<style lang="scss">
.message-list__item {
    position: absolute;
    left: 30%;
    top: 40%;
}

.sticker {
    border: black 3px solid;
    background: #efefef;

    font-size: 80px;
}

.sticker__username {
    position: absolute;
    left: 30px;
    bottom: 12px;

    font-size: 14px;
}

.sicker__content {
    margin: 0;

    line-height: 1em;
    padding: 30px 30px;

    user-select: none;
}

.isOwner {
    // color: red;
}

/* STICKER CUSTOM STYLES */



</style>