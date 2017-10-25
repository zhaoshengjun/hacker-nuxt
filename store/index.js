import axios from "../plugins/axios";

export const state = () => ({
  items: []
});

export const mutations = {
  setItems(state, items) {
    state.items = items;
  }
};
export const actions = {
  async nuxtServerInit({ commit }) {
    const response = await axios.get("topstories.json");
    const ids = response.data;
    const tenIds = ids.slice(0, 10);
    const itemPromises = tenIds.map(id => axios.get(`item/${id}.json`));
    const itemResponses = await Promise.all(itemPromises);
    const items = itemResponses.map(res => res.data);
    commit("setItems", items);
  }
};
