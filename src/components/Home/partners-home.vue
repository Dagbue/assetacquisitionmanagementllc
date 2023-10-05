<template>
<div class="section-alpha">

  <h1>Our Partners</h1>

  <div class="section-1">

<!--    <marquee-text :duration="15">-->

    <a href="https://coinmarketcap.com/"><img src="https://seeklogo.com/images/C/coinmarketcap-logo-5DD5521DC6-seeklogo.com.png"></a>

    <a href="https://www.binance.com/en"><img src="https://seeklogo.com/images/B/binance-exchange-logo-6592EBF48C-seeklogo.com.png"></a>

    <a href="https://www.coindesk.com/"><img src="https://seeklogo.com/images/C/coindesk-logo-C8CDEB939F-seeklogo.com.png"></a>

    <a href="https://www.coinfield.com/"><img src="https://seeklogo.com/images/C/coinfield-logo-2158716023-seeklogo.com.png"></a>

    <a href="https://crypto.com/"><img src="https://seeklogo.com/images/C/crypto-com-logo-F41F0F9CA2-seeklogo.com.png"></a>


<!--    </marquee-text>-->

  </div>


</div>
</template>

<script>
// import MarqueeText from "vue-marquee-text-component";
export default {
  name: "partners-home",
  components: {  },
}
</script>

<style scoped>
img{
  width: 90%;
  padding-right: 35px;
}

a{
  width: 100%;
}

h1{
  text-align: center;
  padding-top: 4%;
  padding-bottom: 1%;
  margin-bottom: 0;
  color: #fff;
}

.section-alpha{
  padding-bottom: 5%;
  padding-top: 0;
  margin-top: 0;
}

.section-1{
  display: flex;
  justify-content: center;
  padding-top: 30px;
  margin-left: 4%;
}

@media (max-width: 500px) {
  img{
    width: 75%;
    padding-bottom: 6%;
  }

  .section-1{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-left: 21%;
  }

}
</style>

