export default {
  getIpDetails(state) {
    return state.ipData;
  },
  getLocation(state) {
    return state.ipData.coords;
  }
};
