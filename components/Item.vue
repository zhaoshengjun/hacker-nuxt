<template>
  <div>
    <ul>
      <li v-for="item in items" @key="item.id"><a @href="item.url">{{item.title}}</a></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["items"])
};
</script>

