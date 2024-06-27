<template>
  <div class="sidebar">
    <div id="avatar-container">
      <img id="avatar" />
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
              name: "Telephone",
              icon: ['fas', 'phone'],
              text: "088-000-7372"
            },
            {
              name: "Birth Date",
              icon: ["fas", "cake-candles"],
              text: "June 7",
            },
            {
              name: "Habitation",
              icon: ["fas", "location-dot"],
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
              text: "No need to add it here. All the projects are private...",
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
  font-size: 15px;
  word-wrap: break-word;
}
#avatar-container {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
}
#avatar {
  width: 100px;
  height: 100px;
  margin: 5px;
  border: 2px var(--color-3) solid;
  background-image: url("data:image/jpeg;base64,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");
}
</style>
