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
