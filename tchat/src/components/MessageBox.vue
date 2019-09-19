<template>
  <div>
      <form action="" @submit.prevent="onFormSubmit">
          <input v-on:input="onInputHandler" type="text" class="Hello" placeholder="Your Message" v-model="message" :class="className">
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
                "class10",
            ];

            let random = parseInt(Math.random() * classes.length);

            this.className = classes[random];
            return classes[random];
        },
        updateStyle(e) {
            if (this.$el.querySelector('input').value == '') {
                let currentClassList = this.$el.querySelector('input').classList;
                console.log(currentClassList);
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
        }
    },
    computed: {
            
    }
}

</script>

<style lang="scss" scoped>
    input {
        position: absolute;
        left: 50%;
        right: 0;
        bottom: 100px;

        transform: translateX(-50%);

        width: auto;

        text-align: center;
        font-size: 100px;

        background-color: transparent;
        border: none;
        outline: none;

        &.class1, &.class2, &.class3, &.class4, 
        &.class5, &.class6, &.class7, &.class8, 
        &.class9, &.class10 {
            margin: 0 auto;

            border: black 3px solid;    
            background: #efefef;
            font-size: 80px;

            line-height: 1em;
            padding: 30px 30px;

            transform: translateX(-50%) rotate(-5deg);
        }

        &::placeholder {
            color: white;
        }
    }
</style>