<template>
  <div>
      <p>{{usersCount}} Users connected</p>
      <ul class="component__users-list">
          <UsersListUser v-for="(user, i) in users" :user="user" :key="i" />
      </ul>
  </div>
</template>

<style scoped>




</style>

<script>
import UsersListUser from './UsersListUser';

export default {
    components: {
        UsersListUser
    },
    props: {
        users: {
            type: Array,
            required: true
        }
    },
    computed: {
        usersCount() {
            return this.users.length
        }
    }
}
</script>