<template>
<div>

  <div class="section-1">
    <h1 class="section-1-header">Choose your Plan</h1>
    <p class="section-1-para">Pick the best plan that meets your business needs.
      A free trial is available to help you with the decision-making.</p>
    <button class="section-1-btn" @click="showDialog">GET STARTED</button>
    <base-modal3 @click="handleSubmit" v-if="dialogIsVisible">

        <div class="modal-select">
          <label>Please select a Plan</label>
          <select  name="selected" v-model="selected" required>
            <option value="" ></option>
            <option value="STANDARD" >STANDARD</option>
            <option value="PREMIUM">PREMIUM</option>
            <option value="DELUXE">DELUXE</option>
          </select>

          <label>Please select Daily ROI</label>
          <select  name="selected" v-model="ROI" required>
            <option value="" ></option>
            <option value="10" >STANDARD</option>
            <option value="30">PREMIUM</option>
            <option value="50">DELUXE</option>
          </select>
          <button @click="handleSubmit" class="btn-sub">Proceed to Deposit</button>
        </div>


    </base-modal3>
  </div>


  <div class="section-alpha">
    <div class="box">
      <div class="color">
        <h4 class="color-header">STANDARD</h4>
        <h2 class="text-1">10%</h2>
        <p class="text-1">4 MONTHS</p>
      </div>
      <p class="text">$1000 MINIMUM DEPOSIT</p>
      <p class="text">ENHANCED SECURITY</p>
      <p class="text">5% DAILY</p>
      <p class="text">GUARANTEED ROI</p>
      <p class="text">24/7 SUPPORT</p>
<!--      <button class="btn btn-white btn-animated" @click.prevent="">Invest Now</button>-->
    </div>

    <div class="box">
      <div class="color">
        <h4 class="color-header">PREMIUM</h4>
        <h2 class="text-1">30%</h2>
        <p class="text-1">8 MONTHS</p>
      </div>
      <p class="text">$5000 MINIMUM DEPOSIT</p>
      <p class="text">ENHANCED SECURITY</p>
      <p class="text">10% DAILY</p>
      <p class="text">GUARANTEED ROI</p>
      <p class="text">24/7 SUPPORT</p>
<!--      <button class="btn btn-white btn-animated" @click.prevent="onPostClick">Invest Now</button>-->
    </div>

    <div class="box">
      <div class="color">
        <h4 class="color-header">DELUXE</h4>
        <h2 class="text-1">50%</h2>
        <p class="text-1">12 MONTHS</p>
      </div>
      <p class="text">$10,000 MINIMUM DEPOSIT</p>
      <p class="text">ENHANCED SECURITY</p>
      <p class="text">15% DAILY</p>
      <p class="text">GUARANTEED ROI</p>
      <p class="text">24/7 SUPPORT</p>
<!--      <button class="btn btn-white btn-animated" @click.prevent="onPostClick">Invest Now</button>-->
    </div>
  </div>


</div>
</template>

<script>
import BaseModal3 from "@/components/BaseComponents/modal/BaseModal3";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {getAuth} from "firebase/auth";
import {doc, getFirestore, setDoc} from "firebase/firestore";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Pacakages",
  components: {BaseModal3},
  data() {
    return {
      dialogIsVisible: false,
    }
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    // handleSubmit() {
    //   router.push("/deposit")
    // }
  },

  setup() {
    const selected = ref('')
    const  ROI = ref('')
    const error = ref(null)

    const router = useRouter()

    const handleSubmit = async () => {
      try {
        // noinspection JSUnresolvedFunction,JSCheckFunctionSignatures
        setDoc(doc(db, auth.currentUser.email, "USER"), {
          selected: selected.value,
          ROI: ROI.value,
        },{ merge: true })
            .then(() => {
              console.log('saved again')
            })

        setDoc(doc(db, "Investment" ,auth.currentUser.email), {
          selected: selected.value,
        },{ merge: true })
            .then(() => {
              console.log('saved again')
            })
        await router.push('/deposit')
      }
      catch (err) {
        error.value = err.message
      }
    }

    const auth = getAuth();
    const db = getFirestore();

    return {
      selected, handleSubmit, error,
      ROI
    }

  }
}
</script>

<style scoped>

.section-1{
  display: flex;
  justify-content: space-evenly;
  padding-top: 5%;
  padding-bottom: 4%;
}

.section-1-header{
  width: 25%;
  font-size: 32px;
  color: #D23535;
}
.section-1-para{
  width: 35%;
  font-size: 17px;
  color: #D23535;
  line-height: 1.5;
}
.section-1-btn{
  width: 20%;
  padding: 0 15px;
  margin-right: 20px;
  border-radius: 5px;
  color: white;
  background-color: #D23535;
  border: 1px solid #D23535;
  font-size: 16px;
}

.section-1-btn:hover{
  color: #071333;
  background-color: #FFFFFF;
  border: 1px solid #D23535;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}
i{
  font-size: 24px;
  color: #D23535;
}

span{
  font-weight: 700;
  font-size: 20px;
}
h3{
  color: #FFFFFF;
  font-weight: 700;
  font-size: 25px;
}
.btn-sub{
  padding: 10px 20px;
  margin-right: 50px;
  margin-left: 50px;
  border-radius: 5px;
  font-size: 15px;
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
.modal-select{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 3%;
}

label{
  font-size: 20px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 10px;
}

select{
  padding-top: 7px;
  padding-bottom: 7px;
  border-radius: 5px;
  margin-bottom: 7%;
  font-weight: bold;
}

option{
  padding-bottom: 22px;
  font-size: 16px;
}

.box{
  /*background-color: #071333;*/
  box-shadow: 0 0 12px #313131;
  padding: 90px;
  padding-left: 60px;
  padding-right: 60px;
  border-radius: 5px;
  margin-bottom: 12px;
  margin-top: 3%;
  text-align: center;
  margin-right: 2%;
  margin-left: 2%;
}
.box:hover {
  box-shadow: 0 0 12px #313131;
  transition: 4ms ease-in;
}

.section-alpha{
  display: flex;
  justify-content: space-evenly;
}

.section-alpha-1{
  display: block;
  text-align: center;
}

.color-header{
  color: #ffffff;
  letter-spacing: 1px;
  font-weight: bold;
}

.color{
  padding-bottom: 15px;
}

.text{
  color: white;
  padding-bottom: 10px;
  padding-top: 10px;
  font-size: 17px;
  border-bottom: 4px solid #626B7F;
  letter-spacing: 1.5px;
}

.text-1{
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
}





@media (max-width: 990px) {
  .section-1-header{
    width: 20%;
    font-size: 28px;
  }
}

@media (max-width: 550px) {
  .section-1-header{
    width: unset;
    font-size: 20px;
    text-align: center;
  }
  .section-1-para{
    width: unset;
    font-size: 15px;
    margin-left: 12px;
    margin-right: 7px;
  }
  .section-1-btn{
    width: unset;
    padding: 10px 22px;
    margin-right: unset;
    border-radius: 5px;
    font-size: 14px;
  }
  .section-alpha{
    display: block;
    justify-content: space-evenly;
  }
  h3{
    font-size: 20px;
  }
}

</style>

