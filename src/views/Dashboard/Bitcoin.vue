<template>
  <dash-content>
<!--    <router-view v-slot="{ Component }">-->
<!--      <transition name="route" mode="out-in">-->
<!--        <component :is="Component"></component>-->
<!--      </transition>-->
<!--    </router-view>-->
    <form>
      <div class="bank-trans">
        <div class="bank-trans-form2">
          <label>Select Wallet For Deposit</label>
          <select  v-model="selected2" aria-required="">
            <option value="bc1q8gx3z6m6lmpzp0msct7pnxphfc3eclfg8mdxtm">Bitcoin</option>
            <option value="0xD1A7C5b9dE8E059f808d672cB5cB6CE9D0515511">Ethereum</option>
            <option value="TPbVte82HnstXZjfrkhoZnPh6jnySYsDYt">USDT Tron</option>
          </select>
        </div>
        <div class="bank-trans-form">
          <label class="crypto-label">Copy The Wallet Address</label>
          <h1 class="crypto">{{ selected2 }}</h1>
        </div>
        <p class="note">KINDLY NOTE: After making your deposit,Kindly send a screenshot/proof of deposit to
          <span class="note-span"><a href="mailto:support@assetacquisitionmanagementllc.com" class="para-last">support@assetacquisitionmanagementllc.com</a></span> for documentation and to boost the funding process
        </p>
      </div>
      <router-link to="/dash-board" class="bank-trans-btn" @click="message">Done</router-link>
    </form>
<!--    <div class="content-sep">-->
<!--      <hr class="line">-->
<!--      <p class="foot">© 2009 Asset Acquisition & Management, LLC | All Rights Reserved</p>-->
<!--    </div>-->
  </dash-content>
</template>

<script>
import DashContent from "@/components/BaseComponents/dash/DashContent";
import router from "@/router";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Bitcoin",
  components: {DashContent},
  data() {
    return {
      selected2: ""
    }
  },
  methods: {
    async message() {
      await alert("Deposit Request Sent");
      await router.push('/dash-board')
    }
  }
}
</script>

<style scoped>
.bank-trans{
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background: rgba(34, 34, 34, 1);
  color: #FFFFFF;
  margin-top: 8%;
  margin-right: 22%;
  margin-left: 13%;
  padding: 5% 5% 5% 6%;
  border-radius: 5px;
}
.bank-trans-form{
  display: flex;
  flex-direction: column;
}
.bank-trans-form2 {
  display: flex;
  flex-direction: column;
}
input{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: aliceblue;
  border: none;
  border-radius: 5px;
  font-size: 17px;
}
select{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: aliceblue;
  border: none;
  border-radius: 5px;
  font-size: 17px;
}
option{
  font-size: 18px;
  font-weight: bold;
  line-height: 1;
}
label{
  padding-bottom: 12px;
  font-size: 19px;
  color: #ffffff;
  font-weight: 700;
}

.content-sep {
  margin-top: 25%;
  color: white;
  margin-left: 5%;
  margin-right: 5%;
}
.foot{
  text-align: center;
  padding-top: 5px;
}
.crypto{
  background-color: white;
  color: #071333;
  padding: 18px;
  border-radius: 5px;
  font-size: 18px;
  letter-spacing: 1px;
}
option{
  font-size: 17px;
}
.crypto-label{
  padding-top: 15px;
  padding-bottom: 8px;
  font-size: 17px;
  color: #ffffff;
}
.note{
  text-align: center;
  padding-top: 6%;
  font-size: 16px;
  line-height: 1.2;
  color: #D23535;
}
.note-span{
  color: #D23535;
  font-size: 16px;
  font-weight: 700;
}

.bank-trans-btn{
  margin-left: 17%;
  padding: 15px 85px;
  color: white;
  background-color: #D23535;
  border: 1px soliD #D23535;
  border-radius: 5px;
  font-size: 17px;
  text-decoration: none;
}
.bank-trans-btn:hover{
  color: #071333;
  background-color: #FFFFFF;
  border: 1px soliD #D23535;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}


.para-last{
  padding-bottom: 10%;
  list-style: none;
  text-decoration: none;
  color: #FFFFFF;
}

.para-last:hover{
  font-size: 17.5px;
  font-weight: bold;
  transition:font-size 4ms ease-in;
}

@media (max-width: 550px) {
  .bank-trans{
    margin-right: unset;
    margin-left: unset;
  }
  .note-span{
    width: 100%;
  }

  .crypto{
    padding: 14px;
    border-radius: 15px;
    font-size: 12px;
    letter-spacing: unset;
  }
}
</style>
