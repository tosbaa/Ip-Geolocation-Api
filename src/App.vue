<template>
  <app-header></app-header>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import url("../public/styles/normalize.css");

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  min-height: 100vh;
}
</style>
