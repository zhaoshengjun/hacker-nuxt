import Vue from "vue";
import { distanceInWordsToNow } from "date-fns";
import { parse } from "url";

Vue.filter("timeSince", timestamp => {
  const timeInMS = timestamp * 1000;
  return distanceInWordsToNow(timeInMS);
});
Vue.filter("hostname", url => parse(url).hostname.replace(/^www\./, ""));
