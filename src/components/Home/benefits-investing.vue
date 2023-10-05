<template>
  <div class="section-2">
    <h1 class="section-2-header">Benefits of Investing with us</h1>
    <div class="section-2-content">
      <div class="section-2-content-alpha">
        <img src="https://img.icons8.com/office/512/deposit.png" alt="logo"/>
        <h3 class="section-2-content-header">Fast Deposit</h3>
        <p>To make a deposit, please log in to your account Dashbaord.</p>
      </div>
      <div class="section-2-content-alpha">
        <img src="https://img.icons8.com/plasticine/512/24-hours-day-support.png" alt="logo"/>
        <h3 class="section-2-content-header">Efficient Support</h3>
        <p>To ensure we give you the best of what we have to offer, we have taken time to select well
          experienced customer care agents .</p>
        <a @click.prevent="onPostClick" class="btn btn-white btn-animated">CREATE ACCOUNT</a>
      </div>
      <div class="section-2-content-alpha">
        <img src="https://img.icons8.com/office/512/withdrawal.png" alt="logo"/>
        <h3 class="section-2-content-header">Instant Withdrawal</h3>
        <p>Instant Withdrawal With the Instant Withdrawal option, your money saved in Digit can arrive back
          to your bank account in a matter of minutes</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "benefits-investing",
  methods: {
    onPostClick() {
      this.$router.push("/register");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>
.section-2{
  height: 100%;
  /*padding-bottom: 10px;*/
}

.section-2-header{
  text-align: center;
  padding-top: 6%;
  font-size: 32px;
  background: rgba(34, 34, 34, 0.5);
  color: #ffffff;
  margin-bottom: 0;
  font-weight: bold;
}

.section-2-content{
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  text-align: center;
  padding: 3% 8% 5%;
  background: rgba(34, 34, 34, 0.5);
  color: #676767;
  margin-top: 0;
}


.section-2-content-header{
  font-size: 28px;
  letter-spacing: 1px;
  padding-top: 20px;
  font-weight: bold;
  color: #ffffff;
}

p{
  padding-top: 10px;
  line-height: 1.5;
  color: #ffffff;
}

.section-2-content-alpha{
  padding-right: 15px;
  width: 33%;
  line-height: 27px;
}

.section-2-content-alpha img {
  width: 35%;
}


.btn:hover {
  background-color: #ffffff;
  border: 1px solid #D23535;
  color: #071333;
  transition: 4ms ease-in;
}
.btn-white {
  background-color:  #D23535;
  border: 1px solid #D23535;
  color: white;
  font-size: 13px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 45px;
  margin-top: 10%;
  display: inline-block;
  transition: all .2s;
  position: relative;
  border-radius: 5px;
}

@media (max-width: 990px) {
  .section-2-header{
    font-size: 25px;
  }
  img{
    width: 28%;
  }
  .section-2-content-header{
    font-size: 25px;
  }
  p{
    font-size: 16px;
  }
}

@media (max-width: 550px) {
  .section-2-content{
    display: block;
    height: 100%;
  }
  .section-2-content-alpha{
    width: unset;
  }
  .section-2{
    height: 100%;
  }
  .btn-white {
    display: none;
  }
  .section-2-header{
    font-size: 18px;
    padding-top: 20px;
  }
  .section-2-content-header{
    font-size: 19px;
    padding-top: 25px;
  }
}

</style>