export default {
  getIpDetails(state) {
    return state.ipData;
  },
  getLocation(state) {
    console.log(state.ipData.coords);
    return state.ipData.coords;
  }
};
