<template>
  <div>
    <h1>Show</h1>
    <Items></Items>
  </div>
</template>

<script>
import Items from "../components/Item.vue";
export default {
  components: { Items },
  async fetch({ store }) {
    await store.dispatch("LOAD_ITEMS", "newstories");
  }
};
</script>
