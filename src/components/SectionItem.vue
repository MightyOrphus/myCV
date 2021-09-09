<template>
  <div class="sectionItem">
    <div>
      <span v-if="hasIcon(item.icon)" id="icon-container">
        <font-awesome-icon :icon="item.icon" />
      </span>
      <!-- if else for text -->
      <a
        v-if="item.link"
        class=""
        :href="item.link"
        target="_blank"
        id="textItem"
      >
        {{ item.text }}
      </a>
      <span v-else id="textItem">
        {{ item.text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionItem",
  props: { item: { type: Object, default: () => {} } },
};
</script>

<style scoped>
.sectionItem {
  margin-top: 10px;
}
#icon-container {
  margin: 0 20px 0 20px;
}
#textItem {
  text-align: justify;
  text-justify: inter-word;
}
a {
  /* color: black; */
  color: lightgrey;
}
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
}
</style>
