<template>
  <div>
    <p v-if="isUserLoggedIn">Welcome back!</p>
    <p v-else>Please log in.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        isLoggedIn: true,
      },
    };
  },
  computed: {
    isUserLoggedIn() {
      return this.user.isLoggedIn;
    },
  },
};
</script>
