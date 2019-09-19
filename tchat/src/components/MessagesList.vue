<template>
  <div class="message-list">
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
    },
    methods: {
        
    }
}
</script>

<style>
.message-list {
    height: 100%;
}

ul {
    position: relative;

    padding: 0;
    margin: 0;

    height: 100%;

    list-style: none;
}
</style>