<template>
  <div>
    <about-header/>
    <about-section1/>
    <about-section2/>
    <about-section3/>
    <what-we-offer/>
    <our-values/>
    <reassurance/>
    <br/>
    <br/>
    <partners-home/>
    <footer-home/>
  </div>
</template>

<script>

import AboutHeader from "@/components/About/about-header";
import AboutSection1 from "@/components/About/about-section1";
import AboutSection2 from "@/components/About/about-section2";
import AboutSection3 from "@/components/About/about-section3";
import WhatWeOffer from "@/components/About/what-we-offer";
import OurValues from "@/components/About/our-values";
import Reassurance from "@/components/About/reassurance";
import FooterHome from "@/components/Home/footer-home";
import PartnersHome from "@/components/Home/partners-home";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
  components: {
    PartnersHome,
    FooterHome,
    Reassurance,
    OurValues,
    WhatWeOffer,
    AboutSection3,
    AboutSection2,
    AboutSection1,
    AboutHeader
  },
}
</script>

<style scoped>

</style>
