<!--suppress JSCheckFunctionSignatures, JSUnresolvedFunction -->
<template>
<div>
  <h3 class="user-info-header">
    Deposit Requests
  </h3>
  <div class="fields-alpha"  >
    <div class="container mt-3" >

      <table class="table" >
        <thead>
        <tr>
          <th>Email</th>
          <th>Amount(€)</th>
          <th>Payment Mode</th>
          <th>Status</th>
<!--          <th>createdAt</th>-->
        </tr>
        </thead>

        <tbody v-for="child in history" :key="child.key">
        <tr>
          <td>{{child.email}}</td>
          <td>{{child.deposit}}</td>
          <td>{{child.depositMethod}}</td>
          <td>{{child.statusDeposit}}</td>
<!--          <td>{{child.createdAt}}</td>-->
        </tr>
        </tbody>
      </table>


    </div>
  </div>
  <form>
    <div class="fields-alpha-2">
      <label>Select Users Email</label>
      <select class="select-form" v-model="SelectEmail" aria-placeholder="Select Value" required>
        <option v-for="option in history" :key="option" :value="option.email" >
          {{ option.email}}
        </option>
      </select>

      <button class="btn" @click="update" type="button">Approve</button>
      <button class="btn" @click="deletee" type="button">Decline</button>
    </div>
  </form>
</div>
</template>

<script>


import {database, db,} from "@/firebase/config";
import {onValue, remove, ref } from "firebase/database";
import {doc, setDoc} from "firebase/firestore";
import router from "@/router";


export default {
  name: "depositRequest",
  data () {
    return {
      SelectEmail: "",
      history: [],
      statusUpdate:"approved",
      statusUpdate2:"declined",
      depositValue: 0
    }
  },

  async created() {
    const HistoryRef = ref(database, "/DepositRequests");
    onValue(HistoryRef, (snapshot) => {
      let _history = [];
      snapshot.forEach((child) => {
        const key = child.key;
        const data = child.val()
        _history.push({
          key: key,
          depositMethod: data.depositMethod,
          deposit: data.deposit,
          email: data.email,
          createdAt: data.createdAt,
          statusDeposit: data.statusDeposit,
        })
      })
      this.history = _history;
    })

  },


  methods: {
    async update() {
      await setDoc(doc(db, this.SelectEmail, "USER"), {
        statusDeposit: this.statusUpdate,
      }, {merge: true})
      await setDoc(doc(db, "Investment", this.SelectEmail), {
        statusDeposit: this.statusUpdate,
      }, {merge: true})
      await remove(ref(database, "DepositRequests/"))
          .then(() => {
            router.push("/investments")
          });
    },



    async deletee() {

      await setDoc(doc(db, "Investment", this.SelectEmail), {
        invested: this.depositValue,
        statusDeposit: this.statusUpdate2,
      }, {merge: true})

      await setDoc(doc(db, this.SelectEmail, "USER"), {
        invested: this.depositValue,
        statusDeposit: this.statusUpdate2,
      }, {merge: true})

      await remove(ref(database, "DepositRequests/"))
          .then(() => {
            router.push("/investments")
          });
    }
  }

}
</script>

<style scoped>
.user-info-header{
  letter-spacing: 1px;
  padding-top: 4%;
  padding-bottom: 2%;
  text-align: center;
}

label{
  color: white;
  padding-right: 5px;
  padding-left: 5px;
}

.btn{
  padding: 5px 15px;
  border-radius: 5px;
  margin-left: 1%;
  color: white;
  background-color: #D23535;
  border:1px solid #D23535;
}

.btn:hover{
  color: #071333;
  background-color: #ffffff;
  border:1px solid #D23535;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

input{
  margin-left: 20px;
}


.fields-alpha-2{
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background: rgba(34, 34, 34, 1);
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  margin-left: 1%;
  margin-right: 1%;
  border-radius: 12px;
  margin-top: 2%;



}

label{
  color: white;
  padding-right: 10px;
}

.btn{
  padding: 5px 20px;
  border-radius: 5px;
  color: white;
  background-color: #D23535;
  border:1px solid #D23535;
  margin-left: 2%;
}

.btn:hover{
  color: #071333;
  background-color: #ffffff;
  border:1px solid #D23535;
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}

.user-info-header{
  padding-top: 3%;
  text-align: center;
  color: #FFFFFF;
}





.fields-alpha{
  /*box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);*/
  /*background-color: #282E3BC7;*/
  padding-top: 20px;
  padding-bottom: 50px;
  margin-left: 3%;
  margin-right: 2%;
  border-radius: 15px;
  text-align: center;
}
hr{
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 1%;
}

table {
  border-collapse: collapse;
  width: 100%;
}
.table{
  /*margin-left: 2%;*/
  /*margin-right: 3%;*/
  /*margin-top: 2%;*/
}

tr{
  border: 1px solid #E3EBF6;
}

th {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background: rgba(34, 34, 34, 1);
  padding: 10px;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
}

td {
  /*border: 1px solid #E3EBF6;*/
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 12px 8px;
  /*letter-spacing: 1px;*/
  color: #ffffff;
  font-weight: 200;
  font-size: 15px;
  /*border-bottom: 1px solid #E3EBF6;*/
}

/*tr td:first-child:before*/
/*{*/
/*  counter-increment: Serial;      !* Increment the Serial counter *!*/
/*  content:counter(Serial); !* Display the counter *!*/
/*}*/
</style>
