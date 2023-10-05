<template>
  <dash-content>
    <div class="settings-alpha">
      <h1 class="header-settings">Transaction History</h1>
      <div class="settings-links">
        <router-link to="/deposit2" class="account-links">Deposit</router-link>
        <router-link to="/withdrawal2" class="account-links">Withdrawal</router-link>
        <router-link to="/roihistory2" class="account-links-last">Referral Bonus</router-link>
        <router-view v-slot="{ Component }">
          <transition name="route" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </div>
    </div>
  </dash-content>
</template>

<script>
import DashContent from "@/components/BaseComponents/dash/DashContent";
export default {
  name: "TransactionHistory",
  components: {DashContent}
}
</script>

<style scoped>
.settings-alpha{
  text-align: center;
  padding-top: 40px;
}
.header-settings{
  padding-bottom: 20px;
  font-size: 23px;
  color: #D23535;
}
.settings-links{
  margin-top: 2%;
}
.account-links{
  text-decoration: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background: rgba(34, 34, 34, 1);
  padding: 10px 35px;
  margin-right: 2%;
  color: #ffffff;
  text-transform: uppercase;
  border-radius: 5px;
  font-size: 15px;
}
.account-links:hover{
  background-color: #D23535;
  border-color: #D23535;
  color: #fff;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}


.account-links-last{
  text-decoration: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background: rgba(34, 34, 34, 1);
  padding: 10px 35px;
  margin-right: 2%;
  color: #ffffff;
  text-transform: uppercase;
  border-radius: 5px;
  font-size: 15px;
}
.account-links-last:hover{
  background-color: #D23535;
  border-color: #D23535;
  color: #fff;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}


@media (max-width: 990px) {

  .content-sep, hr{
    margin-left: unset;
    margin-right: unset;
  }
  .foot{
    font-size: 15px;
  }

  .header-settings{
    font-size: 22px;
  }
}
@media (max-width: 550px) {
  .header-settings{
    font-size: 18px;
  }
  .account-links{
    padding: 15px 30px;
    margin-right: 5px;
    margin-left: 5px;
    font-size: 12px;
  }
  .account-links-last{
    display: none;
  }
  .foot{
    font-size: 11px;
  }
}
</style>


