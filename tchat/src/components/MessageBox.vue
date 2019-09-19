<template>
  <div>
      <form action="" @submit.prevent="onFormSubmit">
          <input v-on:input="randomStyle" type="text" placeholder="Your Message" v-model="message" :class="className">
      </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            className: ''
        }
    },
    methods: {
        onFormSubmit() {
            console.log(this.message);
            this.$emit('messageSent', this.message);
            this.message = '';
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
        }
    },
    computed: {
        
    }
}

</script>

<style lang="scss" scoped>
    input {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 100px;

        width: 100%;

        text-align: center;
        font-size: 100px;

        background-color: transparent;
        border: none;
        outline: none;

        &::placeholder {
            color: white;
        }
    }
</style>