<template>
<div>
  <h3 class="user-info-header">
    List Of Users
  </h3>
  <div class="fields-alpha"  >
    <div class="container mt-3" >
      <table class="table"  >
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Country</th>
          <th>Mobile Number</th>
          <th>Password</th>
<!--          <th>Referral Email</th>-->
          <th>Date Created</th>
        </tr>
        </thead>

        <tbody v-for="items in contacts" :key="items.id">
        <tr>
          <td>{{items.firstName}}</td>
          <td>{{items.lastName}}</td>
          <td>{{items.email}}</td>
          <td>{{items.country}}</td>
          <td>{{items.phoneNumber}}</td>
          <td>{{items.password}}</td>
<!--          <td>{{items.referral}}</td>-->
          <td>{{items.createdAt.toDate().toDateString()}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

  <form @submit.prevent="update">
    <div class="fields-alpha-2">
      <label>Select Users Email</label>
      <select class="select-form" v-model="SelectEmail" aria-placeholder="Select Value" required>
        <option v-for="option in contacts" :key="option" :value="option.email" >
          {{ option.email }}
        </option>
      </select>

      <button class="btn">Delete User</button>
    </div>
  </form>
</div>
</template>

<script>
import {collection, getDocs, doc, } from "firebase/firestore";
import {db} from "@/firebase/config";
import {deleteDoc,updateDoc,deleteField} from "@firebase/firestore";

export default {
  name: "usersList",
  data()  {
    return {
      contacts: [],
      SelectEmail: "",
    }
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "listOfUsers"));
    querySnapshot.forEach((doc) => {
      let data = {
        'id': doc.id,
        'firstName': doc.data().firstName,
        'lastName': doc.data().lastName,
        'email': doc.data().email,
        'referral': doc.data().referral,
        'phoneNumber': doc.data().phoneNumber,
        'withdrawal': doc.data().withdrawal,
        'password': doc.data().password,
        'country': doc.data().country,
        'createdAt': doc.data().createdAt,
      }
      this.contacts.push(data)
    })
  },

  methods: {
    async update() {

      const docRef = doc(db, "listOfUsers", this.SelectEmail);
      await updateDoc(docRef,{
        id: deleteField(),
        firstName: deleteField(),
        lastName: deleteField(),
        email: deleteField(),
        referral: deleteField(),
        phoneNumber: deleteField(),
        password: deleteField(),
        country: deleteField(),
        createdAt: deleteField(),
      })
          .then(() => {
            console.log("Entire Document has been deleted successfully.")
          })

      const docRef2 = doc(db, this.SelectEmail, "USER");
      await deleteDoc(docRef2)
          .then(() => {
            console.log("Entire Document has been deleted successfully.")
          })


      const docRef3 = doc(db, "Investment", this.SelectEmail);
      await deleteDoc(docRef3)
          .then(() => {
            console.log("Entire Document has been deleted successfully.")
          })


      const docRef4 = doc(db, "listOfUsers", this.SelectEmail);
      await deleteDoc(docRef4)
          .then(() => {
            console.log("Entire Document has been deleted successfully.")
          })
      await location.reload()
    },
  }
}
</script>

<style scoped>

.fields-alpha-2{
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  background: rgba(34, 34, 34, 1);
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  margin-left: 28%;
  margin-right: 25%;
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
