<template>
  <div class="pa4 code">
    {{user.id}} has been a user {{user.created | timeSince}}.
  </div>
</template>

<script>
import axios from "../../plugins/axios";
export default {
  async asyncData({ route }) {
    const userId = route.params.id;
    const response = await axios.get(`/user/${userId}`);
    return { user: response.data };
  }
};
</script>
