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
        theme="dark"
      />
      <vue-timeline-update
        :date="new Date('1993-06-07')"
        title="BORN"
        description="Everything started here!"
        category=""
        icon="child_care"
        color="orange"
        theme="dark"
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
          date: "2016-03-15",
          title: "SS&C (Thailand) Inc.",
          category: "Career",
          description:
            "Working full-time as a <b>Full-Stack developer</b> for " +
            "<b>SSNC AWD®</b> (Automated Work Distributor), <b>a Workflow and Business Process Management (BPM) software.</b> " +
            "Responsible for full-stack technical research, design and implement, and got a chance to work on multiple " +
            "add-ons of the main product which include: " +
            "<ul>" +
            "<li><b>Content Viewer</b><br/>" +
            "<div>A Java Servlet web application used for viewing various file types—such as PDF, TIFF, and " +
            "image files—stored in the main application. Users can annotate documents by adding highlights, " +
            "redactions, lines, arrows, and more.</div></li>" +
            "<li><b>Document Splitter</b><br/>" +
            "<div>A Java Servlet web application that allows users to create new documents from existing " +
            "ones. Users can copy pages from multiple documents, select specific pages, and rearrange them as " +
            "needed.</div></li>" +
            "<li><b>Data purging API</b><br/>" +
            "<div>A Spring Boot application that provides an API-based solution for managing long-running data and " +
            "image deletion tasks. It allows clients to automate and monitor these tasks asynchronously, supports " +
            "task management, and ensures secure access using JWT authentication.</div></li>" +
            "<li><b>MS office add-in</b><br/>" +
            "<div>An add-in for Microsoft Word and Excel that connects to the main application via " +
            "WebSocket. It allows users to open documents, edit them, and save changes back seamlessly. Nothing " +
            "handles Microsoft Office file formats—like DOCX and XLSX—better than Microsoft Office itself.</div></li>" +
            "<li><b>REST integration service</b><br/>" +
            "<div>Since I'm working on a Workflow and Business Process Management (BPM) software, I " +
            "had the opportunity to introduce a new element to the flow—enabling the flow to call external REST " +
            "services when a specific state is reached. It works by ingesting a Swagger (OpenAPI) specification and " +
            "converting it into a stub during the design phase, which is then executed at runtime.</div></li>" +
            "<li><b>Drools integration service</b><br/>" +
            "<div>Similar to the REST integration service, but designed for executing Drools rules " +
            "within the workflow.</div></li>" +
            "<li><b>Email service</b><br/>" +
            "<div>A component of the BPM application responsible for retrieving and sending emails " +
            "by communicating with a mail server. Although this was an existing feature, I had the opportunity to " +
            "fix bugs related to email display and improve the reply functionality via a sub-window in the web " +
            "application.</div></li>" +
            "<li><b>File System alike add-on</b><br/>" +
            "<div>A simple web application implemented with Polymer (which was new at the time), helping users browse " +
            "through a file structure just like a file explorer.</div></li>" +
            "<li><b>Fax</b><br/>" +
            "<div>Another component of the main BPM application communicates with the fax server via a REST service " +
            "in order to send faxes.</div></li>" +
            "</ul>",
          icon: "business_center",
          color: "green",
        },
        {
          date: "2016-01-01",
          title: "(Graduated) Kasetsart University",
          description: "Bachelor's degree, Computer Science",
          icon: "school",
          color: "orange",
        },
        {
          date: "2015-01-01",
          title: "SeSaMe Research Center, NUS",
          category: "INTERNSHIP",
          description:
            "Working on object detection projects (using OpenCV and Matlab)" +
            "<ul>" +
            "<li>Human face detection module for automatic face blurring using ACFDetector (Aggregate Channel Feature Detector)</li>" +
            "<li>Vehicle detection using Histogram of Oriented Gradient + Linear SVM along with ACFDetector as an alternative solution</li>" +
            "</ul>",
          icon: "mood",
          color: "green",
        },
        {
          date: "2012-01-01",
          title: "(Start) Kasetsart University",
          description: "",
          icon: "school",
          color: "orange",
        },
        {
          date: "2004-01-01",
          title: "Sarasas Ektra School",
          description: "Elementary school & High school",
          icon: "code",
          color: "orange",
        },
        {
          date: "2001-01-01",
          title: "Ratchawinit School",
          description: "Elementary school",
          icon: "code",
          color: "orange",
        },
      ],
    };
  },
};
</script>
<style scoped>
.journey {
  padding: 20px;
  background-color: var(--color-3);
  /* background-color: #d7fff2e3; */
  /* border-radius: 10px; */
}
.gb-vue-timeline-update {
  padding-bottom: 10px !important;
}
>>> ul {
  margin-block-end: 0 !important;
}
>>> .gb-vue-timeline-update__right {
  padding-bottom: 0 !important;
}
>>> p {
  font-size: 15px !important;
  line-height: 24px !important;
}
</style>
