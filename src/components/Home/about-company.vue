<template>
  <p class="about-text-1">About Company</p>
<div class="about-alpha" >

  <div class="about-section-1">
    <h4 class="about-header-1">We Help Our Clients To Achieve Their Desired Goals</h4>
    <p class="about-text-2">Asset Acquisition & Management, LLC is designed to trade your investment(s) for your benefit in stocks options, gold and cryptocurrency.
      We ensure a consistent day-by-day profit from your investment(s).</p>

    <div class="box">
    <div class="about-content">
      <i class='bx bx-task'></i>
      <div class="about-content-text">
        <h4>Guaranteed ROI</h4>
        <p>Trading is a difficult task which can result in loss sometimes. Our low ROI rate allows you to be
          compensated every day regardless of market fluctuations. We also provide a bonus if we experience
          negative trends, so there are no worries on your end!</p>
      </div>
    </div>
    </div>
    <div class="box">
    <div class="about-content">
      <i class='bx bx-paper-plane'></i>
      <div class="about-content-text">
        <h4>Our Mission</h4>
        <p>Our goal is to break down barriers between the privileged and lower class by investing in digital
           technologies that are accessible for everybody, regardless of socio-economic status.</p>
      </div>
    </div>
    </div>

    <button class="header-button" @click="onPostClick">Read More</button>



  </div>

  <div class="about-section-2">
    <img alt="About-Image" src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="about-image" />
  </div>

</div>
</template>

<script>
export default {
  name: "about-company",
  methods: {
     onPostClick() {
      this.$router.push("/about");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>
.about-alpha{
  display: flex;
  align-items: center;
  align-content: center;
  padding-bottom: 5%;
}
.about-image{
  width: 92%;
  border-radius: 5px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
  margin-left: 10px;
}
.about-content{
  display: flex;
  padding-top: 15px;
  padding-right: 25px;
}
.about-content-text{
  padding-left: 20px;
}
.about-content-text h4{
  font-weight: bold;
}
.about-content-text p {
  font-size: 17px;
  line-height: 1.5;
}
.about-section-1{
  width: 80%;
  padding-left: 80px;
  padding-right: 20px;
  color: #ffffff;
}
.bx-line-chart{
  font-size: 30px;
}
.box{
  box-shadow: 0 0 7px #313131;
  padding: 10px 10px 30px 10px;
  border-radius: 15px;
  margin-bottom: 20px;
  margin-top: 20px;
}


.about-text-1{
  text-align: center;
  font-size: 32px;
  color: #ffffff;
  font-weight: bold;
  padding-top: 4%;
  padding-bottom: 2%;
}

.about-header-1{
  text-align: center;
  font-weight: bold;
}
.about-text-2{
  font-size: 17px;
}
.about-section-2{
  padding-right: 20px;
}

.header-button{
  padding: 15px 50px;
  background-color: #D23535;
  border: 1px solid #D23535;
  border-radius: 5px;
  margin-top: 5px;
  color: white;
  margin-left: 40px;
}

.header-button:hover {
  transform: translateY(-3px);
  background-color: #ffffff;
  border: 1px solid #D23535;
  color: #071333;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  transition: 4ms ease-in;
}



i{
  font-size: 35px;
  color: #D23535;
  padding-right: 5px;
  padding-left: 5px;
}

.about-content-text h4{
  font-size: 25px;
  color: #ffffff;
}

@media (max-width: 990px) {
  .about-alpha{
    display: flex;
    flex-direction: column-reverse;
  }
  .about-section-1{
    width: 100%;
    padding-left: 3%;
    padding-right: 3%;
  }
  .about-section-2{
    padding-right: unset;
    margin-left: 5%;
  }
  .about-image{
    margin-top: 2%;
    margin-bottom: 3%;
  }
  .about-text-2{
    text-align: center;
  }
  .header-button{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5%;
  }
}
</style>



