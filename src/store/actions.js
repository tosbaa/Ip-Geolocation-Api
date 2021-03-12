export default {
  async getIpDetails(context, payload) {
    const response = await fetch(
      `https://cors-anywhere.herokuapp.com/${process.env.VUE_APP_GEO_URL}?apiKey=${process.env.VUE_APP_API_KEY}&ipAddress=${payload.ip}`
    );
    if (response.status === 422) {
      throw new Error("Couldn't find an ip or domain of  " + payload.ip);
    }
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
        context.dispatch("getIpDetails", { ip: data.ip });
      }
    } catch (error) {
      console.log(error.message);
    }
  }
};
