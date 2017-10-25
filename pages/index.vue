<template>
  <div>
    {{items}}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["users"])
};
</script>

