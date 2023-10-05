<template>
  <div>
  <div id="slider">
    <div class="arrowLeft" @click="arrowLeft()"></div>
    <Slides :image="images[chosenImage]" />
    <div class="arrowRight" @click="arrowRight()"></div>

  </div>
  <div class="livecoinwatch-widget-5" lcw-base="USD" lcw-color-tx="#999999" lcw-marquee-1="coins" lcw-marquee-2="movers" lcw-marquee-items="10" ></div>
  </div>
</template>

<script>
import Slides from "./Slides.vue";
export default {
  name: "sliderView",
  components: {
    Slides,
  },
  data() {
    return {
      images: [
        {
          id: 0,
          url: "https://cdn.pixabay.com/photo/2014/08/21/12/54/investment-423289_960_720.jpg",
          title: "Become an investor on the market and Trade profitably, Copy Transactions of traders from around the" +
              "world benefit from their trading.",
          para: "Get Started",
        },
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
          title: "Making Crypto Trading More Better & Easier for everyone.Join a social trading network that helps " +
              "users interact with other traders, in order to accomplish their trading goals and create a unique " +
              "personal investment approach.",
          para: "Get Started",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
          title: "With over 20 Years In The Stock Market Does Your Money Need Speed ? Manage your Investments Easily, " +
              "Profitably and Effectively.",
          para: "Get Started",
        },
        {
          id: 3,
          url: "https://img.freepik.com/free-photo/work-elegant-web-america-communication_1232-3758.jpg?size=626&ext=jpg&ga=GA1.1.157850929.1690483891&semt=ais",
          title: "Put the World in the Palm of Your Hand with Asset Acquisition & Management, LLC GlobalTrader, Deposit" +
              " into your wallet and easily trade global stocks,plus options and cryptocurrencies, from your phone or " +
              "tablet.",
          para: "Get Started",
        },
      ],


      // images: [
      //   {
      //     id: 0,
      //     url: "https://cdn.pixabay.com/photo/2014/08/21/12/54/investment-423289_960_720.jpg",
      //     title: "Become an investor on the market and Trade profitably",
      //     para: "Copy Transactions of traders from around the world benefit from their trading.",
      //   },
      //   {
      //     id: 1,
      //     url: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
      //     title: "Making Crypto Trading More Better & Easier for everyone.",
      //     para: "Join a social trading network that helps users interact with other traders, in order to accomplish their trading goals and create a unique personal investment approach.",
      //   },
      //   {
      //     id: 2,
      //     url: "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      //     title: "With over 20 Years In The Stock Market",
      //     para: "Does Your Money Need Speed ? Manage your Investments Easily, Profitably and Effectively.",
      //   },
      //     {
      //       id: 3,
      //       url: "https://img.freepik.com/free-photo/work-elegant-web-america-communication_1232-3758.jpg?size=626&ext=jpg&ga=GA1.1.157850929.1690483891&semt=ais",
      //       title: "Put the World in the Palm of Your Hand with Asset Acquisition & Management, LLC GlobalTrader, Deposit into your wallet and easily trade global stocks,plus options and cryptocurrencies, from your phone or tablet.",
      //       para: "Get Started",
      //     },
      // ],
      chosenImage: 0,
      intervalObject: null,
    };
  },
  methods: {
    arrowLeft() {
      clearInterval(this.intervalObject);
      this.moveLeft();
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveLeft();
      }, 6000);
    },
    arrowRight() {
      clearInterval(this.intervalObject);
      this.moveRight();
      var self = this;
      this.intervalObject = setInterval(() => {
        self.moveRight();
      }, 6000);
    },
    moveLeft() {
      var flag = this.chosenImage;
      flag--;
      if (flag < 0) {
        flag = this.images.length - 1;
      }
      this.chosenImage = flag;
    },
    moveRight() {
      var flag = this.chosenImage;
      flag++;
      if (flag >= this.images.length) {
        flag = 0;
      }
      this.chosenImage = flag;
    },
  },
  created() {
    var self = this;
    this.intervalObject = setInterval(() => {
      self.moveLeft();
    }, 6000);
  },
};
</script>

<style>
#slider {
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  /*margin-top: 0.8%;*/
}
#slider .arrowLeft,
#slider .arrowRight {
  position: absolute;
  top: 50%;
  border: 20px solid transparent;
}
#slider .arrowLeft {
  border-right-color: #676767;
  z-index: 1;
}
#slider .arrowRight {
  right: 0;
  border-left-color: #676767;
}
#slider .squares div {
  height: 20px;
  width: 20px;
  margin-right: 10px;
  display: inline-block;
  background-color: #676767;
  border-radius: 50%;
}
@media (max-width: 700px){
  #slider .arrowLeft{
    display: none;
  }
  #slider .arrowRight{
    display: none;
  }
}
</style>
