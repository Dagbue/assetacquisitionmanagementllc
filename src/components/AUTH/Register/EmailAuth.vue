<template>
  <form>
    <div class="wrapper">

      <div class="headline">
        <h2>
          <span class="header-span"> Asset Acquisition & Management, LLC </span>
        </h2>
        <h2>Email Authentication</h2>
        <p class="header-text">Click on the link sent to your email address to verify your email Address</p>
      </div>

      <div class="form">
        <div class="signup">
          <a @click="onPostClick" class="btn btn-white btn-animated">Sign In</a>

          <div class="separator">
            <div class="line"></div>
            <h2>OR</h2>
            <div class="line"></div>
          </div>

          <div class="create-acc">
            <p class="create-text">
              Didnt get any Mail check your spam box or click<a
                class="create-link"
                >Send Again</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "EmailAuth",
  components: {},
  methods: {
    onPostClick() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 5px;
  /*box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);*/
  padding: 0.7rem;
}

:root {
  --primary-color: #3525d3;
  --white-color: #fff;
  --black-color: #3c4a57;
  --light-gray: #e4e8ee;
}

.wrapper {
  position: relative;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px #313131;
  background: rgba(34, 34, 34, 1);
}

.header-span {
  color: #ffffff;
}

.wrapper {
  padding: 50px 25px 0;
  max-width: 768px;
  width: 100%;
  margin: auto;
}

.wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  z-index: -1;
}

.wrapper .headline {
  text-align: center;
  padding-bottom: 48px;
}

.wrapper .headline h1 {
  font-size: 40px;
  font-weight: 500;
  line-height: 52px;
  color: #FFFFFF;
}

.wrapper .headline h2 {
  font-weight: 400;
  font-size: 23px;
  color: #FFFFFF;
  margin-bottom: 1%;
}

.wrapper .headline p {
  font-size: 17px;
  padding-top: 10px;
  color: #FFFFFF;
  width: 78%;
  margin-right: auto;
  margin-left: auto;
}

.wrapper .form {
  max-width: 350px;
  width: 100%;
  margin: auto;
}

.wrapper .form-group input {
  display: block;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.1px;
  padding: 12px 16px;
  height: 48px;
  border-radius: 5px;
  color: var(--black-color);
  border: 1px solid #e4e8ee;
  box-shadow: none;
  width: 100%;
}

.wrapper .form-group input:focus {
  outline: none;
}

.wrapper .form-group input::placeholder {
  color: var(--black-color);
  font-weight: 400;
  font-size: 14px;
}

.btn,
.btn-white,
.btn-animated {
  width: 100%;
  line-height: 35px;
  padding: 12px 29px;
  text-transform: uppercase;
  border: none;
  text-align: center;
  border-radius: 5px;
}


.btn:hover {
  background-color: #ffffff;
  border: 1px solid #D23535;
  color: #071333;
}

.btn-white {
  background-color: #D23535;
  border: 1px solid #D23535;
  color: white;
  font-size: 13px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 8px 19px;
  display: inline-block;
  transition: all 0.3s;
  position: relative;
}

.separator {
  display: flex;
  align-items: center;
  padding-top: 20px;
}

.separator .line {
  height: 1px;
  flex: 0.5;
  background-color: #ffffff;
}

.separator h2 {
  padding: 0 1rem;
  font-size: 13px;
  color: #ffffff;
}

.create-acc {
  padding-top: 30px;
  font-size: 15px;
  padding-bottom: 35px;
  color: #ffffff;
}
.create-text {
  font-size: 17px;
  text-align: center;
}

.create-link {
  padding-left: 10px;
  text-decoration: none;
  color: #D23535;
}


@media (max-width: 1030px) {
  .wrapper::before {
    left: -25%;
    min-height: 60vh;
    height: 500px;
  }
}
@media (max-width: 767px) {
  .wrapper {
    max-width: 550px;
  }
  .wrapper .headline h1 {
    font-size: 22px;
    line-height: 25px;
  }
  @media (max-width: 500px) {
    .wrapper {
      padding: 10px 25px 0;
    }
    form {
      margin: 1rem;
      max-width: 40rem;
      border-radius: 12px;
      padding: 1rem;
      background-color: #ffffff;
    }
    .wrapper .headline h1  {
      font-size: 28px;
    }
    .wrapper .headline h2  {
      font-size: 25px;
    }
  }
}
</style>
