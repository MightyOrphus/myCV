<template>
  <b-card-group deck>
    <b-card img-src="">
      <h5><b>Patcharawat Wongvasinkul</b></h5>
      <Section :options="sections.info" />
      <Section :options="sections.socials" />
    </b-card>
  </b-card-group>
</template>

<script>
import Section from "./Section.vue";
export default {
  components: { Section },
  data() {
    return {
      sections: {
        info: {
          title: "INFO",
          items: [
            {
              name: "Email",
              icon: "mailbox",
              text: "hi@amirreza.in",
            },
            {
              name: "Birth Date",
              icon: "calendar2-day",
              text: "7 June 1993",
            },
            {
              name: "Habitation",
              icon: "broadcast-pin",
              text: "Bangkok, Thailand",
            },
          ],
        },
        socials: {
          title: "SOCIALS",
          items: [
            {
              icon: "instagram",
              text: "instagram.com/greedy.orph",
              link: "https://www.instagram.com/greedy.orph/",
            },
          ],
        },
      },
    };
  },
};
</script>
