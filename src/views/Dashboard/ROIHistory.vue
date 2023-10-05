<template>
<dash-content>
  <div>
    <h1 class="history-header">Your Roi History</h1>
    <div class="fields-alpha">

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
<!--  <div class="content-sep">-->
<!--    <hr class="line">-->
<!--    <p class="foot">© 2009 Asset Acquisition & Management, LLC | All Rights Reserved</p>-->
<!--  </div>-->
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
  font-size: 25px;
  text-align: center;
  color: #D23535;
}
.fields-alpha{
  /*box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);*/
  /*background-color: #282E3BC7;*/
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

table {
  border-collapse: collapse;
  width: 100%;
}
.table{
  /*margin-left: 2%;*/
  /*margin-right: 3%;*/
}

tr{
  border: 1px solid #E3EBF6;
}

th {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background: rgba(34, 34, 34, 1);
  padding: 10px;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
}

td {
  /*border: 1px solid #E3EBF6;*/
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 12px 8px;
  /*letter-spacing: 1px;*/
  color: #ffffff;
  font-weight: 200;
  font-size: 15px;
  /*border-bottom: 1px solid #E3EBF6;*/
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

