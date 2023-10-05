<!--suppress JSCheckFunctionSignatures, UnreachableCodeJS -->
<template>
  <h3 class="user-info-header">
    List of Investments
  </h3>
<div>
  <div class="container mt-3" >
    <table class="table" >
      <thead>
      <tr>
        <th>Email</th>
        <th>Trade Plans</th>
        <th>Account Balance</th>
        <th>Deposit</th>
        <th>Profits</th>
        <th>Bonus</th>
        <th>Ref Bonus</th>
        <th>Withdrawal</th>
      </tr>
      </thead>

      <tbody v-for="items in contacts" :key="items.id">
      <tr>
        <td>{{items.email}}</td>
        <td>{{items.selected}}</td>
        <td>$ {{items.balance}}</td>
        <td>$ {{ items.deposit }}</td>
        <td>$ {{items.profits}}</td>
        <td>$ {{items.bonusMain}}</td>
        <td>$ {{items.bonus}}</td>
        <td>$ {{items.withdrawal}}</td>
      </tr>
      </tbody>
    </table>
  </div>

  <form>
    <div class="fields-alpha-2">
<!--      <label>Select Email</label>-->
      <select class="select-form" v-model="SelectEmail" aria-placeholder="Select Users Email" required>
        <option value="" disabled>Select Users Email</option>
        <option v-for="option in contacts" :key="option" :value="option.email" >
          {{ option.email}}
        </option>
      </select>

<!--      <label>Enter Profit</label>-->
      <input type="number" v-model="profits" placeholder="Enter Profit"/>
      <button class="btn" @click="update1" type="button">Submit</button>

<!--      <label>Enter Bonus</label>-->
      <input type="number" v-model="bonusMain" placeholder="Enter Bonus"/>
      <button class="btn" @click="update2" type="button">Submit</button>

<!--      <label>Enter Ref Bonus</label>-->
      <input type="number" v-model="bonus" placeholder="Enter Ref Bonus"/>
      <button class="btn" @click="update3" type="button">Submit</button>
    </div>
  </form>
</div>

</template>

<script>


import {collection, doc, getDocs, setDoc, increment, query, where } from "firebase/firestore";
import {db} from "@/firebase/config";



export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Investments",
  data () {
    return {
      SelectEmail: "",
      contacts: [],
      profits:"",
      bonus:"",
      bonusMain:"",
    }
  },
  async created() {
    // const querySnapshot2 = await getDocs(collection(db, "Investment"));
    // querySnapshot2.forEach((doc) => {
    //   let data = {
    //     'email': doc.data().email,
    //     'selected': doc.data().selected,
    //     'deposit': doc.data().deposit,
    //     'withdrawal': doc.data().withdrawal,
    //     'profits': doc.data().profits,
    //     'bonus': doc.data().bonus,
    //     'bonusMain': doc.data().bonusMain,
    //     'balance': doc.data().deposit +++ doc.data().profits +++ doc.data().bonus +++ doc.data().bonusMain --- doc.data().withdrawal,
    //   }
    //   this.contacts.push(data)
    // })


    const investmentRef = collection(db, "Investment")
    const q = query(investmentRef, where("statusDeposit", "==", "approved"));

    const querySnapshot3 = await getDocs(q);
    querySnapshot3.forEach((doc) => {
      const data = {
        'email': doc.data().email,
        'selected': doc.data().selected,
        'statusDeposit': doc.data().statusDeposit,
        'deposit': doc.data().deposit,
        'withdrawal': doc.data().withdrawal,
        'profits': doc.data().profits,
        'bonus': doc.data().bonus,
        'bonusMain': doc.data().bonusMain,
        'balance': doc.data().deposit +++ doc.data().profits +++ doc.data().bonus +++ doc.data().bonusMain --- doc.data().withdrawal,
      };
      this.contacts.push(data);
    });


  },

  methods: {
    async update1() {
      await setDoc(doc(db, "Investment" ,this.SelectEmail ), {
        profits: increment(this.profits),
      },{ merge: true })
          .then(() => console.log('investment updated'));

      await setDoc(doc(db,this.SelectEmail, "USER" ), {
        profits: increment(this.profits),
      },{ merge: true })
          .then(() => location.reload());
    },

    async update2() {
      await setDoc(doc(db, "Investment" ,this.SelectEmail ), {
        bonusMain: increment(this.bonusMain),
      },{ merge: true })
          .then(() => console.log('investment updated'));

      await setDoc(doc(db,this.SelectEmail, "USER" ), {
        bonusMain: increment(this.bonusMain),
      },{ merge: true })
          .then(() => location.reload());
    },

    async update3() {
      await setDoc(doc(db, "Investment" ,this.SelectEmail ), {
        bonus: increment(this.bonus),
      },{ merge: true })
          .then(() => console.log('investment updated'));

      await setDoc(doc(db,this.SelectEmail, "USER" ), {
        bonus: increment(this.bonus),
      },{ merge: true })
          .then(() => location.reload());
    },
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

tr td:first-child:before
{
  counter-increment: Serial;      /* Increment the Serial counter */
  content:counter(Serial); /* Display the counter */
}
</style>

