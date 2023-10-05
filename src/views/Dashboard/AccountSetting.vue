<template>
<dash-content>
  <div class="settings-alpha">
  <h1 class="header-settings">Account Settings</h1>
  <div class="settings-links">
    <router-link to="/change-password" class="account-links">Change Password</router-link>
    <router-link to="/update-account" class="account-links2">Update Account</router-link>
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
<!--    <div class="content-sep">-->
<!--      <hr class="line">-->
<!--      <p class="foot">© 2022 Trading Assets Limited | All Rights Reserved</p>-->
<!--    </div>-->
  </div>
</dash-content>
</template>

<script>
import DashContent from "@/components/BaseComponents/dash/DashContent";
export default {
  name: "AccountSetting",
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
  font-size: 24px;
  color: #D23535;
  text-transform: uppercase;
}
.settings-links{
  margin-top: 2%;
}
.account-links{
  text-decoration: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background: rgba(34, 34, 34, 1);
  padding: 15px 35px;
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


.account-links2{
  text-decoration: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background: rgba(34, 34, 34, 1);
  padding: 15px 35px;
  margin-right: 2%;
  color: #ffffff;
  text-transform: uppercase;
  border-radius: 5px;
  font-size: 15px;
}
.account-links2:hover{
  background-color: #D23535;
  border-color: #D23535;
  color: #fff;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.content-sep {
  margin-top: 8%;
  color: white;
  margin-left: 5%;
  margin-right: 5%;
}
.foot{
  text-align: center;
  padding-top: 5px;
}


@media (max-width: 990px) {
  .header-settings{
    font-size: 22px;
    margin-left: 15px;
  }
  .content-sep, hr{
    margin-left: unset;
    margin-right: unset;
    font-size: 14px;
  }
}
@media (max-width: 550px) {
  .header-settings{
    font-size: 17px;
  }
  .account-links{
    padding: 15px 30px;
    margin-right: unset;
    font-size: 12px;
  }
  .account-links2{
    padding: 15px 30px;
    margin-right: unset;
    font-size: 12px;
  }
  .foot{
    font-size: 11px;
  }
}
</style>
