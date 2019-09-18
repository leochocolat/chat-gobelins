<template>
  <li :class="isOwner">
      <p class="" >{{user}}</p>
      <p class="message"><span class="message__username">{{message.user.username}} : </span>{{message.text}}</p>
      <p class="message__time">{{formatedTime}}</p>
  </li>
</template>

<script>
import moment from 'moment';

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
            console.log(this.user.username, this.message.user.username)
            if (this.user.username == this.message.user.username) {
                return 'isOwner'
            } else {
                return 'isNotOwner'
            }
        }
    }
}
</script>

<style>

.isOwner {
    color: blue;
}

</style>