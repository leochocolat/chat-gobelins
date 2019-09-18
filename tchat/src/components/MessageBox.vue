<template>
  <div>
      <form action="" @submit.prevent="onFormSubmit">
          <input type="text" placeholder="Your Message" v-model="message">
      </form>
  </div>
</template>

<script>
export default {
    data() {
        return {
            message: ''
        }
    },
    methods: {
        onFormSubmit() {
            console.log(this.message);
            this.$emit('messageSent', this.message);
            this.message = '';
        }
    }
}

</script>

<style>

</style>