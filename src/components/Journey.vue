<template>
  <div class="journey">
    <div>
      <vue-timeline-update
        v-for="(item, idx) in timeline"
        :key="idx"
        :date="new Date(item.date)"
        :title="item.title"
        :description="item.description"
        :category="item.category"
        :icon="item.icon"
        :color="item.color"
        theme="light"
      />
      <vue-timeline-update
        :date="new Date('1993-06-07')"
        title="BORN"
        description="Everything started here!"
        category=""
        icon="child_care"
        color="grey"
        theme="light"
        is-last
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timeline: [
        {
          date: "2017-01-01",
          title: "DST (SS&C)",
          category: "Career",
          description:
            "Work full time as a FULL-STACK developer and got an opportunity to work with various technologies. <br/>" +
            "For example:" +
            "<ul>" +
            "<li>Server: Apache HTTP server, JBoss, Tomcat, Websphere</li>" +
            "<li>Front-end: Polymer, Vue (for internal tool), JQuery</li>" +
            "<li>Back-end: Java (Servlet, Spring boot)</li>" +
            "<li>DB: Oracle, MS SQL Server</li>" +
            "<li>Cloud platform: AWS (cloudformation, pipeline, alarm, s3, ec2, ...)</li>" +
            "</ul>" +
            "So I can say that I quite have some experience with the technologies above...",
          icon: "business_center",
          color: "green",
        },
        {
          date: "2015-01-01",
          title: "(Graduated) Kasetsart University",
          description: "Bachelor's degree, Computer Science",
          icon: "school",
          color: "grey",
        },
        {
          date: "2014-01-01",
          title: "SeSaMe Center, NUS",
          category: "INTERNSHIP",
          description:
            "Working on an object detection project (using OpenCV and Matlab)" +
            "<ul>" +
            "<li>Human face detection module for automatically a face blurring from videos.(using ACFDetector (Aggregate Channel Feature Detector))</li>" +
            "<li>Vehicle detection (using Histogram of Oriented Gradient + Linear SVM along with ACFDetector as an alternative solution)</li>" +
            "</ul>",
          icon: "mood",
          color: "green",
        },
        {
          date: "2012-01-01",
          title: "(Start) Kasetsart University",
          description: "",
          icon: "school",
          color: "grey",
        },
        {
          date: "2004-01-01",
          title: "Sarasas Ektra School",
          description: "Elementary school & High school",
          icon: "code",
          color: "grey",
        },
        {
          date: "2001-01-01",
          title: "Ratchawinit School",
          description: "Elementary school",
          icon: "code",
          color: "grey",
        },
      ],
    };
  },
};
</script>
<style scoped>
.journey {
  padding: 20px;
  /* background-color: #43c9b7; */
  background-color: #d7fff2e3;
  /* border-radius: 10px; */
}
.gb-vue-timeline-update__description {
  font-size: 15px;
}
</style>
