<template>
  <header>
    <h1>Ip Address Tracker</h1>
    <div class="search-box">
      <input class="search-box__input" type="text" />
      <button class="search-box__button">></button>
    </div>
    <info-card></info-card>
  </header>
</template>

<script>
import InfoCard from "../components/InfoCard.vue";
export default {
  components: {
    InfoCard
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
}
</style>
