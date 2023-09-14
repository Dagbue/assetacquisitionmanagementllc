<template>
<dash-content>
  <div>
    <h1 class="history-header">Your ROI History</h1>
    <div class="fields-alpha">
    <div class="container mt-3">
      <table class="table" >
        <thead>
        <tr>
          <th>Amount(€)</th>
          <th>Type</th>
          <th>Status</th>
          <th>Date Created</th>
        </tr>
        </thead>

        <tbody v-for="child in history" :key="child.key">
<!--        <tr>-->
<!--          <td>{{child.amount}}</td>-->
<!--          <td>{{child.selected}}</td>-->
<!--          <td>{{child.status}}</td>-->
<!--          <td>{{child.createdAt}}</td>-->
<!--        </tr>-->
        </tbody>
      </table>

    </div>

  </div>
  </div>
  <div class="content-sep">
    <hr class="line">
    <p class="foot">© 2009 Asset Acquisition & Management, LLC | All Rights Reserved</p>
  </div>
</dash-content>
</template>

<script>
import DashContent from "@/components/BaseComponents/dash/DashContent";
export default {
  name: "ROIHistory",
  components: {DashContent}
}
</script>

<style scoped>
.history-header{
  padding-top: 3%;
  padding-bottom: 30px;
  font-size: 25px;
  text-align: center;
  color: #FF7A8A;
  font-family: GTEestiProDisplay-Bold,serif ;
}
.fields-alpha{
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  background-color: #282E3BC7;
  padding-top: 20px;
  padding-bottom: 50px;
  margin-left: 3%;
  margin-right: 2%;
  border-radius: 15px;
  text-align: center;
}
hr{
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 1%;
}
.content-sep {
  margin-top: 39%;
  color: #071333;
}
.foot{
  text-align: center;
  padding-top: 5px;
}
p{
  font-family: GTEestiProDisplay-Regular,serif ;
}
th{
  color: #071333;
  font-family: GTEestiProDisplay-Regular,serif ;
}
td{
  color: #071333;
  font-family: GTEestiProDisplay-Regular,serif ;
}

.content-sep, hr{
  margin-top: 36%;
  color: #071333;
  margin-left: 2%;
  margin-right: 2%;
}

.foot{
  text-align: center;
  color: #071333;
  font-family: GTEestiProDisplay-Regular,serif ;
}
@media (max-width: 990px) {
  .history-header{
    font-size: 22px;
  }
  .fields-alpha{
    margin-left: unset;
    margin-right: unset;

  }
  .content-sep, hr{
    margin-left: unset;
    margin-right: unset;
  }
  .foot{
    font-size: 15px;
  }
}
@media (max-width: 550px) {
  .history-header{
    font-size: 20px;
  }
  .foot{
    font-size: 11px;
  }
}
</style>

