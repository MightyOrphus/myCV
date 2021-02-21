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
            <b>Bachelor's degree, Computer Science</b>
            <br />
            Kasetsart University
          </b-col>
        </b-row>
      </p>
    </div>
    <div>
      <div id="header">HOBBIES</div>
      <b-button
        id="hobbyItem"
        disabled
        v-for="(item, idx) in hobbies"
        :key="idx"
        ><font-awesome-icon :icon="item.icon" /> {{ item.name }}</b-button
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hobbies: [
        { name: "Gaming", icon: "gamepad" },
        { name: "Jogging", icon: "running" },
        { name: "Walking", icon: "walking" },
        { name: "Reading (Mostly fiction)", icon: "book" },
        {
          name: "Shooting (I can shoot both gun and bow...)",
          icon: "bullseye",
        },
        { name: "Rope Skipping", icon: "frog" },
      ],
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
  font-weight: bold;
}
#info {
  padding-top: 5px;
}
#hobbyItem {
  margin: 5px;
}
</style>
