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
  color: white;
  background-image: url("../../public/pattern-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}

h1 {
  text-align: center;
}

.search-box {
  margin: auto;
  border-radius: 2rem;
  overflow: hidden;
  display: flex;
  width: 40%;
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
