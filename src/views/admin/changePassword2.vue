<template>
<div>
  <h3 class="user-info-header">
    Change Password
  </h3>
  <form @submit.prevent="onPostClick">
    <div class="bank-trans">
      <div class="bank-trans-form">
        <input type="password" placeholder="Enter Old Password" required="" name="bank-name"  />
      </div>
      <div class="bank-trans-form2">
        <input type="password" placeholder="Enter New Password" required="" name="bank-name" />
      </div>
      <div class="bank-trans-form2">
        <input type="password" placeholder="Confirm New Password" required="" name="bank-name"  />
      </div>
    </div>
    <button class="bank-trans-btn">Submit</button>
  </form>
</div>
</template>

<script>


export default {
  name: "changePassword2",

  methods: {
    onPostClick() {
      alert("Password Successfully Changed")
      this.$router.push('/user-list');
    }
  },
}
</script>

<style scoped>
.user-info-header{
  margin-top: 3%;
  font-size: 27px;
  text-align: center;
  color: #ffffff;
}
.bank-trans{
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background: rgba(34, 34, 34, 1);
  color: #FFFFFF;
  margin: 4% 17% 1.5% 13%;
  padding: 5% 5% 7% 6%;
  border-radius: 5px;
}

.bank-trans-form{
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
}
.bank-trans-form2 {
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}
input{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  border-radius: 5px;
}
select{
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 10px;
  background-color: rgba(247, 247, 249, 1);
  border: none;
  border-radius: 5px;
}

.bank-trans-btn{
  padding: 11px 66px;
  color: white;
  background-color: #D23535;
  border: 1px solid #D23535;
  border-radius: 5px;
  display: block;
  margin-right: auto;
  margin-left: auto;
}
.bank-trans-btn:hover{
  color: #071333;
  background-color: #ffffff;
  border: 1px solid #D23535;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
div{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
