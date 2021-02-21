<template>
  <div class="mb-4 section">
    <div class="title">
      {{ option.title }}
    </div>
    <div v-if="option.type == 'info'">
      <SectionItem
        v-for="(item, idx) in option.items"
        :key="idx"
        :item="item"
      />
    </div>
    <div v-if="option.type == 'progress'">
      <SectionProgressItem
        v-for="(item, idx) in option.items"
        :key="idx"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import SectionItem from "./SectionItem";
import SectionProgressItem from "./SectionProgressItem";
export default {
  name: "Section",
  components: { SectionItem, SectionProgressItem },
  props: { option: { type: Object, default: () => {} } },
};
</script>

<style scoped>
.section {
  text-align: left;
}

.title {
  font-weight: bold;
  padding: 5px;
  border-bottom: 1px var(--color-3) solid;
}
</style>
