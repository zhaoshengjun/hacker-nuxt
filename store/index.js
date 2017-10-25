import axios from "../plugins/axios";
// import axios from "axios";

export const state = () => ({
  items: []
});

export const mutations = {
  setItems(state, items) {
    state.items = items;
  }
};
export const actions = {
  async LOAD_ITEMS({ commit }, dataUrl) {
    const response = await axios.get(dataUrl);
    const ids = response.data;
    const tenIds = ids.slice(0, 10);
    const itemPromises = tenIds.map(id => axios.get(`item/${id}`));
    const itemResponses = await Promise.all(itemPromises);
    const items = itemResponses.map(res => res.data);
    const convertedItems = items.map(
      i => (i.url ? i : Object.assign({}, i, { url: "http://google.com" }))
    );
    // console.log(convertedItems);
    commit("setItems", convertedItems);
  }
};
