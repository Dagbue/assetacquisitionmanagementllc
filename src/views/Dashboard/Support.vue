<template>
<dash-content>
  <div class="support">
    <h1 class="support-header"> Asset Acquisition & Management, LLC </h1>
    <p class="support-subheader">For inquiries, suggestions and complaints,</p>
    <i class='bx bxl-instagram-alt'></i>
    <i class='bx bxl-twitter' ></i>
    <i class='bx bxl-youtube' ></i>
    <i class='bx bxl-linkedin-square'></i>
    <p>You can  mail us at:</p>
    <a href="mailto:support@assetacquisitionmanagementllc.com" class="para-last">support@assetacquisitionmanagementllc.com</a>
  </div>
<!--  <div class="content-sep">-->
<!--    <hr>-->
<!--    <p class="foot">© 2009 Asset Acquisition & Management, LLC | All Rights Reserved</p>-->
<!--  </div>-->
</dash-content>
</template>

<script>
import DashContent from "@/components/BaseComponents/dash/DashContent";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Support",
  components: {DashContent}
}
</script>

<style scoped>
.support{
  text-align: center;
  padding-top: 7%;
  padding-bottom: 5%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background: rgba(34, 34, 34, 1);
  margin-left: 10%;
  margin-right: 8%;
  margin-top: 10%;
  border-radius: 5px;
  color: #FFFFFF;
}
.support-header{
  font-size: 25px;
  padding-bottom: 10px;
  color: #FFFFFF;
}
.support-subheader{
  font-size: 20px;
}
i{
  font-size: 47px;
  color: #FFFFFF;
}
i:hover{
  color: #D23535;
}
p{
  font-size: 17px;
}

.para-last{
  font-size: 20px;
  list-style: none;
  text-decoration: none;
  color: #FFFFFF;
}

/*a{*/
/*  font-family: GTEestiProDisplay-Regular,serif ;*/
/*}*/
.para-last:hover{
  color: #D23535;
  font-size: 22px ;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.content-sep, hr{
  margin-top: 25%;
  color: #FFFFFF;
  margin-left: 2%;
  margin-right: 2%;
}

.foot{
  text-align: center;
  color: #ffffff;
}
@media (max-width: 990px) {
  .support-header{
    font-size: 30px;
    padding-bottom: 8px;
  }
  .support-subheader{
    font-size: 18px;
  }
  i{
    font-size: 38px;
  }
  p{
    font-size: 15px;
  }
  .para-last{
    padding-bottom: 10%;
    font-size: 20px;
  }
  .content-sep, hr{
    margin-left: unset;
    margin-right: unset;
  }
  .support{
    text-align: center;
    padding-top: 7%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    border-radius: 15px;
  }
}
@media (max-width: 550px) {
  .support-header{
    font-size: 18px;
  }
  .support-subheader{
    font-size: 15px;
  }
  .para-last{
    font-size: 13px;
    width: 100%;
  }
  .foot{
    font-size: 11px;
  }
  .para-last:hover{
    font-size: 15px ;
  }
}
</style>

