<template>

  <div class="outer">

    <div  class="sidebar" v-show="!mobile">
<!--      <img alt="company logo" src="@/assets/companylogo.svg" class="footer-img" />-->
      <div class="user">ADMIN</div>
      <ul class="nav-list">

        <li>
          <i class='bx bx-search-alt' ></i>
          <input type="text" placeholder="Search..">
        </li>
        <li>
          <a>
            <i class='bx bxs-home'></i>
            <router-link to="/user-list" class="links-name">List Of Users</router-link>
          </a>
        </li>
<!--        <li>-->
<!--          <a>-->
<!--            <i class='bx bxs-user'></i>-->
<!--            <router-link to="/admin-dashboard" class="links-name">User Login</router-link>-->
<!--          </a>-->
<!--        </li>-->
        <li>
          <a>
            <i class='bx bx-line-chart-down'></i>
            <router-link to="/investments" class="links-name">Investments</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bx-line-chart' ></i>
            <router-link to="/deposit-request" class="links-name">Deposit Request</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bxs-briefcase' ></i>
            <router-link to="/withdrawal-request" class="links-name">Withdrawal Request</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bxs-user'></i>
            <router-link to="/list-of-users" class="links-name">User Information</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bx-credit-card' ></i>
            <router-link to="/referral-bonus" class="links-name">DashBoard View</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bxs-wallet' ></i>
            <router-link to="/change-password-2" class="links-name">Change Password</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bxs-package' ></i>
            <router-link to="/add-new-user" class="links-name">Add New User</router-link>
          </a>
        </li>

        <button @click="handleClick"  class="logout">Logout</button>
      </ul>
    </div>

    <div class="dropdown-nav-2" v-show="mobileNav" >
      <div class="icon-2">
        <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>
      </div>
      <ul>

        <li>
          <a>
            <i class='bx bxs-home'></i>
            <router-link to="/user-list" class="">List Of Users</router-link>
          </a>
        </li>
<!--        <li>-->
<!--          <a>-->
<!--            <i class='bx bxs-user'></i>-->
<!--            <router-link to="/admin-dashboard" class="">User Login</router-link>-->
<!--          </a>-->
<!--        </li>-->
        <li>
          <a>
            <i class='bx bx-line-chart-down'></i>
            <router-link to="/investments" class="">Investments</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bx-line-chart' ></i>
            <router-link to="/deposit-request" class="">Deposit Request</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bxs-briefcase' ></i>
            <router-link to="/withdrawal-request" class="">Withdrawal Request</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bxs-user'></i>
            <router-link to="/list-of-users" class="">User Information</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bx-credit-card' ></i>
            <router-link to="/referral-bonus" class="">DashBoard View</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bxs-wallet' ></i>
            <router-link to="/change-password-2" class="">Change Password</router-link>
          </a>
        </li>
        <li>
          <a>
            <i class='bx bxs-package' ></i>
            <router-link to="/add-new-user" class="">Add New User</router-link>
          </a>
        </li>

        <button @click="handleClick"  class="logout">Logout</button>
      </ul>
    </div>

  </div>

  <DashContent>
    <router-view v-slot="{ Component, route }">
      <transition name="route" mode="out-in">
        <div :key="route.name">
          <div class="icon">
            <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>
          </div>
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>
  </DashContent>
</template>

<script>
import { useStore } from 'vuex'
// import {computed} from "vue";
import router from "@/router";
import DashContent from "@/components/BaseComponents/dash/DashContent";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Admin",
  components: {DashContent},
  setup() {
    const store = useStore()
    const handleClick = async () => {
      await store.dispatch('logout')
      await router.push('/admin')
      await location.reload()
    }
    return { handleClick,
      // user: computed(() => store.state.user),
      // authIsReady: computed(() => store.state.authIsReady)
    }
  },
  data()  {
    return {
      mobile: false,
      mobileNav: false,
      windowWidth: false,
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },
    toggleMobileNav2(){
      this.mobileNav = false;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 990){
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      return;
    }
  }
}
</script>

