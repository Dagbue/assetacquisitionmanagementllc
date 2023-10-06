<template>
  <div class="the-footer">
    <div class="bit">

      <div class="livecoinwatch-widget-5" lcw-base="USD" lcw-color-tx="#999999" lcw-marquee-1="coins" lcw-marquee-2="movers" lcw-marquee-items="10" ></div>

    </div>
    <div class="bottom">
      <div class="logo-container">
<!--        <img src="@/assets/companylogo.svg" alt="logo" class="footer-img" />-->

          <div class="footer-link-container">
            <h3 class="footer-title">About Us</h3>
            <p class="footer-link">
              Asset Acquisition & Management, LLC incorporated on 30 September 2009. Located at C/O Taac, LLC, 3 Lone Oak Circle, Ladera Ranch CA 92694 is legally
              registered with company house with company number  0001473009 is a
              secure,reliable and advanced digital asset trading platform
              developed for international customers and built on Bittrex’s
              cutting-edge technology We are proud to provide cutting-edge
              expertise in areas of Financial Administration,Risk Management with
              Investment and Return Provisioning.
            </p>
          </div>

          <div class="footer-link-container2">
            <h3 class="footer-title">Links</h3>
            <a  class="footer-link" @click="onPostClick">Home</a>
            <a  class="footer-link" @click="onPostClick2">Login</a>
            <a  class="footer-link" @click="onPostClick3">Register</a>
            <a  class="footer-link" @click="onPostClick4">F.A.Q</a>
            <a  class="footer-link" @click="onPostClick5">Contacts</a>
            <a href="https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001473009&owner=include&count=40&hidefilings=0" class="footer-link">Certifications</a>
          </div>

          <div class=" stay-connected">
            <h3 class="footer-title">Stay connected</h3>
            <div class="socials-container">
              <div class="social-logo">
                <div class="last-div">
                  <i class='bx bxs-phone' ></i>
                  <p class="last-div-para">+1 (830) 444-9374</p>
                </div>
              </div>
              <div class="social-logo">
                <div class="last-div">
                  <i class='bx bxs-map' ></i>
                  <p class="last-div-para">C/O Taac, LLC, 3 Lone Oak Circle, Ladera Ranch CA 92694</p>
                </div>
              </div>
              <div class="social-logo">
                <div class="last-div">
                  <i class='bx bx-mail-send' style='color:#ffffff'></i>
                  <p class="last-div-para">support@assetacquisitionmanagementllc.com</p>
                </div>
              </div>
            </div>
          </div>
      </div>

    </div>
    <hr />
    <p class="copyright">
      © 2009 Asset Acquisition & Management, LLC | All Rights Reserved
    </p>
  </div>
</template>

<script >
export default {
  name: "footer-home",
  methods: {
    onPostClick() {
      this.$router.push("/home");
      window.scrollTo(0, 0);
    },
    onPostClick2() {
      this.$router.push("/");
      window.scrollTo(0, 0);
    },
    onPostClick3() {
      this.$router.push("/register");
      window.scrollTo(0, 0);
    },
    onPostClick4() {
      this.$router.push("/faq");
      window.scrollTo(0, 0);
    },
    onPostClick5() {
      this.$router.push("/contact");
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', "https://www.livecoinwatch.com/static/lcw-widget.js")
    document.head.appendChild(externalScript)
  },
}
</script>

<style scoped>
.the-footer {
  background: rgba(34, 34, 34, 0.4);
  color: #ffffff;
  padding: 4vh  2vh;
  margin-top: 3%;
}

.logo-container {
  display: flex;
  padding-top: 2%;
}

.footer-title {
  font-size: 22px;
  line-height: 20px;
  padding-bottom: 5px;
}

.footer-link {
  display: block;
  font-size: 17px;
  line-height: 25px;
  opacity: 0.8;
  padding-top: 10px;
}

.footer-link-container {
  margin-left: 5%;
  margin-right: 5%;
  width: 50%;
}

.footer-link-container2{
  padding-right: 5%;
}
.stay-connected{

}
.socials-container {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-top: 20px;
  width: 100%;
}
.social-logo {
}

hr {
  color: white;
  width: 100%;
  background-color: white;
  border: 1px solid white;
  opacity: 0.15;
  margin-top: 80px;
}

.copyright {
  font-size: 14px;
  /*line-height: 12px;*/
  text-align: center;
  opacity: 0.75;
  margin-top: 20px;
  padding-bottom: 0;
  margin-bottom: 0;
}
.footer-img {
  width: 22%;
}
a {
  text-decoration: none;
  color: white;
  transition: ease 0.3s;
}
a:hover{
  color: #D23535;
}

.bit{
  margin-bottom: 25px;
}
.bx {
  font-size: 28px;
}
.bx-mail-send{
}
.last-div{
  display: flex;
  margin-bottom: 15px;
}
.last-div-para{
  font-size: 16px;
  padding-left: 10px;
  line-height: 1.3;
}

.footer-title{
  color: #fff;
  /*font-size: 30px;*/
  font-weight: bold;
}

@media (max-width: 990px) {
  .footer-link-container {
    margin-left: 2%;
    margin-right: 3%;
    width: 80%;
  }
}
@media (max-width: 760px) {
  .bottom {
    display: block;
    align-content: center;
    text-align: center;
  }
  .footer-container {
    display: block;
    align-content: center;
    text-align: center;
  }
  .the-footer {
    margin-top: unset;
  }
  .footer-img {
    width: 50%;
    min-width: unset;
    border-radius: 20px;
    margin-bottom: 20px;
  }
  .footer-link-container {
    margin-left: unset;
    margin-right: unset;
    width: unset;
    margin-bottom: 15%;
    margin-top: 10%;
  }
  .footer-link-container2 {
    margin-bottom: 18%;
  }
  .last-div{
    margin-right: 10%;
    margin-bottom: unset;
  }
  .copyright{
    font-size: 17px;
  }
}
@media (max-width: 500px) {
  .footer-link-container {
    margin-left: unset;
    margin-right: unset;
    width: unset;
  }
  .footer-link {
    display: block;
    font-size: 16px;
  }
  .footer-title {
    font-size: 21px;
    padding-bottom: unset;
  }

  .footer-img {
    width: 50%;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .copyright{
    font-size: 13px;
  }
  .bx{
    font-size: 18px;
  }
  .last-div-para{
    font-size: 16px;
    padding-left: 8px;
  }
  .logo-container {
    display: flex;
    flex-direction: column;
    padding-top: 2%;
  }
}
</style>

