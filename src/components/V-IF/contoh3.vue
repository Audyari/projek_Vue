<template>
  <ul>
    <li v-for="item in visibleItems" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: "Item 1", isVisible: true },
        { id: 2, name: "Item 2", isVisible: false },
        { id: 3, name: "Item 3", isVisible: true },
      ],
    };
  },
  computed: {
    visibleItems() {
      return this.items.filter((item) => item.isVisible);
    },
  },
};
</script>
