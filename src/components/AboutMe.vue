<template>
  <div class="about-me">
    <div class="about-me-section-container">
      <div id="header">ABOUT ME</div>
      <p id="info">
        A typical programmer who is quite friendly, resilient, and polite with a
        good sense of humor, I believe... &#128518;
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
      <div
        class="alert alert-warning alert-dismissible fade show"
        style="margin-top: 20px"
      >
        <strong>Warning!</strong>
        This graph shows what I'm familiar with and how good I am at each of
        them in relative to each other, but it doesn't show how expert I am
        compared to other people.
        <br />
        Maybe I'm mediocre at best...
        <br />
        <span class="smaller" style="color: red"
          ><b>Also, the graph was added here to make this page less empty.</b></span
        >
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
        { name: "3D printing", icon: "&#128424;" },
        { name: "Gaming", icon: "&#127918;" },
        { name: "Jogging", icon: "&#127939;" },
        { name: "Reading (mostly fiction)", icon: "&#128218;" },
        { name: "Archery", icon: "&#127993;" },
        { name: "Shooting", icon: "&#128299;" },
        { name: "Rope Skipping", icon: "&#128056;" },
        { name: "Muay Thai", icon: "&#129354;" },
        { name: "Cycling", icon: "&#128690;" },
        { name: "Swimming", icon: "&#127946;" },
      ],
      skills: [
        {
          text: "Fusion 360",
          variant: "dark",
          value: 40,
        },
        {
          text: "Angular",
          variant: "dark",
          icon: ["fab", "angular"],
          value: 50,
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
  font-size: 15px;
}
.about-me-section-container {
  margin: 10px 10px 10px 20px;
}
#header {
  font-size: 18px;
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
.alert {
  font-size: 14px;
}
.alert .smaller {
  font-size: 11px;
}
</style>
