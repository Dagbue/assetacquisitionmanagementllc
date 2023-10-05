<template>
  <div>
<!--    <header-home/>-->
    <slider-view/>
    <product-card/>
    <about-company/>
    <why-choose/>
    <how-it-works/>
    <benefits-investing/>
    <investment-principles/>
    <trusted/>
    <partners-home/>
    <ready-to-work/>
    <footer-home/>
  </div>
</template>

<script>



import AboutCompany from "@/components/Home/about-company";
import WhyChoose from "@/components/Home/why-choose";
import HowItWorks from "@/components/Home/how-it-works";
import BenefitsInvesting from "@/components/Home/benefits-investing";
import InvestmentPrinciples from "@/components/Home/investment-principles";
import PartnersHome from "@/components/Home/partners-home";
import ReadyToWork from "@/components/Home/ready-to-work";
import FooterHome from "@/components/Home/footer-home";
import Trusted from "@/components/Home/Trusted";
import ProductCard from "@/components/Home/ProductCard";
import SliderView from "@/components/Home/slideshow/sliderView.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {
    SliderView,
    ProductCard,
    Trusted,
    FooterHome,
    ReadyToWork,
    PartnersHome,
    InvestmentPrinciples,
    BenefitsInvesting,
    HowItWorks,
    WhyChoose,
    AboutCompany,
  },
}
</script>
