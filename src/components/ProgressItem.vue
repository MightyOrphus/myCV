<template>
  <div class="progressItem">
    <b id="name">{{ item.text }} </b>
    <span v-if="hasIcon(item.icon)">
      <font-awesome-icon :icon="item.icon" />
    </span>
    <!-- <b-progress
      :value="item.value"
      height="5px"
      :variant="item.variant"
      striped
    /> -->
    <b-progress :value="item.value" height="5px" :variant="item.variant" />
  </div>
  <span style="color:red;font-weight: bold;">*** The progress bar is representing the familiarity... <font-awesome-icon icon="&#129335" /></span>
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
