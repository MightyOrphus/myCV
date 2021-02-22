<template>
  <div class="container">
    <div class="speechBalloon">
      <div id="content">
        <b>{{ year }}</b>
        <p>
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default { props: { year: { type: Number }, content: { type: String } } };
</script>
<style scoped>
.container {
  margin-left: 70px;
  margin-bottom: 20px;
  color: black;
}
/* Circle
    left   Ruler
     60     |6|
     48  |12|6|12| = 12 + 6 + 12 circle width
 */
.container::after {
  content: "";
  position: absolute;
  left: 48px;
  width: 30px;
  height: 30px;
  background-color: #de9e92;
  border: 4px solid #de9e92;
  border-radius: 50%;
  z-index: 1;
}
.speechBalloon {
  background-color: lightgrey;
  padding-left: 15px;
  padding-top: 5px;
}
.speechBalloon::before {
  content: "";
  position: absolute;
  left: 80px;
  border: solid lightgrey;
  border-width: 15px 15px 15px 15px;
  border-color: lightgrey lightgrey transparent transparent;
}
#content {
  padding: 5px;
}
/* Place the container to the left */
.left {
  left: 0;
}
/* Place the container to the right */
.right {
  left: 50%;
}
/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}
/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}
</style>
