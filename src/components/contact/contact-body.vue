<template>
  <div class="alpha">
    <sequential-entrance delay="500">
      <div class="contact-text">
        <h1 class="contact-text-header">How to Find Us</h1>
        <p class="contact-text-para">
          If you have any questions, just fill in the contact form, and we will
          answer you shortly. If you are living nearby, come visit LawExpert at
          one of our comfortable offices.
        </p>
        <h2 class="contact-text-header-3">Headquarters</h2>
        <p class="contact-text-para-2">
          C/O Taac, LLC, 3 Lone Oak Circle, Ladera Ranch CA 92694
        </p>
        <p class="contact-text-para-3">Telephone: +1 (702) 861-1481</p>
        <p class="contact-text-para-4">E-mail: support@assetacquisitionmanagementllc.com</p>
      </div>
    </sequential-entrance>

    <div id="contact-form" class="contact-form">
      <h1 class="contact-form_title">Get in Touch</h1>

      <form class="form" >
        <input
            required
            name="name"
            v-model="contact.name"
            placeholder="Name"
            type="text"
            autocomplete="off"
        />
        <input
            required
            name="email"
            v-model="contact.email"
            placeholder="E-mail"
            type="email"
        />
        <textarea
            name="message"
            v-model="contact.message"
            rows="4"
            placeholder="Message"
        ></textarea>
        <button class="button" >Send</button>
      </form>
    </div>
  </div>
  <div class="newsletter">

    <div class="parent-wrapper">
      <span class="close-btn glyphicon glyphicon-remove"></span>
      <div class="subscribe-wrapper">
        <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
        <form class="newsletter-form">

          <input
              required
              type="email"
              name="email"
              autocomplete="off"
              class="subscribe-input"
              placeholder="Your e-mail"
          />

          <button class="submit-btn">SUBMIT</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "contact-body",
  data() {
    return {
      contact: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
}
</script>

<style scoped>
.alpha {
  display: flex;
  justify-content: space-between;
  padding-top: 7%;
  padding-bottom: 7%;
  margin-left: 4%;
}

.contact-text {
  padding-right: 15%;
  margin-left: 9%;
  color: #676767;
  font-size: 19px;
}
.contact-form {
  max-width: 600px;
  width: 100%;
  margin-right: 10%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
  padding: 40px 45px;
  border-radius: 5px;
}

.contact-form  {
  /*border-bottom: solid 1px #ccc;*/
  margin-bottom: 15px;
}

.contact-form .form {
  display: flex;
  flex-direction: column;
  font-size: 16px;
}

.contact-form_title {
  text-align: center;
  font-size: 30px;
  padding-bottom: 12px;
  color: #ffffff;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea {
  border: solid 1px #e8e8e8;
  padding: 20px 7px;
  margin-bottom: 15px;
  outline: none;
}

.contact-form textarea {
  resize: none;
}

.contact-form .button {
  background: #D23535;
  border: solid 1px #D23535;
  color: white;
  cursor: pointer;
  padding: 10px 40px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 12px;
  margin-bottom: 20px;
}

.contact-form .button:hover {
  background: #ffffff;
  border: solid 1px #D23535;
  color: #071333;
}

.contact-form input[type="email"],
.contact-form input[type="text"],
.contact-form textarea,
.contact-form .button {
  font-size: 15px;
  border-radius: 3px;
}

.contact-text-header {
  text-align: center;
  font-size: 30px;
  color: #ffffff;
  font-weight: bold;
}

.contact-text-para {
  font-size: 20px;
  padding-top: 13px;
  padding-bottom: 13px;
  color: #ffffff;
}

.contact-text-header-3 {
  padding-bottom: 15px;
  color: #ffffff;
  font-weight: bold;
}

.contact-text-para-2 {
  padding-bottom: 15px;
  color: #ffffff;
}

.contact-text-para-3 {
  padding-bottom: 17px;
  color: #ffffff;
}

.contact-text-para-4 {
  color: #ffffff;
}

.newsletter {
  background: rgba(34, 34, 34, 0.4);
  padding-top: 15px;
  padding-bottom: 60px;
  margin-top: 5%;
}

.parent-wrapper {
  position: relative;
  width: 400px;
  height: 270px;
  margin: 50px auto 0;
  background-image: url('http://www.imgbase.info/images/safe-wallpapers/digital_art/1_miscellaneous_digital_art/41750_1_miscellaneous_digital_art_simple_dark_shapes.jpg');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: -600%;
  background-color: #D23535;
  border-radius: 4px;
  color: #FFF;
  box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.5);
}

.close-btn {
  margin: 20px;
  font-size: 18px;
  cursor: pointer;
}

.subscribe-wrapper {
  position: absolute;
  left: -30px;
  right: -30px;
  height: 200px;
  padding: 30px;
  background-position-x: 272%;
  background-position-y: -1px;
  background-repeat: no-repeat;
  background-color: #FFF;
  border-radius: 4px;
  color: #333;
  box-shadow: 0 0 60px 5px rgba(0, 0, 0, 0.4);
}

.subscribe-wrapper:after {
  position: absolute;
  content: "";
  right: -10px;
  bottom: 71px;
  width: 0;
  height: 0;
  border-left: 0 solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #D23535;
}

.subscribe-wrapper h4 {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 3px;
  padding-top: 25px;
  line-height: 28px;
}

.subscribe-wrapper input {
  position: absolute;
  bottom: 30px;
  border: none;
  border-bottom: 1px solid #d4d4d4;
  padding: 10px;
  width: 65%;
  background: transparent;
  transition: all .25s ease;
}

.subscribe-wrapper input:focus {
  outline: none;
  border-bottom: 1px solid #D23535;
}

.subscribe-wrapper .submit-btn {
  position: absolute;
  border-radius: 20px 0 0 20px;
  background-color: #D23535;
  border: 1px solid #D23535;
  color: #FFF;
  padding: 12px 25px;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 2px;
  right: -10px;
  bottom: 30px;
  cursor: pointer;
  transition: all .25s ease;
  box-shadow: -5px 6px 20px 0 rgba(51, 51, 51, 0.4);
}

.subscribe-wrapper .submit-btn:hover {
  background-color: #D23535;
}

@media (max-width: 500px){
  .parent-wrapper {
    position: relative;
    width: 300px;
    height: 270px;
    margin: 50px auto 0;
  }
  .subscribe-wrapper h4 {
    font-size: 17px;
    padding-top: 20px;
  }
}

@media (max-width: 990px){
  .alpha{
    display: block;
  }
  .contact-form{
    margin-left: 20%;
    margin-top: 10%;
  }
  .contact-text{
    text-align: center;
  }
  .contact-text-para-2{
    padding-bottom: unset;
  }
  .contact-text-para-3{
    padding-bottom: unset;
  }
  .contact-form_title{
    font-size: 26px;
  }
}

@media (max-width: 800px) {
  .contact-form{
    margin-left: 11%;
  }
}

@media (max-width: 500px){
  .contact-text-header {
    font-size: 30px;
  }
  .contact-text-para {
    font-size: 18px;
  }
  .contact-form{
    margin-left: unset;
    margin-top: 12%;
    max-width: unset;
    width: unset;
    margin-right: 15px;
  }

}

</style>