<template>
  <div class="download-app-container">
    <div class="download-app-intro">
      <p class="download-intro">Ready To Work with Us</p>
      <p class="download-sub">CONTACT US : support@assetacquisitionmanagementllc.com</p>
      <p class="download-sub">Phone No: +1 (717) 535‑6321</p>
      <p class="download-sub">C/O Taac, LLC, 3 Lone Oak Circle, Ladera Ranch CA 92694</p>
      <div class="app-store-container">
      </div>
    </div>
    <div class="download-app-image">
      <img src="@/assets/boxes.svg" alt="logo"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ready-to-work"
}
</script>

<style scoped>
.download-app-container{
  background-color: #071333;
  display: flex;
  justify-content: space-around;
  height: 335px;
  margin-left: 12%;
  margin-right: 12%;
  padding-top: 20px;
  padding-left: 50px;
  padding-right: 50px;
  border-radius: 5px;
}
.download-app-intro{
  margin-top: 5%;
  margin-left: 2%;
}


.download-intro{
  font-size: 28px;
  line-height: 40px;
  color: white;
}

.download-sub{
  color: #9CABCB;
  font-size:19px;
  line-height: 25px;
  padding-top: 2%;
}

@media (max-width: 990px) {
  .download-intro {
    font-size: 24px;
    line-height: normal;
  }
  .download-sub{
    font-size: 17px;
    line-height: normal;
    padding-top: unset;
  }
  .download-app-container{
    height: 250px;
    padding-top: 29px;
  }
  img{
    width: 110%;
  }
}

@media (max-width: 500px){
  .download-app-container {
    display: none;
  }
}

</style>
