<template>
<div class="trusted-alpha">
  <h2 class="trust-header">Trusted worldwide</h2>
  <p class="trust-text">Discover why millions of investors from over 100 countries joined Asset Acquisition & Management, LLC</p>

  <div class="section-1">
    <div class="section">
      <img src="https://images.unsplash.com/photo-1573152143286-0c422b4d2175?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80">
      <h3>Social</h3>
      <p>More than 25 million users globally</p>
    </div>
    <div class="section">
      <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80">
      <h3>Reliable</h3>
      <p>Regulated by various authorities around the world</p>
    </div>
    <div class="section">
      <img src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1330&q=80">
      <h3>Secured</h3>
      <p>Utilising top-tier security practices</p>
    </div>
    <div class="section">
      <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1150&q=80">
      <h3>Global</h3>
      <p>Providing services around the world</p>
    </div>
  </div>


</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Trusted"
}
</script>

<style scoped>

.section-1{
  display: flex;
  justify-content: space-around;
  margin-top: 2%;
}

.trust-header{
  text-align: center;
  padding-bottom: 10px;
  color: #fff;
  font-size: 32px;
  font-weight: bold;
}
.trust-text{
  text-align: center;
  padding-bottom: 20px;
  font-size: 20px;
  color: #fff;
}

img{
  width: 90%;
  margin-left: 5%;
  border-radius: 5px;
}
.section{
  box-shadow: 0 0 5px #313131;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 2%;
  margin-right: 2%;
  border-radius: 5px;
  padding: 40px 15px;
}

.section:hover {
  box-shadow: 0 0 5px #313131;
  transition: 4ms ease-in;
}

.section h3{
  text-align: center;
  padding-top: 20px;
  color: #fff;
  font-weight: bold;
}
.section p{
  text-align: center;
  color: #fff;
  font-size: 18px;
}
.trusted-alpha{
  padding-top: 5%;
  padding-bottom: 3%;
}
@media (max-width: 500px) {
  .section-1{
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  .section{
    margin-bottom: 7%;
  }
}

</style>

