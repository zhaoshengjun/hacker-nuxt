<template>
  <div class="pa4 code">
    <div class="f2 mb2">
      {{item.title}}
      <template v-if="item.url">
        <a :href="item.url">{{item.url | hostname}}</a>
      </template>
    </div>
    <div class="f3">
      <nuxt-link :to="'/user/'+item.by"> {{item.by}}</nuxt-link>
      <span class="i">{{item.time | timeSince}}</span>
    </div>

    <ul>
      <comment v-for="id in item.kids" :key="id" :id="id"></comment>
    </ul>
  </div>
</template>

<script>
import axios from "../../plugins/axios";
import Comment from "../../components/Comment";
export default {
  components: { Comment },
  data() {
    return { item: {} };
  },
  async asyncData({ route }) {
    const itemId = route.params.id;
    const response = await axios.get(`/item/${itemId}`);
    return { item: response.data };
  }
};
</script>
