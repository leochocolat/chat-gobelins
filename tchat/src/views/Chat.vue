<template>
  <div class="page__chat">
    <!-- <UsersList :users="store.users" :user="store.user"/> -->
    <MessagesList :messages="store.messages" :user="store.user"/>
    <MessageBox @messageSent="onMessageSent"/>  
  </div>
</template>

<script>
import store from '../store';

import UsersList from '../components/UsersList.vue';
import MessagesList from '../components/MessagesList.vue';
import MessageBox from '../components/MessageBox.vue';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    UsersList, 
    MessagesList,
    MessageBox
  },
  methods: {
    onMessageSent (content) {
      store.sendMessage(content);
    }
  }
}
</script>

<style>

  .page__chat {
    width: 100%;
    height: 100vh;
  }


</style>