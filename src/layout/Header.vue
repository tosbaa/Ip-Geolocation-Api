<template>
  <header>
    <h1>Ip Address Tracker</h1>
    <div class="search-box">
      <input class="search-box__input" type="text" v-model="ipAddress" />
      <button class="search-box__button" @click="submitIp">></button>
    </div>
    <p class="search-box__error" v-if="inputError">{{ errorMessage }}</p>
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
      ipAddress: "",
      inputError: false,
      errorMessage: ""
    };
  },

  methods: {
    async submitIp() {
      this.inputError = false;
      try {
        await this.$store.dispatch("getIpDetails", {
          ip: this.ipAddress
        });
      } catch (error) {
        console.log("Entered");
        this.inputError = true;
        this.errorMessage =
          "Couldn't find an ip address or domain of " + this.ipAddress;
      }
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

.search-box__error {
  width: clamp(300px, 40%, 30rem);
  border-radius: 40px;
  color: red;
  background-color: rgba(255, 0, 0, 0.3);
  border: 4px dotted red;
  padding: 0.3rem;
  margin: 1rem auto 0 auto;
  text-align: center;
}

.search-box__button:hover {
  background-color: white;
  color: black;
  cursor: pointer;
}
</style>
