<template>
  <div class="educationalTimeline">
    <vue-timeline-update
      v-for="(item, idx) in education"
      :key="idx"
      :date="new Date(item.date)"
      :title="item.title"
      :description="item.description"
      :icon="item.icon"
      color="white"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      education: [
        {
          date: "2011-01-01",
          title: "Kasetsart University",
          description: "Bachelor's degree, Computer Science",
          icon: "school",
        },
        {
          date: "2003-01-01",
          title: "Sarasas Ektra School",
        },
        {
          date: "2000-01-01",
          title: "Ratchawinit School",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