<style scoped>
.outer{
  display: flex;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  position: relative;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
}
.sidebar{
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 300px;
  background: rgba(34, 34, 34, 1);
  /*border: 2px solid black;*/
  padding: 6px 20px 37px;
}
.sidebar ul li{
  position: relative;
  height: 50px;
  width: 100%;
  margin: 0 4px;
  list-style: none;
  line-height: 25px;
}
.sidebar ul li input{
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  border-radius: 12px;
  outline: none;
  border: none;
  background: aliceblue;
  padding-left: 50px;
  font-size: 18px;
  color: black;
}
.sidebar ul li .bx-search-alt{
  position: absolute;
  z-index: 99;
  color: black;
  font-size: 22px;
}
.sidebar ul li a{
  color: grey;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  border-radius: 5px;
  font-size: 16px;
}
.sidebar ul li a:hover{
  color: #D23535;
  background: aliceblue;
}
.sidebar ul li a:active{
  color: #D23535;
  background: aliceblue;
}
.sidebar ul li  i{
  height: 50px;
  min-width: 50px;
  border-radius: 12px;
  line-height: 50px;
  text-align: center;
}
i{
  font-size: 25px;
}

.logout:hover {
  background-color: #FB4E4E;
  border-color: #FB4E4E;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.logout{
  padding: 11px 70px;
  margin-left: 30px;
  margin-top: 10px;
  border-radius: 5px;
  color: white;
  background-color: #D23535;
  border: 1px solid #D23535;
}
.user{
  color: #FFFFFF;
  font-size: 18px;
  text-align: center;
  padding-top: 10px;
}
.back-login{
  margin-right: 40px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  padding: 50px;
  text-decoration: none;
  font-size: 20px;
  border-radius: 5px;
  color: #fff;
  background-color: #282E3BC7;
}
.back-home{
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  margin-left: 30px;
  padding: 50px;
  text-decoration: none;
  font-size: 20px;
  background-color: #282E3BC7;
  border-radius: 5px;
  color: #fff;
}

.nav-list{
  margin-top: 20px;
}

.final{
  margin-left: 28%;
  margin-top: 18%;
  display: flex;
}
.links-name{

}


.dropdown-nav-2{
  display: flex;
  list-style: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  padding-right: 7%;
  width: 100%;
  max-width: 280px;
  height: 100%;
  background-color: #071333;
  font-size: 17px;
  text-align: center;
}

.dropdown-nav-2 li {
  overflow: hidden;
  list-style: none;
  font-weight: bold;
}

.dropdown-nav-2 ul {
  padding-top: 10px;
}

.dropdown-nav-2 a {
  padding: 0.3em 0;
  color: #ffffff;
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
  margin: 0;
  text-decoration: none;
}

.dropdown-nav-2 a:before,
.dropdown-nav-2 a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.dropdown-nav-2 a:after {
  padding: 0.3em 0;
  position: absolute;
  bottom: 100%;
  left: 0;
  content: attr(data-hover);
  color: #ffffff;
  white-space: nowrap;
}

.dropdown-nav-2 li:hover a,
.dropdown-nav-2.current a {
  color: #D23535;
}

.logo-container {
  display: inline-block;
}
.footer-img {
  width: 80%;
  border-radius: 18px;
}

.bx-menu{
  font-size: 38px;
  cursor: pointer;
  transition: .8s ease all;
}
.icon-active{
  transform: rotate(180deg);
}

@media (max-width: 990px) {
  .logout{
    padding: 9px 60px;
    margin-left: 15px;
    margin-top: 13px;
    border-radius: 20px;
  }
  .icon-2{
    padding-left: 90%;
    color: white;
  }
  i{
    font-size: 20px;
    padding-right: 5px;
  }
  .icon{
    overflow-y: unset;
  }

}

@media (max-width: 550px) {
  .dropdown-nav-2{
    padding-right: 5%;
    max-width: 210px;
    font-size: 15px;
  }
  .icon-2{
    padding-left: 80%;
  }
  .dropdown-nav-2 ul {
    padding-top: unset;
  }
  .logout{
    padding: 8px 50px;
  }

}
</style>
