<template>
  <div class="info-card">
    <div class="info-card__element">
      <h6>IP ADDRESS</h6>
      <p>{{ ipData.address }}</p>
    </div>
    <div class="info-card__element">
      <h6>LOCATION</h6>
      <p>{{ ipData.city + "," + ipData.region + " " + ipData.postalCode }}</p>
    </div>
    <div class="info-card__element">
      <h6>TIMEZONE</h6>
      <p>{{ "UTC" + ipData.timezone }}</p>
    </div>
    <div class="info-card__element">
      <h6>ISP</h6>
      <p>{{ ipData.isp }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      ipData: "getIpDetails"
    })
  }
};
</script>

<style scoped>
.info-card {
  position: relative;
  top: 3vw;
  width: clamp(20em, 70%, 50em);
  margin: auto;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.info-card__element {
  flex-basis: 0;
  flex-grow: 1;
  letter-spacing: 0.1ch;
  color: black;
  padding: 0rem 3rem;
}

.info-card__element:not(:first-child) {
  border-left: 2px solid gray;
}

h6 {
  color: gray;
}

p {
  font-weight: 500;
}

@media screen and (max-width: 600px) {
  .info-card {
    /*   top: 20px; */
    text-align: center;
    flex-flow: column;
  }

  .info-card__element :is(h6, p) {
    margin: 1rem;
  }
}

@media screen and (max-width: 1000px) {
  .info-card__element:not(:first-child) {
    border-left: none;
  }
}
</style>
