<template>
  <div class="progressItem">
    <div>
      {{ item.text }}:
      <b-progress :value="item.value" :variant="item.variant"></b-progress>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionProgressItem",
  props: { item: { type: Object, default: () => {} } },
};
</script>
