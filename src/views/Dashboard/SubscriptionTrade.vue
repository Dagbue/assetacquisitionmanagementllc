<template>
<dash-content>
  <div>
    <h1 class="history-header">SUBSCRIPTION TRADE</h1>
    <div class="support">
      <h1 class="support-header">Asset Acquisition & Management LLC </h1>
      <p class="support-subheader">Don’t have time to trade or learn how to trade? Our Account Management Service is
        The Best Profitable Trading Option for you, We can help you to manage your account in the financial MARKET
        with a simple subscription model. Terms and Conditions apply Reach us at <span> support@assetacquisitionmanagementllc.com </span> for
        more info.</p>
      <p class="para-last">
        <button class="one" @click="showDialog">Subscribe Now</button>
        <button class="two" @click="showDialog2" >Submit  MT4 Details</button>
      </p>
    </div>


    <base-modal @close="hideDialog" v-if="dialogIsVisible" class="subscribe">
      <h1 class="subscribe-header">Subscription payment</h1>
      <form>
        <div class="three">
        <label class="subscribe-label">Duration</label>
        <select id="method" name="select duration" class="subscribe-select">
          <option value="volvo">select duration</option>
          <option value="saab">Monthly</option>
          <option value="fiat">Quarterly</option>
          <option value="fiat">Yearly</option>
        </select>
        </div>
        <div class="four">
        <label class="subscribe-amount">Enter Amount</label>
        <input type="text" placeholder="Enter Amount" required="" name="bank-name"  class="subscribe-input" />
        </div>
      </form>
      <button @click="hideDialog" class="btn-sub">Close</button>
      <button @click="hideDialog" class="btn-sub2">Pay Now</button>
    </base-modal>

    <base-modal2 @close="hideDialog" v-if="dialogIsVisible2" class="subscribe">
      <h1 class="subscribe-header">Submit your MT4 Login Details</h1>
      <form>
        <div class="five">
          <label class="subscribe-mt4">MT4 ID:</label>
          <input type="text" placeholder="" required="" name="bank-name"  class="mt4-input" />
        </div>
        <div class="five">
          <label class="subscribe-mt4">MT4 Password:</label>
          <input type="password" placeholder="" required="" name="bank-name"  class="mt4-input" />
        </div>
        <div class="five">
          <label class="subscribe-mt4">Account Type:</label>
          <input type="text" placeholder="E.g.Standard" required="" name="bank-name"  class="mt4-input" />
        </div>
        <div class="five">
          <label class="subscribe-mt4">Currency:</label>
          <input type="text" placeholder="E.g.USD" required="" name="bank-name"  class="mt4-input" />
        </div>
        <div class="five">
          <label class="subscribe-mt4">Leverage:</label>
          <input type="text" placeholder="E.g.1:500" required="" name="bank-name"  class="mt4-input" />
        </div>
        <div class="five">
          <label class="subscribe-mt4">Server:</label>
          <input type="text" placeholder="E.g.HantechGlobal-live" required="" name="bank-name"  class="mt4-input" />
        </div>
        <div class="five">
          <label class="subscribe-mt4">Duration</label>
          <select id="method" name="select duration" class="mt4-select">
            <option value="volvo">select duration</option>
            <option value="saab">Monthly</option>
            <option value="fiat">Quarterly</option>
            <option value="fiat">Yearly</option>
          </select>
        </div>

      </form>
      <button @click="hideDialog2" class="btn-sub">SUBMIT</button>
      <button @click="hideDialog2" class="btn-sub2">Close</button>
    </base-modal2>

<!--    <div class="content-sep">-->
<!--      <hr class="line">-->
<!--      <p class="foot">© 2009 Asset Acquisition & Management, LLC | All Rights Reserved</p>-->
<!--    </div>-->
  </div>
</dash-content>
</template>

