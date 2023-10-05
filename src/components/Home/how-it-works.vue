<template>
  <h3 class="text-section-header">How It Works </h3>
  <p class="text-section-parah">Follow these easy steps to start working with us </p>
<div class="section-alpha">

  <div class="text-section">
    <div class="text-section-inner">
      <i class='bx bx-user-check'></i>
      <div class="text-section-inner-text">
        <h4>Create an Account</h4>
        <p>Account creation is easy and straightforward. Also, it's totally free to open an account with us.</p>
      </div>
    </div>

    <div class="text-section-inner">
      <i class='bx bx-wallet-alt'></i>
      <div class="text-section-inner-text">
        <h4>Invest</h4>
        <p>After registration, simply login into the dashboard, click on the "invest" option and select a plan to invest.</p>
      </div>
    </div>

    <div class="text-section-inner">
      <i class='bx bxs-bank'></i>
      <div class="text-section-inner-text">
        <h4>Earn and Withdraw</h4>
        <p>You get to see your earnings increase after 24 hours of investing. Your account keeps maximizing daily profits within contract duration. You can easily withdraw clicking on the withdraw option.</p>
      </div>
    </div>
    <button class="header-button" @click="onPostClick">Get Started</button>

  </div>

  <div class="image-section">
    <img alt="About-Image" src="https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="about-image" />
  </div>

</div>
</template>

<script>
export default {
  name: "how-it-works",
  methods: {
    onPostClick() {
      this.$router.push("/register");
      window.scrollTo(0, 0);
    },
  },
}
</script>

<style scoped>

.image-section{
  margin-left: 4%;
}

.section-alpha{
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding-bottom: 5%;
  flex-direction: row-reverse;
  padding-top: 2%;
}

.text-section-inner{
  display: flex;
  box-shadow: 0 0 5px #313131;
  padding: 20px;
  /*padding-top: 16px;*/
  border-radius: 5px;
  margin-bottom: 10px;
}

.text-section{
  width: 80%;
  padding-left: 20px;
  padding-right: 30px;
  color: #676767;
  padding-top: 1%;
}

.text-section-header{
  text-align: center;
  font-size: 32px;
  color: #ffffff;
  font-weight: bold;
  padding-top: 3%;
}

.text-section-parah{
  text-align: center;
  font-size: 22px;
  color: #ffffff;
}

i{
  font-size: 48px;
  color: #D23535;
  padding-right: 15px;
}

.about-image{
  width: 95%;
  border-radius: 5px;
  margin-top: 30px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
}

.text-section-inner-text h4{
  color: #ffffff;
  font-size: 20px;
}

.text-section-inner-text p{
  font-size: 18px;
  padding-right: 20px;
}

.header-button{
  padding: 15px 60px;
  background-color: #D23535;
  border: 1px solid #D23535;
  border-radius: 5px;
  margin-top: 12px;
  color: white;
}

.header-button:hover {
  background-color: #ffffff;
  border: 1px solid #D23535;
  color: #071333;
}

@media (max-width: 990px) {
  .section-alpha{
    display: flex;
    flex-direction: column;
  }
  .text-section{
    width: 100%;
    padding-left: 3%;
    padding-right: 3%;
  }
  .about-section-2{
    /*padding-right: unset;*/
    /*margin-left: 5%;*/
    display: none;
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

