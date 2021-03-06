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
  mounted: function() {
    document.body.removeChild(document.getElementById("loaderWrapper"));
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-4);
  padding: 25px;
  padding-top: 10px;
}
</style>
