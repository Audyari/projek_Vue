<template>
  <div>
    <custom-input v-model="inputValue" />
    <p>Input value: {{ inputValue }}</p>
  </div>
</template>

<script>
import CustomInput from "./CustomInput.vue";

export default {
  components: { CustomInput },
  data() {
    return {
      inputValue: "",
    };
  },
};
</script>
