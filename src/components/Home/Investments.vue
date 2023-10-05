<template>
  <div class="career-choice">

    <p class="one">{{ career.title }}</p>
    <img :src=career.titleImage alt="logo" class="image">
    <p class="two">
      {{ career.description }}
    </p>
    <p class="three">
      {{ career.subtitle }}
    </p>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Investments",
  props: {
    career: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.career-choice{
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 5px #313131;
  border-radius: 10px;
  padding-left: 40px;
  padding-top: 40px;
  width: 45%;
  margin: 10px auto;
  transition: 4ms ease-in;
  background-color: #121212;
}



.career-choice .one{
  font-size: 22px;
  line-height: 28px;
  letter-spacing: 0;
  text-align: center;
  color: #ffffff;
  margin: 0;
  padding-top: 25px;
  padding-bottom: 20px;
  padding-right: 5%;
  text-transform: uppercase;
  font-weight: 700;
}



.career-choice .two {
  font-size: 17px;
  line-height: 22px;
  letter-spacing: 0;
  color: #ffffff;
  margin: 0;
  padding-bottom: 40px;
  padding-right: 50px;
}

.career-choice .three{
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0;
  color: #D23535;
  padding-bottom: 30px;
  margin: 0;
}

.career-choice .three:hover {
  font-size: 17px;
  font-weight: bold;
  transition: 4ms ease-in;
}


.career-choice button{
  border: none;
  background: transparent;
  outline: none;
}

.image{
  width: 80%;
  margin-bottom: 4%;
  margin-left: 6%;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

@media (max-width: 990px) {
  .career-choice .one{
    font-size: 21px;
  }
  .career-choice .two{
   font-size: 17px;
  }
}

@media (max-width: 990px) {
  .career-choice{
    width: unset;
  }
}
@media (max-width: 500px) {
  .career-choice .one{
    font-size: 20px;
    line-height: 26px;
    text-align: center;
  }
  .career-choice .two {
    font-size: 15px;
    line-height: 20px;
    padding-right: unset;
  }
  .career-choice{
    padding-right: 30px;
  }
  .career-choice .three{
    font-size: 14px;
    line-height: 17px;
  }
}
</style>


