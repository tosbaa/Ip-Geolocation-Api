<template>
  <div class="info-card">
    <div class="info-card__element">
      <h6>IP ADDRESS</h6>
      <p>192.212.174.101</p>
    </div>
    <div class="info-card__element">
      <h6>LOCATION</h6>
      <p>Brooklyn,NY 1001</p>
    </div>
    <div class="info-card__element">
      <h6>TIMEZONE</h6>
      <p>UTC-05:00</p>
    </div>
    <div class="info-card__element">
      <h6>ISP</h6>
      <p>SpaceX Starlink</p>
    </div>
  </div>
</template>

<style scoped>
.info-card {
  margin: auto;
  width: 60%;
  background-color: white;
  border-radius: 3rem;
  display: flex;
  justify-content: center;
}

.info-card__element {
  letter-spacing: 0.1ch;
  color: black;
  padding: 1rem 2rem;
}

.info-card__element:not(:first-child) {
  border-left: 2px solid gray;
}

h6 {
  color: gray;
}

p {
  font-weight: 700;
}
</style>
