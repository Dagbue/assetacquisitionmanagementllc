<template>
<div class="alpha">
  <div class="section-alpha-1">
    <h1 class="header">Choose An Investment Plan</h1>
<!--    <i class='bx bx-filter'></i>-->
  </div>

<div class="section-alpha">
  <div class="box">
    <div class="color">
    <h4 class="color-header">STANDARD</h4>
    <h2 class="text-1">10%</h2>
    <p class="text-1">4 MONTHS</p>
    </div>
    <p class="text">$1000 MINIMUM DEPOSIT</p>
    <p class="text">ENHANCED SECURITY</p>
    <p class="text">5% DAILY</p>
    <p class="text">GUARANTEED ROI</p>
    <p class="text">24/7 SUPPORT</p>
    <button class="btn btn-white btn-animated" @click.prevent="onPostClick">Invest Now</button>
  </div>

  <div class="box">
    <div class="color">
    <h4 class="color-header">PREMIUM</h4>
    <h2 class="text-1">30%</h2>
    <p class="text-1">8 MONTHS</p>
    </div>
    <p class="text">$5000 MINIMUM DEPOSIT</p>
    <p class="text">ENHANCED SECURITY</p>
    <p class="text">10% DAILY</p>
    <p class="text">GUARANTEED ROI</p>
    <p class="text">24/7 SUPPORT</p>
    <button class="btn btn-white btn-animated" @click.prevent="onPostClick">Invest Now</button>
  </div>

  <div class="box">
    <div class="color">
    <h4 class="color-header">DELUXE</h4>
    <h2 class="text-1">50%</h2>
    <p class="text-1">12 MONTHS</p>
    </div>
    <p class="text">$10,000 MINIMUM DEPOSIT</p>
    <p class="text">ENHANCED SECURITY</p>
    <p class="text">15% DAILY</p>
    <p class="text">GUARANTEED ROI</p>
    <p class="text">24/7 SUPPORT</p>
    <button class="btn btn-white btn-animated" @click.prevent="onPostClick">Invest Now</button>
  </div>
</div>

</div>
</template>

<script>
export default {
  name: "pricing-body",
  methods: {
    onPostClick() {
      this.$router.push("/register");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>
body{}

.alpha{
  padding-top: 5%;
  padding-bottom: 5%;
}

.bx-filter{
  color: #FF7A8A;
  font-size: 60px;
}

.header{
  color: #ffffff;
  letter-spacing: 1px;
}

.box{
  /*background-color: #071333;*/
  box-shadow: 0 0 12px #313131;
  padding: 90px;
  padding-left: 80px;
  padding-right: 80px;
  border-radius: 5px;
  margin-bottom: 12px;
  margin-top: 3%;
  text-align: center;
}
.box:hover {
  box-shadow: 0 0 12px #313131;
  transition: 4ms ease-in;
}

.section-alpha{
  display: flex;
  justify-content: space-evenly;
}

.section-alpha-1{
  display: block;
  text-align: center;
}

.color-header{
  color: #ffffff;
  letter-spacing: 1px;
  font-weight: bold;
}

.color{
  padding-bottom: 15px;
}

.text{
  color: white;
  padding-bottom: 10px;
  font-size: 17px;
  border-bottom: 4px solid #626B7F;
  letter-spacing: 1.5px;
}

.text-1{
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
}


.btn:hover {
  background-color:  #ffffff;
  border: 1px solid #D23535;
  color: #071333;
}
.btn-white {
  background-color:  #D23535;
  border: 1px solid #D23535;
  color: white;
  font-size: 15px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 50px;
  margin-top: 15%;
  display: inline-block;
  transition: all .2s;
  position: relative;
  border-radius: 5px;
}

@media (max-width: 990px) {
  .section-alpha{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .box{
    margin: 3% 8% 8%;
  }
}

</style>