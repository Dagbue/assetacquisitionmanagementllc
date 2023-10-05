<template>
  <div class="alpha">
    <p class="about-text-1">About Company</p>
    <h4 class="about-header-1">We Help Our Clients To Achieve Their Desire Goals</h4>
    <p class="about-text-2"> Asset Acquisition & Management, LLC is a well-developed, secure, and, dependable digital
      Investment platform based on Bittrex's cutting-edge innovation.</p>

    <div class="about-alpha">
      <div class="about-section-1">


        <div class="box">
          <div class="about-content">
            <div class="about-content-text">
              <p>Asset Acquisition & Management, LLC is designed to trade your investment(s) for your benefit in stocks, options, gold, and altcoins. We ensure a consistent day-by-day profit from your investment(s).
                Cryptocurrency is an investment option that has become established among major monetary establishments and even been embraced by nations like Australia and Japan. Nevertheless, similarly as with any venture there are risks connected to market developments! Our semi-automated trading platform helps bring down the dangers associated with this type of activity all the way down to an absolute minimum, but it's a continuous process for our team at Asset Acquisition & Management, LLC. We want such dangers eliminated from cryptocurrency entirely so we will never have to worry about them again.
                We know that sometimes a few out of every odd day is a decent trading, and this is the reason we keep our average ROI low. We can guarantee your day-to-day income even when there are negative trends in the market. You won't be affected by such days as long as you invest with us!
                Our mode of operation has consistently positioned transparency as a basic value. When you put resources into our platform, 20% of your investments are saved in a protected cloud bank made specifically for just you. This cash continues to increase each day at a steady rate and is the place where we get the money to pay when we have negative trade days.
                We take 10% of the total gains on your Investments each day and credit the rest to you as indicated by your chosen plan.</p>
            </div>
          </div>
        </div>






      </div>

      <div class="about-section-2">
        <img alt="About-Image" src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=494&q=80" class="about-image" />
      </div>

    </div>

  </div>

</template>

<script>
export default {
  name: "about-section2"
}
</script>

<style scoped>
.alpha{
  background: rgba(34, 34, 34, 0.5);
}

.about-alpha{
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: row-reverse;
  padding-bottom: 5%;
}
.about-image{
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
  margin-left: 10%;
  margin-top: 15%;
}
.about-content{
  display: flex;
  padding-top: 15px;
  padding-right: 25px;
}
.about-content-text{
  padding-left: 20px;
}
.about-content-text p{
  font-size: 17px;
  line-height: 1.7;
  color: #FFFFFF;
}
.about-section-1{
  width: 80%;
  padding-right: 7%;
  color: #071333;
}

.box{
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 12px;
  margin-top: 5%;
  margin-left: 10%;
  position: relative;
  background-color: #121212;
}

.about-text-1{
  text-align: center;
  font-size: 32px;
  color: #ffffff;
  font-weight: bold;
  padding-top: 4%;
}

.about-header-1{
  text-align: center;
  font-weight: bold;
  color: #ffffff;
}
.about-section-2{
  padding-left: 5%;
}


i{
  font-size: 35px;
  color: #071333;
  padding-right: 15px;
}

.about-content-text h4{
  font-size: 25px;
  color: #071333;
}

.about-text-2{
  text-align: center;
  font-size: 17px;
  color: #ffffff;
}

@media (max-width: 990px) {
  .about-alpha{
    display: flex;
    margin-left: 18%;
    flex-direction: column-reverse;
  }
  .about-section-2{
    padding-left: 1%;
  }
  .about-image{
    width: 63%;
    height: 30%;
    margin-left: 8%;
    margin-top: unset;
  }
  .about-text-2{
    width: 90%;
    margin-left: 4%;
  }
}

@media (max-width: 500px) {
  .box{
    padding: 10px;
    margin-left: unset;
  }
  .about-section-1{
    width: 100%;
    padding-right: 7%;
  }
  .about-alpha{
    margin-left: 10%;
  }
  .about-section-2{
    padding-left: unset;
  }
  .about-image{
    width: 90%;
    height: 30%;
    margin-left: 2%;
  }
  .about-text-2{
    width: 90%;
    margin-left: 4%;
  }
}
</style>

