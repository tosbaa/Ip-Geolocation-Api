import { createStore } from "vuex";
import getters from "./getters.js";
import actions from "./actions.js";
import mutations from "./mutations.js";
export default createStore({
  state() {
    return {
      ipData: {
        address: null,
        region: null,
        city: null,
        coords: null,
        postalCode: null,
        timezone: null,
        isp: null
      }
    };
  },
  mutations,
  getters,
  actions
});
