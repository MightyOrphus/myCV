<template>
  <div id="app">
    <div class="row">
      <SideBar class="col-md-4 col-lg-3" />
      <AboutMe class="col-md-8 col-lg-9" />
    </div>
    <div class="row">
      <Timeline class="col-sm-12" />
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SideBar from "./components/SideBar.vue";
import AboutMe from "./components/AboutMe.vue";
import Timeline from "./components/Timeline";

export default {
  name: "App",
  components: {
    // HelloWorld,
    SideBar,
    AboutMe,
    Timeline,
  },
};
</script>

<style>
:root {
  --color-1: #c2dfe1;
  --color-2: #53adac;
  --color-3: #006370;
  --color-4: #ef9a9e;
  --color-5: #efd9d9;
}
html,
body {
  background-color: var(--color-1);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-1);
  padding: 20px;
}
</style>
