<template>
  <div class="sidebar">
    <div id="avatar-container">
      <img src="../assets/img/me.jpg" alt="Avatar" id="avatar" />
      <h5 id="name">
        <b>Patcharawat Wongvasinkul</b>
      </h5>
    </div>
    <Section :option="sidebar.info" />
    <Section :option="sidebar.socials" />
    <Section :option="sidebar.languages" />
  </div>
</template>

<script>
import Section from "./Section.vue";
export default {
  components: { Section },
  data() {
    return {
      sidebar: {
        info: {
          title: "INFO",
          type: "info",
          items: [
            {
              name: "Email",
              icon: ["fas", "envelope"],
              text: "patcharawat.wong@gmail.com",
            },
            {
              name: "Birth Date",
              icon: ["fas", "birthday-cake"],
              text: "June 7",
            },
            {
              name: "Habitation",
              icon: ["fas", "map-marker-alt"],
              text: "Bangkok, Thailand",
            },
          ],
        },
        socials: {
          title: "SOCIALS",
          type: "info",
          items: [
            {
              icon: ["fab", "instagram"],
              text: "greedy.orph",
              link: "https://www.instagram.com/greedy.orph/",
            },
            {
              icon: ["fab", "facebook"],
              text: "patcharawat.wongvasinkul",
              link: "https://www.facebook.com/patcharawat.wongvasinkul",
            },
            {
              icon: ["fab", "github"],
              text:
                "No need to add it here...<br/>All the projects are private...",
            },
          ],
        },
        languages: {
          title: "LANGUAGES",
          type: "progress",
          items: [
            {
              text: "Thai",
              variant: "primary",
              value: 95,
            },
            {
              text: "English",
              variant: "primary",
              value: 60,
            },
          ],
        },
      },
    };
  },
};
</script>

<style scoped>
.sidebar {
  /* background-color: var(--color-2); */
  background-color: var(--color-1);
  color: lightgrey;
  /* border-radius: 10px; */
  padding: 15px;
  font-size: 17px;
  word-wrap: break-word;
}
#avatar {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin: 5px;
  border: 2px var(--color-3) solid;
}
#avatar-container {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
