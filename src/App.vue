<template>
  <div id="app">
    <div class="row">
      <SideBar class="col-md-6 col-lg-3" />
      <AboutMe class="col-md-6 col-lg-9" />
    </div>
    <div class="row">
      <Journey class="col-sm-12" />
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import AboutMe from "./components/AboutMe.vue";
import Journey from "./components/Journey";

export default {
  name: "App",
  components: {
    SideBar,
    AboutMe,
    Journey,
  },
};
</script>

<style>
:root {
  /* --color-1: #c2dfe1;
  --color-2: #53adac;
  --color-3: #006370;
  --color-4: #ef9a9e;
  --color-5: #efd9d9; */

  --color-1: #2f4159;
  --color-2: #6f87a6;
  --color-3: #5e728c;
  --color-4: #1a1f26;
  --color-5: #223440;
}
html,
body {
  /* background-color: var(--color-1); */
  background-color: var(--color-4);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-4);
  padding: 25px;
  padding-top: 10px;
}
</style>
