<template>
  <div class="about-me">
    <div>
      <div id="header">ABOUT ME</div>
      <p id="info">
        A Thai developer. Currently, working for SS&C.
        <br />
        Now living in Bangkok.
      </p>
    </div>
    <div>
      <div id="header">EDUCATION</div>
      <p id="info">
        <b-row>
          <b-col>
            2011-2014
          </b-col>
          <b-col>
            <b>Bachelor's degree, Information Technology</b>
            <br />
            Kasetsart University
          </b-col>
        </b-row>
      </p>
    </div>
    <div>
      <div id="header">HOBBIES</div>
      <!-- <div v-for="(item, idx) in hobbies">{{ item }}-{{ idx }}</div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hobbies: [],
    };
  },
};
</script>
<style scoped>
.about-me {
  background-color: var(--color-3);
  color: var(--color-1);
  border-radius: 10px;
  padding: 15px;
}
#header {
  border-bottom: 1px var(--color-1) solid;
}
#info {
  padding-top: 5px;
}
</style>
