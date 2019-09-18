<template>
  <div>
      <!-- <p>connected as {{user.name}}</p> -->
      <p>
          {{usersCount}} Users connected
      </p>
      <ul class="component__users-list">
          <UsersListUser v-for="(user, i) in users" :user="user" :key="i" />
          <!-- IMPORT COMPONENT UsersListUser -->
      </ul>
  </div>
</template>

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

<style>

</style>