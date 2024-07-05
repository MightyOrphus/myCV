<template>
  <div class="professionalCareerTimeline">
    <vue-timeline-update
      v-for="(item, idx) in work"
      :key="idx"
      :date="new Date(item.date)"
      :title="item.title"
      :description="item.description"
      :category="item.category"
      :icon="item.icon"
      color="white"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      work: [
        {
          date: "2016-03-15",
          title: "SS&C (Thailand) Inc. (Prior was DST Worldwide Services, Thailand)",
          category: "Career",
          description: "Working as a web application developer.",
          icon: "school",
        },
        {
          date: "2013-01-01",
          title: "SeSaMe (Sensor-enhanced Social Media) Center, NUS",
          category: "COOPERATIVE-PROGRAM INTERNSHIP",
          description: "Object detection with OpenCV and Matlab.",
          icon: "school",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
