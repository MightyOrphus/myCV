<template>
  <div class="about-me">
    <div>
      <div id="header">ABOUT ME</div>
      <p id="info">
        A regular everyday normal developer who is quite friendly, resilient,
        and polite with a good sense of humor, I believe... &#128518;
        <br />
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
      >
        <span v-if="hasIcon(item.icon)">
          <font-awesome-icon :icon="item.icon" />
        </span>
        {{ item.name }}
      </b-button>
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
        { name: "3D printing", icon: "" },
        { name: "Muay Thai", icon: "" },
      ],
      skills: [
        {
          text: "Fusion 360",
          variant: "info",
          value: 40,
        },
        {
          text: "Linux",
          icon: ["fab", "linux"],
          variant: "info",
          value: 30,
        },
        {
          text: "Git",
          icon: ["fab", "git-alt"],
          variant: "info",
          value: 50,
        },
        {
          text: "SQL",
          variant: "info",
          value: 45,
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
  /* border-radius: 10px; */
  padding: 15px;
  font-size: 17px;
}
#header {
  font-size: 20px;
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
