<template>
  <div id="app">
    <div class="row">
      <SideBar class="col-md-4 col-lg-3" />
      <AboutMe class="col-md-8 col-lg-9" />
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SideBar from "./components/SideBar.vue";
import AboutMe from "./components/AboutMe.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    SideBar,
    AboutMe,
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
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--color-1);
  padding: 20px;
}

/* Color Theme Swatches in Hex */
.color-theme_Screenshot_20210120-234206-1-hex {
  color: #c2dfe1;
}
.color-theme_Screenshot_20210120-234206-2-hex {
  color: #53adac;
}
.color-theme_Screenshot_20210120-234206-3-hex {
  color: #006370;
}
.color-theme_Screenshot_20210120-234206-4-hex {
  color: #ef9a9e;
}
.color-theme_Screenshot_20210120-234206-5-hex {
  color: #efd9d9;
}

/* Color Theme Swatches in RGBA */
.color-theme_Screenshot_20210120-234206-1-rgba {
  color: rgba(194, 223, 225, 1);
}
.color-theme_Screenshot_20210120-234206-2-rgba {
  color: rgba(83, 173, 172, 1);
}
.color-theme_Screenshot_20210120-234206-3-rgba {
  color: rgba(0, 99, 112, 1);
}
.color-theme_Screenshot_20210120-234206-4-rgba {
  color: rgba(239, 154, 158, 1);
}
.color-theme_Screenshot_20210120-234206-5-rgba {
  color: rgba(239, 217, 217, 1);
}

/* Color Theme Swatches in HSLA */
.color-theme_Screenshot_20210120-234206-1-hsla {
  color: hsla(183, 34, 82, 1);
}
.color-theme_Screenshot_20210120-234206-2-hsla {
  color: hsla(179, 35, 50, 1);
}
.color-theme_Screenshot_20210120-234206-3-hsla {
  color: hsla(186, 100, 21, 1);
}
.color-theme_Screenshot_20210120-234206-4-hsla {
  color: hsla(357, 72, 77, 1);
}
.color-theme_Screenshot_20210120-234206-5-hsla {
  color: hsla(0, 40, 89, 1);
}
</style>
