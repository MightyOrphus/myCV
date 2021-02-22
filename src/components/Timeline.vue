<template>
  <div class="timeline">
    <TimelineItem
      v-for="(item, idx) in timeline"
      :key="idx"
      :year="item.year"
      :content="item.content"
    />
  </div>
</template>
<script>
import TimelineItem from "./TimelineItem";
export default {
  name: "Timeline",
  components: { TimelineItem },
  data() {
    return {
      timeline: [
        {
          year: 2017,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra lacinia enim aliquet varius",
        },
        {
          year: 2017,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra lacinia enim aliquet varius",
        },
        {
          year: 2017,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra lacinia enim aliquet varius",
        },
        {
          year: 2017,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra lacinia enim aliquet varius",
        },
        {
          year: 2017,
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra lacinia enim aliquet varius",
        },
      ],
    };
  },
};
</script>
<style scoped>
.timeline {
  color: #114797;
  background-color: #43c9b7;
  border-radius: 10px;
}
/* Ruler */
.timeline::after {
  content: "";
  top: 0;
  bottom: 0;
  background-color: #114797;
  position: absolute;

  width: 6px;
  margin-left: 3px; /* half the width */

  left: 55px;
}
</style>
