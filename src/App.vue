<template>
  <router-view />
</template>

<style lang="scss">
:root {
  --color-hsl-primary-1: 356, 100%, 66%;
  --color-hsl-primary-2: 355, 100%, 74%;
  --color-hsl-secondary-1: 208, 49%, 24%;

  --color-hsl-white-1: 0, 0%, 100%;
  --color-hsl-light-gray-1: 240, 2%, 79%;
  --color-hsl-cool-gray-1: 207, 13%, 34%;
  --color-hsl-black-1: 240, 10%, 16%;

  --color-primary-1: hsl(var(--color-hsl-primary-1));
  --color-primary-2: hsl(var(--color-hsl-primary-2));
  --color-secondary-1: hsl(var(--color-hsl-secondary-1));

  --color-white-1: hsl(var(--color-hsl-white-1));
  --color-light-gray-1: hsl(var(--color-hsl-light-gray-1));
  --color-cool-gray-1: hsl(var(--color-hsl-cool-gray-1));
  --color-black-1: hsl(var(--color-hsl-black-1));

  --gradient-red-1: hsl(13, 100%, 72%), hsl(353, 100%, 62%);
  --gradient-blue-1: hsl(237, 17%, 21%), hsl(237, 23%, 32%);

  --font-family-primary: Overpass;
  --font-family-secondary: Ubuntu;

  --content-width: 1280px;

  --border-radius: 10px;
  --border-radius-large: 150px;
}

#app {
  width: 100%;
}

@media only screen and (min-width: $sm) {
  html {
    font-size: 110%;
  }
}

@media only screen and (min-width: $md) {
  html {
    font-size: 120%;
  }
}
</style>
