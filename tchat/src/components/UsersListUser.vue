<template>
  <li class="component__users-list__user">
      {{user.username}}
  </li>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

</style>