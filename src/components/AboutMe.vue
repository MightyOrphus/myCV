<template>
  <div class="about-me">
    <div class="about-me-section-container">
      <div id="header">ABOUT ME</div>
      <p id="info">
        A regular everyday normal programmer who is quite friendly, resilient,
        and polite with a good sense of humor, I believe... &#128518;
      </p>
    </div>
    <div class="about-me-section-container">
      <div id="header">CERTIFICATES</div>
      <div>
        <ul>
          <li>Certified Scrum Developer (CSD)</li>
        </ul>
      </div>
    </div>
    <div class="about-me-section-container">
      <div id="header">TECHNICAL SKILLS</div>
      <div v-for="(skill, idx) in skills" :key="idx">
        <ProgressItem :item="skill" />
      </div>
    </div>
    <div class="about-me-section-container">
      <div id="header">HOBBIES</div>
      <div id="hobbyItem" v-for="(item, idx) in hobbies" :key="idx">
        <span v-html="item.icon" />
        {{ item.name }}
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
        { name: "Gaming", icon: "&#127918;" },
        { name: "Jogging", icon: "&#127939;" },
        { name: "Reading (mostly fiction)", icon: "&#128218;" },
        { name: "Archery", icon: "&#127993;" },
        { name: "Shooting", icon: "&#128299;" },
        { name: "Rope Skipping", icon: "&#128056;" },
        { name: "3D printing", icon: "&#128424;" },
        { name: "Muay Thai", icon: "&#129354;" },
      ],
      skills: [
        {
          text: "Fusion 360",
          variant: "dark",
          value: 40,
        },
        {
          text: "Linux",
          icon: ["fab", "linux"],
          variant: "dark",
          value: 30,
        },
        {
          text: "SQL",
          variant: "dark",
          value: 45,
        },

        {
          text: "AWS",
          icon: ["fab", "aws"],
          variant: "dark",
          value: 50,
        },
        {
          text: "Tomcat",
          variant: "dark",
          value: 50,
        },
        {
          text: "Javascript",
          icon: ["fab", "js"],
          variant: "dark",
          value: 80,
        },
        {
          text: "Java",
          icon: ["fab", "java"],
          variant: "dark",
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
  /* background-color: var(--color-3); */
  background-color: var(--color-2);
  /* color: lightgrey; */
  color: white;
  /* border-radius: 10px; */
  padding: 15px;
  font-size: 17px;
}
.about-me-section-container {
  margin: 10px 10px 10px 20px;
}
#header {
  font-size: 20px;
  /* border-bottom: 1px lightgrey solid; */
  border-bottom: 1px white solid;
  font-weight: bold;
  margin-bottom: 5px;
}
#info {
  padding-top: 5px;
}
#hobbyItem {
  margin: 2px;
  padding: 0 3px 0 3px;
  border-radius: 5px;
  display: inline-block;
  border: solid 1px darkgrey;
  background-color: darkgrey;
  color: black;
}
</style>
