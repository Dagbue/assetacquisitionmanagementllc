<template>
  <form class="logoIn" @submit.prevent="handleSubmit">
    <div class="wrapper">
      <div class="headline">
        <h1>Sign In</h1>
        <h2>
          With Your
          <span class="header-span">Asset Acquisition & Management </span> LLC Account
        </h2>
      </div>
      <div class="form">
        <div class="logoIn">
          <div class="form-group">
            <input type="email" placeholder="Email" required name="email" v-model="email"  />
          </div>
          <div class="form-group">
            <input type="password" placeholder="Password" required name="password"  v-model="password" />
          </div>

          <div class="form-group-2">
            <input
                type="checkbox"
                placeholder="Remember-Me"
                id="remember-me"
                class="checkbox"
            />
            <label for="remember-me" class="checkbox-text">Remember me</label>
            <a  class="forgot-password" @click.prevent="onPostClick2" >Forgot Password</a>
          </div>

          <button  class="btn btn-white btn-animated">SIGN IN</button>
          <div v-if="error">{{ error }}</div>

          <div class="separator">
            <div class="line"></div>
            <h2>OR</h2>
            <div class="line"></div>
          </div>

          <div class="create-acc">
            <p class="create-text">
              Don’t have an account?<a @click.prevent="onPostClick"
                class="create-link"
            >Sign up here</a
            >
            </p>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: "login-page",
  methods: {
    onPostClick() {
      this.$router.push("/register");
      window.scrollTo(0, 0);
    },
    onPostClick2() {
      this.$router.push("/forgot-password");
      window.scrollTo(0, 0);
    },
  },
  setup() {
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const store = useStore()
    const router = useRouter()
    const handleSubmit = async () => {
      try {
        await store.dispatch('login', {
          email: email.value,
          password: password.value
        })
        await router.push('/dash-home')
      }
      catch (err) {
        error.value = err.message
      }
    }
    return { handleSubmit, email, password, error }
  }
}
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  padding: 2rem;
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
  color: #D23535;
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
  font-size: 30px;
  font-weight: 500;
  line-height: 52px;
  color: #FFFFFF;
}

.wrapper .headline h2 {
  font-weight: 400;
  font-size: 28px;
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #FFFFFF;
}

.wrapper .form {
  max-width: 350px;
  width: 100%;
  margin: auto;
}

.wrapper .form-group {
  margin-bottom: 15px;
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

.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 20px;
  display: inline-block;
  border-radius: 5px;
  transition: all 0.2s;
  position: relative;
}
.btn:hover {
  background-color: #ffffff;
  border: 1px solid #D23535;
  color: #071333;
  transition: 4ms ease-in;
}

.btn-white {
  background-color: #D23535;
  border: 1px solid #D23535;
  color: #FFFFFF;
  font-size: 15px;
}

.form-group-2 {
  padding-top: 15px;
  padding-bottom: 15px;
}

.checkbox-text {
  padding-left: 8px;
  color: #FFFFFF;
}

.forgot-password {
  padding-left: 110px;
  text-decoration: none;
  color: #D23535;
  font-size: 14.5px;
}

.separator {
  display: flex;
  align-items: center;
  padding-top: 10px;
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
  padding-top: 40px;
  font-size: 17px;
  padding-bottom: 40px;
  color: #FFFFFF;
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
}
@media (max-width: 990px) {
  .wrapper .headline h1  {
    font-size: 32px;
  }
  .wrapper .headline h2  {
    font-size: 28px;
  }
}
@media (max-width: 500px) {
  .wrapper {
    padding: 10px 25px 0;
  }
  form {
    margin: 1rem;
    max-width: 40rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    background-color: #ffffff;
  }
  .wrapper .headline h1  {
    font-size: 25px;
  }
  .wrapper .headline h2  {
    font-size: 23px;
  }
  .checkbox-text {
    padding-left: 10px;
  }
  .forgot-password {
    padding-left: 20px;
  }
}

</style>