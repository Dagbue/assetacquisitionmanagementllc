<template>
<div class="section-alpha">

  <p class="section-header-1">What We Offer</p>
  <p class="section-header">Making sure our clients can operate safely and calmly is a top priority. We are constantly adding new offerings
     that will give you a better, more diverse investment experience, accessible from anywhere and on any device.</p>

  <div class="section-content">

    <div class="section-content-1" >
      <div class="box">
        <img src="@/assets/assets.png" class="about-image-2" alt="assets-image"/>
        <h5>Multi-Asset Platform</h5>
        <p>Stocks,ETFs,Crypto,indices and more</p>
      </div>
      <div class="box">
        <img src="@/assets/commission.png" class="about-image-3" alt="assets-image"/>
        <h5>0% Commission</h5>
        <p>On stocks,ETFs and Competitive trading fees</p>
      </div>
      <div class="box">
        <img src="@/assets/insurance.png" class="about-image" alt="assets-image"/>
        <h5>Free Insurance</h5>
        <p>up to 1 million Euro/GBP/AUD</p>
      </div>
    </div>

    <div class="section-content-1" >
      <div class="box">
        <img src="@/assets/social.png" class="about-image" alt="assets-image"/>
        <h5>Social Trading</h5>
        <p>A community of millions of users</p>
      </div>
      <div class="box">
        <img src="@/assets/experts.png" class="about-image-1" alt="assets-image"/>
        <h5>Investing With Experts</h5>
        <p>Unique portfolios and the ability to copy top traders</p>
      </div>
      <div class="box">
        <img src="@/assets/padlock.png" class="about-image" alt="assets-image"/>
        <h5>Protecting Your Funds</h5>
        <p>And also personal information</p>
      </div>
    </div>


  </div>

</div>
</template>

<script>
export default {
  name: "what-we-offer"
}
</script>

<style scoped>

.section-alpha{
  background: rgba(34, 34, 34, 0.5);
  padding-bottom: 4%;
}

.section-header{
  font-size: 18px;
  color: #FFFFFF;
  text-align: center;
  font-weight: 300;
  margin-left: 20%;
  margin-right: 20%;
}
.section-header-1{
  font-size: 32px;
  color: #FFFFFF;
  font-weight: bold;
  padding-top: 3%;
  text-align: center;
}

.box{
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 12px;
  margin-top: 4%;
  box-shadow: 0 0 5px #313131;
}



.section-content-1{
  display: flex;
  justify-content: space-evenly;
}

.about-image{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}
.about-image-1{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 30%;
}
.about-image-2{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 37%;
}
.about-image-3{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 29%;
}

.box h5{
  padding-top: 20px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
}

.box p{
  color: #ffffff;
  text-align: center;
}

@media (max-width: 500px) {
  .section-content-1{
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }
  .box{
    margin-left: 10%;
    margin-right: 10%;
  }
}
</style>

