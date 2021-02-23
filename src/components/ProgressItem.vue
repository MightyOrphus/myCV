<template>
  <div class="progressItem">
    <span id="name">{{ item.text }} </span>
    <span v-if="hasIcon(item.icon)">
      <font-awesome-icon :icon="item.icon" />
    </span>
    <b-progress
      :value="item.value"
      height="5px"
      :variant="item.variant"
      striped
    />
  </div>
</template>

<script>
export default {
  name: "ProgressItem",
  props: { item: { type: Object, default: () => {} } },
};
</script>

<style scoped>
.progressItem {
  padding: 5px;
}
#name {
  padding-left: 5px;
}
#logo-container {
  min-width: 15px;
  display: inline-block;
}
</style>
