<template>
  <div class="product">
    <div class="product-inner">
      <div class="product-text-wrap">
<!--        <img-->
<!--          v-bind:src="require(`../../../assets/${product.image}`)"-->
<!--          height="50"-->
<!--          width="50"-->
<!--          alt="logo"-->
<!--          class="product-logo"-->
<!--        />-->
        <h2 class="text-header">{{ product.title }}</h2>
      </div>

      <div class="product-image-wrap">
        <img :src="product.src" class="image" alt="product" />
      </div>

      <div class="product-detail">
        <p>{{ product.content }}</p>
      </div>
      <a @click.prevent="onPostClick" class="btn btn-white btn-animated"
        >READ MORE</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCard",
  props: ["product"],
  methods: {
    async onPostClick() {
      await this.$router.push("/about");
      await  window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.product {
  flex: 1 1 33.333%;
  width: 100%;
  padding: 20px;
}



.product-inner {
  position: relative;
  padding: 25px;
  box-shadow: 0 0 12px #313131;
  border-radius: 5px;
}

.product-image-wrap .image {
  width: 100%;
  padding-bottom: 10px;
}

.product-image-wrap h2 {
  color: #313131;
  font-size: 80px;
  font-weight: 900;
  opacity: 0.2;
  transform-origin: center;
}

.product-detail p {
  font-size: 13px;
  line-height: 1.5;
  color: #FFFFFF;
  font-weight: 300;
}

.product-text-wrap h2 {
  font-size: 24px;
  font-weight: 700;
  color: #FFFFFF;
  margin-top: 5%;
  text-align: center;
  padding-bottom: 10px;
}

.product-text-wrap img {
  margin-left: 38%;
  opacity: 70%;
}

.product-text-wrap {
  display: flex;
  flex-direction: column;
}

.btn,
.btn-white,
.btn-animated {
  margin-top: 5%;
}

.btn:hover {
  color: #071333;
  background-color: #FFFFFF;
  border: 1px solid #D23535;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
}
.btn-white {
  background-color: #D23535;
  border: 1px solid #D23535;
  color: white;
  font-size: 13px;
  padding: 8px 18px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s;
  position: relative;
  border-radius: 5px;
}


.text-header {
  letter-spacing: 1px;
}

.product-detail p {
  font-size: 19px;
}
img{
  border-radius: 5px;
}

@media (max-width: 800px) {
  .product {
    padding: 110px;
  }

  .btn,
  .btn-white,
  .btn-animated {
    margin-top: unset;
  }

  .product-inner {
    padding: 55px;
  }
}

@media (max-width: 600px){
  .product {
    padding: unset;
    margin-bottom: 20px;
  }
  .product-text-wrap h2 {
    font-size: 19px;
  }
  .product-detail p {
    font-size: 17px;
  }
  .product-image-wrap .image {
    width: 90%;
    padding-bottom: 10px;
    margin-left: 10px;
  }
  .btn-white {
    font-size: 12px;
    padding: 9px 18px;
    border-radius: 15px;
  }
  .product-inner {
    padding: 30px;
  }
}
</style>
