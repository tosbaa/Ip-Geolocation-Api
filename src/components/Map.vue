<template>
  <div id="map-container"></div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
export default {
  data() {
    return {
      center: [37, 7749, -122, 4194],
      myMap: null
    };
  },
  mounted() {
    this.myMap = L.map("map-container").setView([51.505, -0.09], 13);
    L.tileLayer(
      `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${process.env.VUE_APP_MAP_TOKEN}`,
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken: process.env.VUE_APP_MAP_TOKEN
      }
    ).addTo(this.myMap);
  }
};
</script>

<style scoped>
#map-container {
  height: 60vh;
  position: relative;
  z-index: 0;
}
</style>
