<template>
  <template v-if="!$route.meta.hideNavigation" >

    <div class="topmost-header">
        <div class="topmost-header-1">
          <p class="topmost-header-text">
            <i class='bx bxs-map' ></i>
            C/O Taac, LLC, 3 Lone Oak Circle, Ladera Ranch CA 92694
          </p>
          <p class="topmost-header-text">
            <i class='bx bxs-time-five' ></i>Mon – Sat: 9:00am–18:00pm.
          </p>
          <p class="topmost-header-text">
            <i class='bx bxs-phone' ></i>+1 (702) 861-1481
          </p>
        </div>
      </div>

    <div class="separate">

      <div class="style-4">

        <img alt="company logo" src="@/assets/companylogo.svg" class="logo" />

        <ul class="menu-4" v-show="!mobile">
          <li class="link"><router-link  to="/home" class="link-2">HOME</router-link></li>
          <li class="link"><router-link  to="/about" class="link-2">COMPANY PORTFOLIO</router-link></li>
          <li class="link"><router-link  to="/pricing" class="link-2">INVESTMENT PLAN</router-link></li>
<!--          <li class="link"><router-link  to="/market-view" class="link-2">MARKETS</router-link></li>-->
          <li class="link"><router-link  to="/contact" class="link-2">CONTACT</router-link></li>
          <li class="link"><router-link  to="/faq" class="link-2">F.A.Q</router-link></li>
          <li class="link"><router-link  to="/register" class="auth">SIGNUP</router-link></li>
          <li class="link"><router-link  to="/" class="auth">LOGIN</router-link></li>
        </ul>

      </div>

      <div class="mobile">
        <div>
          <ul class="dropdown-nav" v-show="mobileNav">
            <img alt="company logo" src="@/assets/companylogo.svg" class="logo2" />
            <li @click="toggleMobileNav2"><router-link  to="/home" >HOME</router-link></li>
            <li @click="toggleMobileNav2"><router-link  to="/about" >COMPANY PORTFOLIO</router-link></li>
            <li @click="toggleMobileNav2"><router-link  to="/pricing" >INVESTMENT PLAN</router-link></li>
<!--            <li @click="toggleMobileNav2"><router-link  to="/market-view" >MARKETS</router-link></li>-->
            <li @click="toggleMobileNav2"><router-link  to="/contact" >CONTACT</router-link></li>
            <li @click="toggleMobileNav2"><router-link  to="/faq" >F.A.Q</router-link></li>
            <li @click="toggleMobileNav2"><router-link  to="/register" >SIGNUP</router-link></li>
            <li @click="toggleMobileNav2"><router-link  to="/" >LOGIN</router-link></li>
          </ul>


        </div>
        <div class="icon">
          <i @click="toggleMobileNav" class='bx bx-menu' v-show="mobile" :class="{'icon-active' : mobileNav}"></i>
        </div>
      </div>

    </div>


  </template>
</template>

<script>
export default {
  name: "NavigationView",
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
    }
  }
}
</script>

<style scoped>

.bx-menu{
  font-size: 30px;
  margin-top: 10px;
  cursor: pointer;
  transition: .8s ease all;
  color: #FFFFFF;
}
.icon-active{
  transform: rotate(180deg);
}

.logo {
  width: 14%;
  margin-left: 4%;
}

.style-4 {
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}

.link {
  display: inline-block;
  list-style: outside none none;
  margin: 0 1.3em;
  overflow: hidden;
  font-weight: bold;
  font-size: 13.5px;
}

.link-2:hover{
  border-bottom: 1px solid #D23535;
}

.auth{
  background-color: #D23535;
  color: #FFFFFF;
  padding: 0.4em 15px;
  border-radius: 5px;
  position: relative;
  display: inline-block;
  margin: 0;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
}


.link-2 {
  padding: 0.3em 0;
  color: #FFFFFF;
  position: relative;
  display: inline-block;
  margin: 0;
  text-decoration: none;
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
}


.topmost-header {
  background-color: #FFFFFF;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #071333;
  display: flex;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.topmost-header-1 {
  display: flex;
  margin-left: 4%;
}

.topmost-header-text {
  font-size: 12px;
  padding-right: 28px;
  display: flex;
  align-items: center;
  align-content: center;
}
i{
  padding-right: 4px;
  font-size: 14px;
}

.dropdown-nav{
  display: flex;
  align-items: center;
  align-content: center;
  list-style: none;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  max-width: 270px;
  height: 100%;
  background-color: #344054;
  font-size: 19px;
  text-align: left;
  padding-left: 20px;
}

.logo2{
  width: 100%;
  padding-top: 10px;
}

.dropdown-nav li {
  margin-top: 12%;
  overflow: hidden;
  list-style: none;
  height: 100%;
}

.dropdown-nav * {
  box-sizing: border-box;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
.dropdown-nav a {
  padding: 0.3em 0;
  color: #FFFFFF;
  position: relative;
  display: inline-block;
  letter-spacing: 1px;
  margin: 0;
  text-decoration: none;
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
  background-color: #D23535;
}

.dropdown-nav a:after {
  padding: 0.3em 0;
  position: absolute;
  bottom: 100%;
  left: 0;
  content: attr(data-hover);
  color: #676767;
  white-space: nowrap;
}

.dropdown-nav li:hover a,
.dropdown-nav.current a {
  color: #D23535;
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
}

.separate{
  display: flex;
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
  .logo {
    width: 16%;
    margin-left: unset;
    padding-left: unset;
  }
}

@media (max-width: 600px) {
  .bx-menu{
    font-size: 35px;
    margin-top: 6.5px;
  }
  .logo {
    min-width: 40%;
    margin-left: unset;
    padding-left: unset;
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