<template>
  <div class="mb-4" id="section">
    <div class="title mb-3">
      {{ options.title }}
    </div>
    <!-- <slot v-if="$slots.default" />
    <template v-else-if="$scopedSlots.items">
      <slot name="items" :items="options.items" />
    </template>
    <template v-else-if="$scopedSlots.item">
      <slot v-for="item in options.items" name="item" :item="item" />
    </template>
    <template v-else>
      <SectionItem
        v-for="(item, index) in options.items"
        :key="index"
        :item="item"
      />
    </template> -->
    <SectionItem
      v-for="(item, index) in options.items"
      :key="index"
      :item="item"
    />
  </div>
</template>

<script>
import SectionItem from "./SectionItem";
export default {
  name: "Section",
  components: { SectionItem },
  props: { options: { type: Object, default: () => {} } },
};
</script>

<style scoped>
#section {
  text-align: left;
}

.title {
  border-bottom: 2px #bfbfbf solid;
  font-weight: 300;
  line-height: 1.5 !important;
  letter-spacing: 0.2em !important;
}
</style>
