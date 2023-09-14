<template>
  <div class="fields-alpha">
    <div class="container mt-3">
      <table class="table" >
        <thead>
        <tr>
          <th>S/N</th>
          <th>Amount(€)</th>
          <th>Type</th>
          <th>Status</th>
          <th>Date Created</th>
        </tr>
        </thead>

        <tbody>
        <tr>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ROIHistory2"
}
</script>

<style scoped>
.fields-alpha{
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
  background-color: #282E3BC7;
  padding-top: 20px;
  padding-bottom: 50px;
  margin-left: 3%;
  margin-right: 2%;
  border-radius: 12px;
  margin-top: 5%;
}
.fields{
  display: flex;
  justify-content: space-evenly;
  font-weight: 700;
}
hr{
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 1%;
}
p{
  font-family: GTEestiProDisplay-Regular,serif ;
}
th{
  color: #071333;
  text-align: center;
  font-family: GTEestiProDisplay-Regular,serif ;
}
td{
  color: #071333;
  font-family: GTEestiProDisplay-Regular,serif ;
}

.table{
  border-collapse: separate;
}

tr td:first-child:before
{
  counter-increment: Serial;      /* Increment the Serial counter */
  content:counter(Serial); /* Display the counter */
}


@media (max-width: 990px) {
  .fields-alpha{

    margin-left: unset;
    margin-right: unset;

  }
}
@media (max-width: 550px) {
  th{
    font-size: 12px;
  }
  td{
    font-size: 12px;
  }
  .table{
    width: 100%;
  }
}
</style>

