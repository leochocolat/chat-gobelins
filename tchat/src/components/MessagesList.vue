<template>
  <div>
    <h1>Hello Messages List</h1>
    <ul>
        <MessagesListMessage :message="message" :user="user" v-for="(message, i) in messages" :key="i"/>
    </ul>
  </div>
</template>

<script>
import MessagesListMessage from '../components/MessagesListMessage.vue';

export default {
    components: {
        MessagesListMessage
    },
    props: {
        messages: {
            type: Array,
            required: true
        },
        user: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
ul {
    list-style: none;
}
</style>