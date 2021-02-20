<template>
  <div class="sectionItem">
    <div>
      <!-- <b-icon v-if="item.icon" :icon="item.icon" /> -->
      <font-awesome-icon :icon="item.icon" />
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
  computed: {
    // hasIcon() {
    //   return !!this.item.icon;
    // },
  },
};
</script>

<style scoped>
.sectionItem {
  margin-top: 10px;
  color: var(--color-1);
}

a {
  color: var(--color-1);
}
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
}
</style>
