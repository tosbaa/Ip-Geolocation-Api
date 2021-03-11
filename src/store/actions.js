export default {
  async getIpDetails(context, payload) {
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/${process.env.VUE_APP_GEO_URL}?apiKey=${process.env.VUE_APP_API_KEY}&payload.ipAddress=${payload.ip}`
      );
      if (!response.ok) {
        throw new Error("Network error occured during fetch");
      } else {
        const data = await response.json();
        context.commit("setIpDetails", {
          address: data.ip,
          region: data.location.region,
          city: data.location.city,
          coords: [data.location.lat, data.location.lng],
          postalCode: data.location.postalCode,
          timezone: data.location.timezone,
          isp: data.isp
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  },

  async getIpOfClient(context) {
    try {
      const response = await fetch(
        `https://cors-anywhere.herokuapp.com/${process.env.VUE_APP_IP_URL}`
      );
      if (!response.ok) {
        throw new Error("Couldn't fetch the ip");
      } else {
        const data = await response.json();
        context.dispatch("getIpDetails", data.ip);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
};
