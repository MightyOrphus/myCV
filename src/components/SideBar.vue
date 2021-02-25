<template>
  <div class="sidebar">
    <div id="avatar-container">
      <img src="../assets/img/me.jpg" alt="Avatar" id="avatar" />
      <h5 id="name">
        <b>Patcharawat<br />Wongvasinkul</b>
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
              text: "instagram.com/greedy.orph",
              link: "https://www.instagram.com/greedy.orph/",
            },
            {
              icon: ["fab", "facebook"],
              text: "facebook.com/patcharawat.wongvasinkul",
              link: "https://www.facebook.com/patcharawat.wongvasinkul",
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
  /* border-radius: 10px; */
  padding: 15px;
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
