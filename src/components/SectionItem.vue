<template>
  <div class="sectionItem">
    <div>
      <span v-if="hasIcon(item.icon)" id="icon-container">
        <font-awesome-icon :icon="item.icon" />
      </span>
      <!-- if else for text -->
      <a v-if="item.link" class="" :href="item.link" target="_blank">
        {{ item.text }}
      </a>
      <span v-else>
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
