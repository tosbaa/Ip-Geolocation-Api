<template>
  <header>
    <h1>Ip Address Tracker</h1>
    <div class="search-box">
      <input class="search-box__input" type="text" v-model="ipAddress" />
      <button class="search-box__button" @click="submitIp">></button>
    </div>
    <info-card></info-card>
  </header>
</template>

<script>
import InfoCard from "../components/InfoCard.vue";
export default {
  components: {
    InfoCard
  },
  data() {
    return {
      ipAddress: ""
    };
  },

  methods: {
    submitIp() {
      this.$store.dispatch("getIpDetails", {
        ip: this.ipAddress
      });
    }
  }
};
</script>

<style scoped>
header {
  position: relative;
  height: 40vh;
  z-index: 1;
  color: white;
  background-image: url("../../public/pattern-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
}

h1 {
  text-align: center;
  margin-top: 0;
  padding-top: 2rem;
}

.search-box {
  margin: auto;
  border-radius: 2rem;
  overflow: hidden;
  display: flex;
  width: clamp(20em, 40%, 60em);
  min-height: 5rem;
}

.search-box__input {
  flex: 7;
  padding: 1rem;
}

.search-box__button {
  padding: 0;
  border: 0;
  flex: 1;
  background-color: black;
  color: white;
  transition: all 0.2s ease;
}

.search-box__button:hover {
  background-color: white;
  color: black;
  cursor: pointer;
}
</style>
