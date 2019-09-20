<template>
  <div class="message-box">
        <div class="indications">
            Type your message
        </div>
        <form action="" @submit.prevent="onFormSubmit">
            <input v-on:input="onInputHandler" v-on:blur="focusOnInput" type="text" class="sticker__content" placeholder="Your Message" v-model="message" :class="className">
        </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            className: '',
        }
    },
    methods: {
        onFormSubmit() {
            this.$emit('messageSent', this.message);
            this.message = '';
            this.removeClass();
        },
        onInputHandler(e) {
            this.randomStyle();
            this.updateStyle(e);
            this.$el.querySelector('.indications').style.display = 'none';
        },
        randomStyle() {
            if(this.className != '') return;

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
                "class10"
            ];

            let random = parseInt(Math.random() * classes.length);
            this.className = classes[random];

            console.log(classes[random]);
            return classes[random];
        },
        updateStyle(e) {
            if (this.$el.querySelector('input').value == '') {
                let currentClassList = this.$el.querySelector('input').classList;
                for (let i = 0; i < currentClassList.length; i++) {
                    if (new RegExp('class').test(currentClassList[i])) {
                        this.$el.querySelector('input').classList.remove(currentClassList[i]);
                        this.className = '';
                    };
                }
            }
        },
        removeClass() {
            let currentClassList = this.$el.querySelector('input').classList;
            for (let i = 0; i < currentClassList.length; i++) {
                if (new RegExp('class').test(currentClassList[i])) {
                    this.$el.querySelector('input').classList.remove(currentClassList[i]);
                    this.className = '';
                };
            }
        },
        focusOnInput() {
            this.$el.querySelector('input').focus();
        },
        setupEventListener() {
            window.addEventListener('keydown', (e) => {
                if (this.$el.querySelector('input').value != '') {
                    if (e.key === 'ArrowDown') {
                        this.removeClass();
                        this.className = '';
                        this.randomStyle();
                    } else if (e.key === 'ArrowUp') {
                        this.removeClass();
                        this.className = '';
                        this.randomStyle();
                    }
                }
            }); 
        }
    },
    mounted() {
        this.setupEventListener();
        this.focusOnInput();
    },
}

</script>

<style lang="scss" scoped>
    input {
        position: absolute;
        left: 50%;
        top: 50%;

        transform: translate(-50%, -50%);

        width: auto;

        text-align: center;
        font-size: 100px;

        background-color: transparent;
        border: none;
        outline: none;

        caret-color: transparent;
        pointer-events: none;

        &::placeholder {
            color: transparent;
        }
    }

    .class1, .class2, .class3, .class4, 
    .class5, .class6, .class7, .class8, 
    .class9, .class10 {
        // margin: 0 auto;

        border: black 3px solid;  
        background: #EFEFEF;  
        // font-size: 80px;

        // line-height: 1em;
        // padding: 30px 30px;

        transform: translate(-50%, -50%) rotate(-5deg);
    }

    .class1 {
        background-color: #9D0B0E;
        border: white 4px solid;
    }

    .class2 {
        color: #0D00FF;
    }


    .class3 {
        background-color: black;
        color: red; 
    }

    .class4 {
        border: #317E60 5px solid;
    }

    .class5 {
    }

    .class6 {
        background-color: black;
        color: #D21E1E;
    }

    .class7 {
        background: #00EBFD;
    }

    .class8 {
        border: black 2px dashed;
    }

    .class9 {
        background: #FF4900;
    }

    .class10 {
        background: #FF6281;
        border-color: #01FE6F;
    }
    
    .indications {
        position: absolute;
        left: 50%;
        top: 50%;

        font-size: 20px;

        transform: translate(-50%, -50%);

        font-family: 'Pilat Extended';
        font-weight: bold;

        color: white;
        text-shadow: 1px 1px 1px black; 
        -webkit-text-stroke: black 1px solid; 

        animation: blink .3s infinite ;
    }

    @keyframes blink {
        0% {
            opacity: 0;
        };
        100% {
            opacity: 1;
        }
    }
</style>