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
        size="sm"
        id="hobbyItem"
        disabled
        v-for="(item, idx) in hobbies"
        :key="idx"
        ><font-awesome-icon :icon="item.icon" /> {{ item.name }}</b-button
      >
    </div>
    <div>
      <div id="header">TECHNICAL SKILLS</div>
      <div v-for="(skill, idx) in skills" :key="idx">
        <ProgressItem :item="skill" />
      </div>
    </div>
  </div>
</template>
<script>
import ProgressItem from "./ProgressItem";
export default {
  components: { ProgressItem },
  data() {
    return {
      hobbies: [
        { name: "Gaming", icon: "gamepad" },
        { name: "Jogging", icon: "running" },
        { name: "Walking", icon: "walking" },
        { name: "Reading (mostly fiction)", icon: "book" },
        {
          name: "Shooting (I can shoot both gun and bow...)",
          icon: "bullseye",
        },
        { name: "Rope Skipping", icon: "frog" },
      ],
      skills: [
        {
          text: "Git",
          icon: ["fab", "git-alt"],
          variant: "info",
          value: 50,
        },
        {
          text: "Spring Boot",
          variant: "info",
          value: 20,
        },
        {
          text: "JQuery",
          variant: "info",
          value: 40,
        },
        {
          text: "OracleSQL",
          variant: "info",
          value: 50,
        },

        {
          text: "AWS",
          icon: ["fab", "aws"],
          variant: "info",
          value: 50,
        },
        {
          text: "Tomcat",
          variant: "info",
          value: 50,
        },
        {
          text: "Vue.js",
          icon: ["fab", "vuejs"],
          variant: "info",
          value: 30,
        },
        {
          text: "Polymer",
          variant: "info",
          value: 60,
        },
        {
          text: "Javascript",
          icon: ["fab", "js"],
          variant: "info",
          value: 80,
        },
        {
          text: "Java",
          icon: ["fab", "java"],
          variant: "info",
          value: 85,
        },
        {
          text: "Googling",
          icon: ["fab", "google"],
          variant: "warning",
          value: 95,
        },
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
  font-size: 15px;
}
#header {
  border-bottom: 1px var(--color-1) solid;
  font-weight: bold;
}
#info {
  padding-top: 5px;
}
#hobbyItem {
  margin: 3px;
}
</style>
