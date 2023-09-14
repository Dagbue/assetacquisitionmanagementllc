<template>
  <template v-if="!$route.meta.hideNavigation">
    <div class="topmost-header" v-if="$route.name !== 'DashHome'" >
      <div class="topmost-header-1">
        <p class="topmost-header-text">
          <i class='bx bxs-map' ></i>
          C/O Taac, LLC, 3 Lone Oak Circle, Ladera Ranch CA 92694
        </p>
        <p class="topmost-header-text">
          <i class='bx bxs-time-five' ></i>Mon – Sat: 9:00am–18:00pm.
        </p>
        <p class="topmost-header-text">
          <i class='bx bxs-phone' ></i>+1 (830) 444-9374
        </p>
      </div>
    </div>

    <div class="style-4" v-if="$route.name !== 'DashHome'" >

    <img alt="company logo" src="../src/assets/companylogo.svg" class="logo" />

    <ul class="menu-4" v-show="!mobile">
      <li><router-link  to="/">HOME</router-link></li>
      <li><router-link  to="/about">ABOUT</router-link></li>
      <li><router-link  to="/pricing">INVESTMENT PLANS</router-link></li>
      <li><router-link  to="/contact">CONTACT</router-link></li>
      <li><router-link to="/faq">F.A.Q</router-link></li>
      <li><router-link  to="/register">REGISTER</router-link></li>
      <li><router-link  to="/login">LOGIN</router-link></li>
    </ul>

    <transition name="mobile-nav">

      <ul class="dropdown-nav" v-show="mobileNav">
        <li @click="toggleMobileNav2"><router-link  to="/">HOME</router-link></li>
        <li @click="toggleMobileNav2"><router-link  to="/about">ABOUT</router-link></li>
        <li @click="toggleMobileNav2"><router-link  to="/pricing">INVESTMENT PLANS</router-link></li>
        <li @click="toggleMobileNav2"><router-link  to="/contact">CONTACT</router-link></li>
        <li @click="toggleMobileNav2"><router-link to="/faq">F.A.Q</router-link></li>
        <li @click="toggleMobileNav2"><router-link  to="/register">REGISTER</router-link></li>
        <li @click="toggleMobileNav2"><router-link  to="/login">LOGIN</router-link></li>
        <hr />
        <p class="copyright">
          © 2022 Assets & Equity Limited | All Rights Reserved
        </p>
      </ul>


    </transition>

    <div class="icon">
      <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>
    </div>

  </div>

  </template>

  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

</template>

<script>


export default {
  data()  {
    return {
      value1: false,
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
    },

  }

};
</script>



<style>

.logo {
  height: 11%;
  width: 15%;
  margin-left: 2%;
  margin-top: 0.4%;
}

.style-4 {
  display: flex;

  padding-left: 5%;
  padding-top: 5px;
}

.menu-4 {
  padding-top: 2%;
  padding-left: 2%;

}
.menu-4 * {
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.menu-4 li {
  display: inline-block;
  list-style: outside none none;
  margin: 0 1.6em;
  overflow: hidden;
  font-family: GTEestiProDisplay-bold, serif;
  padding-right: 8px;
  padding-left: 15px;
  font-size: 14px;
}
.menu-4 a {
  padding: 0.3em 0;
  color: #071333;
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
  margin: 0;
  text-decoration: none;
  font-family: GTEestiProDisplay-bold, serif;
}

.menu-4 a:before,
.menu-4 a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.menu-4 a:before {
  bottom: 100%;
  display: block;
  height: 3px;
  width: 100%;
  content: "";
}

.menu-4 a:after {
  padding: 0.3em 0;
  position: absolute;
  bottom: 100%;
  left: 0;
  content: attr(data-hover);
  color: #676767;
  white-space: nowrap;
}

.menu-4 li:hover a,
.menu-4 .current a {
  color: #FF7A8A;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  cursor: pointer;
}
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 1s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 1s ease-in;
}
@font-face {
  font-family: "GTEestiProDisplay-Bold";
  src: local("GTEestiProDisplay"),
  url("fonts/GTEestiProDisplay/GTEestiProDisplay-Bold.woff") format("woff");
}
@font-face {
  font-family: "GTEestiProDisplay-Light";
  src: local("GTEestiProDisplay"),
  url("fonts/GTEestiProDisplay/GTEestiProDisplay-Light.woff") format("woff");
}
@font-face {
  font-family: "GTEestiProDisplay-Medium";
  src: local("GTEestiProDisplay"),
  url("fonts/GTEestiProDisplay/GTEestiProDisplay-Medium.woff") format("woff");
}
@font-face {
  font-family: "GTEestiProDisplay-Regular";
  src: local("GTEestiProDisplay"),
  url("fonts/GTEestiProDisplay/GTEestiProDisplay-Regular.woff") format("woff");
}
@font-face {
  font-family: "GTEestiProDisplay-Thin";
  src: local("GTEestiProDisplay"),
  url("fonts/GTEestiProDisplay/GTEestiProDisplay-Thin.woff") format("woff");
}

