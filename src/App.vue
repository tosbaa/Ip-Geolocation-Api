<template>
  <app-header></app-header>
  <map-component></map-component>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      ipData: {
        address: null,
        location: null,
        timezone: null,
        isp: null
      }
    };
  },

  methods: {
    async getIpOfClient() {
      try {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/${process.env.VUE_APP_IP_URL}`
        );
        if (!response.ok) {
          throw new Error("Couldn't fetch the ip");
        } else {
          const data = await response.json();
          return data.ip;
        }
      } catch (error) {
        console.log(error.message);
      }
    },

    async getIpDetails() {}
  }
};
</script>

<style>
@import url("../public/styles/normalize.css");

@font-face {
  font-family: "Rubik";
  src: url("../public/fonts/Rubik/Rubik-VariableFont_wght.ttf")
      format("truetype"),
    url("../public/fonts/Rubik/Rubik-Italic-VariableFont_wght.ttf")
      format("truetype");
  font-weight: 400 700;
  unicode-range: U+0000- U+007F;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 10px;
  font-family: "Rubik";
}

body {
  font-size: 1.8rem;
}

#app {
  min-height: 100vh;
}
</style>
