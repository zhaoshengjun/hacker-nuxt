<template>
  <div>
    <Items></Items>
  </div>
</template>

<script>
import Items from "../components/Item.vue";
export default {
  components: { Items },
  async fetch({ store }) {
    await store.dispatch("LOAD_ITEMS", "topstories");
  }
};
</script>