.topmost-header {
  background-color: #071333;
  padding-top: 5px;
  color: white;
  display: flex;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.topmost-header-1 {
  display: flex;
  margin-left: 12%;
}

.topmost-header-text {
  font-size: 13px;
  padding-right: 28px;
  font-family: GTEestiProDisplay-Regular, serif;
  display: flex;
  padding-bottom: 3px;
  margin-bottom: 3px;
}

i{
  padding-right: 4px;
  font-size: 14px;
  margin-top: 3px;
}



.dropdown-nav{
  display: flex;
  list-style: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  padding-right: 7%;
  width: 100%;
  max-width: 300px;
  height: 100%;
  background-color: #071333;
  font-size: 19px;
  text-align: center;
}

.dropdown-nav li {
  margin-top: 8%;
  overflow: hidden;
  list-style: none;
  font-family: GTEestiProDisplay-Regular, serif;
  font-weight: bold;
  height: 100%;
}

.dropdown-nav * {
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.dropdown-nav a {
  padding: 0.3em 0;
  color: #fff;
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
  margin: 0;
  text-decoration: none;
  font-family: GTEestiProDisplay-Regular, serif;
}

.dropdown-nav a:before,
.dropdown-nav a:after {
  position: absolute;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.dropdown-nav a:before {
  bottom: 100%;
  display: block;
  height: 3px;
  width: 100%;
  content: "";
  background-color: #FF7A8A;
}

.dropdown-nav a:after {
  padding: 0.3em 0;
  position: absolute;
  bottom: 100%;
  left: 0;
  content: attr(data-hover);
  color: #fff;
  white-space: nowrap;
}

.dropdown-nav li:hover a,
.dropdown-nav.current a {
  color: #FF7A8A;
}

hr {
  color: white;
  width: 100%;
  background-color: white;
  border: 1px solid white;
  margin-top: 95px;
}


.copyright {
  font-size: 15px;
  line-height: 15px;
  text-align: center;
  opacity: 0.75;
  color: white;
  margin-top: 20px;
  font-family: GTEestiProDisplay-Regular, serif;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to{
  transform: translateX(-250px);
}

.mobile-nav-enter-to{
  transform: translateX(0);
}



@media (min-width: 1286px) {
  .hamburger {
    display: none;
  }
  /*.menu-4{*/
  /*  display: flex;*/
  /*}*/
}

@media (max-width: 861px) {
  .topmost-header {
    display: none;
  }
}

@media (max-width: 990px) {
  .style-4 {
    display: flex;
    justify-content: space-between;
  }
}

@media (max-width: 550px) {
  .bx-menu{
    font-size: 40px;
    margin-top: 7px;
  }
  .logo {
    width: 35%;
    margin-left: unset;
  }

  .dropdown-nav{
    padding-right: 10%;
    max-width: 220px;
    font-size: 12px;
  }

  .dropdown-nav li {
    margin-top: 8%;
  }

  hr {
    margin-top: 95%;
  }

  .copyright {
    font-size: 10px;
    margin-top: 6px;
  }

}

</style>
