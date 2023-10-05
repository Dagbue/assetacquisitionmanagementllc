<template>
  <main>
    <transition appear @before-enter="beforeEnter" @enter="enter">
      <h1 v-if="showTitle" class="products-header">Our Core Services</h1>
    </transition>
    <transition-group
      tag="section"
      class="products"
      appear
      @before-enter="beforeEnter"
      @enter="enter"
    >
      <base-card
        v-for="product in products"
        :key="product.title"
        :product="product"
      />
    </transition-group>
  </main>
</template>

<script>
import { ref } from "vue";
import gsap from "gsap";
import BaseCard from "@/components/Home/BaseCard";
export default {
  name: "ProductCard",
  components: {
    BaseCard,
  },
  data() {
    const showTitle = ref(true);
    const beforeEnter = (el) => {
      el.style.transform = "translateY(-100px)";
      el.style.opacity = 0;
    };
    const enter = (el, done) => {
      gsap.to(el, {
        duration: 2,
        y: 0,
        opacity: 1,
        ease: "bounce.out",
        onComplete: done,
      });
    };
    return {
      products: [
        {
          title: "Retirement Planning",
          content:
            "There is nothing better than a financially secured future. Don't spend all your money today," +
            "plan for a better tomorrow. We simply advise on how to go about your finances today and let you " +
            "smile about it tomorrow.",
          src: "https://cdn.pixabay.com/photo/2018/03/21/16/18/investment-3247252__340.jpg",
          image: "Granddad.png",
        },
        {
          title: "Risk Management",
          content:
            "Today, there are many investment companies all over the globe, and it may be tasking and " +
            "confusing to make the right choice. Our risk evaluation gives you a full report and final advice " +
            "on your investment plans.",
          src: "https://cdn.pixabay.com/photo/2017/08/18/18/56/dices-over-newspaper-2656028__340.jpg",
          image: "Risk.png",
        },
        {
          title: "Financial Market",
          content:
            "Aside our major investment portfolio being in cryptocurrency and forex. Our Parent company " +
            "partners in a lot of foreign short term projects. Partnerships in categories of Agriculture, " +
            "Oil & Gas to ensure maximum profits. ",
          src: "https://cdn.pixabay.com/photo/2018/04/05/02/25/analytics-3291738_960_720.jpg",
          image: "budget.png",
        },
      ],
      showTitle,
      beforeEnter,
      enter,
    };
  },
};
</script>

<style scoped>
.products {
  display: flex;
  /*max-width: 1280px;*/
  width: 95%;
  padding: 25px;
  margin: 0 auto;
}

.products-header {
  text-align: center;
  padding-top: 2%;
  margin-bottom: 0;
  color: #FFFFFF;
  font-size: 30px;
  letter-spacing: 1px;
}
@media (max-width: 990px) {
  .products-header{
    font-size: 29px;
    margin-bottom: 0;
  }
}

@media (max-width: 800px) {
  .products {
    display: block;
    justify-content: center;
  }
  .products-header{
    font-size: 25px;
    margin-bottom: 0;
  }
}

</style>
