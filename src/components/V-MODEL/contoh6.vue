<template>
  <div>
    <!-- Input field for email with v-model binding -->
    <input v-model="email" placeholder="Enter your email" />
    <!-- Display message if email format is invalid -->
    <p v-if="!isValidEmail">Invalid email format</p>
    <!-- Button to submit the email -->
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "", // Stores the email input value
    };
  },
  computed: {
    /**
     * Checks if the email format is valid
     * @returns {boolean} - True if the email format is valid, otherwise false
     */
    isValidEmail() {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(this.email);
    },
  },
  methods: {
    /**
     * Submits the email if valid, otherwise shows an alert
     */
    submit() {
      if (this.isValidEmail) {
        alert("Email is valid: " + this.email);
        // Perform an action, e.g., send the email to the server
      } else {
        alert("Please enter a valid email.");
      }
    },
  },
};
</script>
