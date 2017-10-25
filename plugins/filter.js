import Vue from "vue";
import { distanceInWordsToNow } from "date-fns";

Vue.filter("timeSince", timestamp => {
  const timeInMS = timestamp * 1000;
  return distanceInWordsToNow(timeInMS);
});
