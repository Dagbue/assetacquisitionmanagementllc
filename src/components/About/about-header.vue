<template>
  <div class="portfolio-header-alpha">
    <div class="section">
      <sequential-entrance delay="400">
        <div class="portfolio-header1">
          <p class="portfolio-header1-one">
            Empowering a global community of investors
          </p>
          <h3 class="portfolio-header1-three">
            Asset Acquisition & Management, LLC is one of the world’s leading social investment networks and aims to revolutionise
            the way people invest, and enhance investors’ financial education.
          </h3>
          <h2 class="portfolio-header1-two">We aim to Open the global markets so that everyone can trade and invest in
            a simple and transparent way.</h2>
        </div>
      </sequential-entrance>
      <div class="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/NT4WF_-KXt4?si=sFE2daGowYQkPdqf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "about-header"
}
</script>

<style scoped>
.section {
  display: flex;
  align-content: center;
  align-items: center;
  padding-bottom: 7%;
  justify-content: space-around;
}

.portfolio-header-alpha {
  background: rgba(34, 34, 34, 0.5);
  height: 100%;
}
.video {
  padding-right: 6%;
  padding-top: 5%;
  width: 100%;
}
iframe{
  width: 100%;
}
.portfolio-header1 {
  line-height: 45px;
}
.portfolio-header1-one {
  color: #fff;
  font-size: 25px;
  padding-top: 9%;
  padding-left: 7%;
  padding-right: 5%;
}
.portfolio-header1-two {
  padding-top: 20px;
  padding-left: 7%;
  padding-right: 20%;
  font-size: 20px;
  letter-spacing: 1px;
  color: #fff;
}
.portfolio-header1-three {
  color: white;
  font-size: 28px;
  padding-left: 7%;
  padding-right: 10%;
}
.global{
  color: #63B8A0;
}
@media (max-width: 990px) {
  .portfolio-header1-three{
    font-size: 28px;
    padding-top: 10px;
    padding-bottom: 20px;
  }
  .portfolio-header1-one{
    font-size: 20px;
    letter-spacing: unset;
  }
  .portfolio-header1 {
    line-height: unset;
    padding-top: 7%;
  }
  .portfolio-header1-two{
    font-size: 23px;
  }
}

@media (max-width: 800px) {
  .section {
    display: block;
  }
  .portfolio-header1-one {
    font-size: 25px;
    padding-top: 7px;
  }
  .portfolio-header-alpha {
    height: 100%;
  }
  .video {
    margin-left: 3%;
  }
  .portfolio-header1{
    text-align: center;
  }
}

@media (max-width: 500px) {
  .video {
    margin-left: 3%;
  }
  .portfolio-header1-one {
    font-size: 18px;
    padding-top: 15px;
  }
  .portfolio-header1-three{
    font-size: 21px;
    padding-top: 10px;
    padding-bottom: 20px;
  }
  .portfolio-header1-two{
    font-size: 20px;
  }
  .portfolio-header-alpha {
    height: 100%;
  }
}
</style>
