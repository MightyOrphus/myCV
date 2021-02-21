<template>
  <div class="sidebar">
    <div id="avatar-container">
      <img src="../assets/img/me.jpg" alt="Avatar" id="avatar" />
      <h5 id="name">Patcharawat Wongvasinkul</h5>
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
              text: "7 June 1993",
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
              text: "instagram.com/greedy.orph",
              link: "https://www.instagram.com/greedy.orph/",
            },
          ],
        },
        languages: {
          title: "LANGUAGES",
          type: "progress",
          items: [
            {
              text: "Thai",
              variant: "info",
              value: 100,
            },
            {
              text: "English",
              variant: "info",
              value: 70,
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
  background-color: var(--color-2);
  border-radius: 10px;
  padding: 15px;
  /* color: var(--color-3); */
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
}
</style>
