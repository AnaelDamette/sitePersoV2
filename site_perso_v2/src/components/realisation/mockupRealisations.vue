<template>
  <div class="containerMockupRealisation">
    <div class="screenFrame">
      <div class="buttonOn">
        <i class="fas fa-power-off"></i>
      </div>
      <div class="frameworkScreen">
        <img :src="imageRealisation" alt="" />
      </div>
      <!-- <button @click="getSize">Test</button> -->
    </div>
  </div>
</template>
<script>
import { onMounted, computed } from "vue";
import {useStore} from "vuex";
export default {
  setup() {
    const store = useStore();
    let textImageRealisation = computed(function() {
      return store.getters["realisation/imageRealisation"]
    }).value;
    console.log(textImageRealisation)
    let imageRealisation = require(`../../assets/mockupRealisation/${textImageRealisation}`)
    console.log(imageRealisation)
    onMounted(() => {
      let screenFrame = document.querySelector(".screenFrame");
      screenFrame.style.height = (screenFrame.clientWidth * 9) / 16 + "px";
      window.addEventListener("resize", () => {
        screenFrame.style.height = (screenFrame.clientWidth * 9) / 16 + "px";
      });
    });
    return { imageRealisation};
  },
};
</script>

<style lang="scss" scoped>
@import "../../variable.scss";

.containerMockupRealisation {
  position: absolute;
  top: 20%;
  height: 80%;
  width: 100%;
   @media (max-height: 700px) {
    width: 70%;
  }
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}
.screenFrame {
  position: relative;
  background-color: black;
  width: 80%;
  max-height: 100%;
  border: solid 1px $primaire;
  border-radius: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.buttonOn {
  position: absolute;
  pointer-events: visible;
  bottom: 2%;
  right: 1%;
  border: solid 1px $primaire;
  border-radius: 50%;
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    border-color: $primaire + 50;
    i {
      color: $primaire + 50;
    }
  }
}
.frameworkScreen {
  position: relative;
  background-color: $secondaire;
  width: 90%;
  height: 90%; 
  margin: 1em;
  border-radius: 0.5em;
  overflow: hidden;
  img {
    width: 100%;
  }
  // &::after {
  //   padding-top: 50.625%;
  //   display: block;
  //   content: "";
  // }
}
</style>