<script>
import DashContent from "@/components/BaseComponents/dash/DashContent";
import BaseModal from "@/components/BaseComponents/modal/BaseModal";
import BaseModal2 from "@/components/BaseComponents/modal/BaseModal2";
export default {
  name: "SubscriptionTrade",
  components: {BaseModal2, DashContent, BaseModal},
  data() {
    return {
      dialogIsVisible: false,
      dialogIsVisible2: false,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    showDialog2() {
      this.dialogIsVisible2= true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    hideDialog2() {
      this.dialogIsVisible2 = false;
    },
  },
}
</script>

<style scoped>
.history-header{
  padding-top: 4%;
  font-size: 27px;
  color: #D23535;
  text-align: center;
}
.support{
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background: rgba(34, 34, 34, 1);
  padding-right: 6%;
  padding-top: 5%;
  color: #FFFFFF;
  margin-left: 10%;
  margin-right: 8%;
  margin-top: 3%;
  border-radius: 5px;
}
.support-header{
  font-size: 23px;
  padding-bottom: 10px;
  padding-left: 20px;
}
.support-subheader{
  font-size: 17px;
  padding-bottom: 10px;
  padding-left: 60px;
  line-height: 1.5;
}

i{
  font-size: 47px;
  color: #D23535;
}
p{
  font-size: 15px;
  padding-bottom: 10px;
}
.para-last{
  padding-bottom: 8%;
  padding-top: 4%;
}
.one{
  padding: 15px 30px;
  margin-right: 20px;
  border-radius: 5px;
  color: white;
  background-color: #D23535;
  border: 1px solid #D23535;
}
.one:hover{
  color: #071333;
  background-color: #FFFFFF;
  border: 1px solid #D23535;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.two:hover{
  color: #071333;
  background-color: #FFFFFF;
  border: 1px solid #D23535;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.two{
  padding: 15px 30px;
  border-radius: 5px;
  color: white;
  background-color: #D23535;
  border: 1px solid #D23535;
}

hr{
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 1%;
}
.subscribe-header{
  font-size: 25px;
  color: #fff;
}
select{
}
.three{
  display: flex;
  flex-direction: column;
}
.four{
  display: flex;
  flex-direction: column;
}
.subscribe-label{
  margin-top: 12px;
  color: #fff;
}
.subscribe-amount{
  margin-top: 12px;
  color: #fff;
}
.subscribe-input{
  margin-bottom: 25px;
}
.btn-sub{
  padding: 10px 25px;
  margin-right: 20px;
  border-radius: 5px;
  color: white;
  background-color: #D23535;
  border: 1px solid #D23535;
}
.btn-sub:hover{
  color: #071333;
  background-color: #FFFFFF;
  border: 1px solid #D23535;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.btn-sub2{
  padding: 10px 25px;
  border-radius: 5px;
  color: white;
  background-color: #D23535;
  border: 1px solid #D23535;
}
.btn-sub2:hover{
  color: #071333;
  background-color: #FFFFFF;
  border: 1px solid #D23535;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.subscribe-select{
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 5px;
  margin-top: 5px;
  background-color: rgba(247, 247, 249, 1);
  border-radius: 5px;
}
.subscribe-input{
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 5px;
  margin-top: 5px;
  background-color: rgba(247, 247, 249, 1);
  border-radius: 5px;
}
.five{
  display: flex;
  flex-direction: column;
}
.subscribe-mt4{
  padding-top: 10px;
  color: #FFFFFF;
}
.mt4-input{
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 5px;
  margin-top: 5px;
  background-color: rgba(247, 247, 249, 1);
  border-radius: 5px;
}
.mt4-select{
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 5px;
  margin-top: 5px;
  background-color: rgba(247, 247, 249, 1);
  border-radius: 5px;
  margin-bottom: 22px;
}
.content-sep {
  margin-top: 21%;
  color: white;
  margin-left: 5%;
  margin-right: 5%;
}
.foot{
  text-align: center;
  padding-top: 5px;
}
span{
  color: #D23535;
}

@media (max-width: 550px) {
  .history-header{
    margin-left: 10%;
    font-size: 22px;
  }
  .support-header{
    font-size: 20px;
    padding-left: 15px;
  }
  .support-subheader{
    font-size: 16px;
    padding-left: 30px;
    line-height: 1.5;
  }
  .para-last{
    display: flex;
    margin-left: 12px;
  }
  .one{
    padding: 7px 30px;
    margin-right: 20px;
    margin-left: 20px;
    border-radius: 5px;
    font-size: 13px;
  }
  .two{
    display: none;
  }
  .foot{
    font-size: 11px;
  }
  .btn-sub{
    padding: 8px 22px;

  }
  .btn-sub2{
    padding: 8px 22px;

  }
  .support{
    margin-left: unset;
    margin-right: unset;
  }
}
</style>

