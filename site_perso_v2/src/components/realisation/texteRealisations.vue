<template>
  <div class="containerTexteRealisation">
    <p class="text"> {{texteRealisation}}</p>
  </div>
</template>
<script>
import TextScramble from "../menu/textScramble";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    let texteRealisation = computed(function() {
      return store.getters["realisation/texteRealisation"]
    })
    onMounted(() => {
      const phrases = document.querySelector(".text").textContent

      const el = document.querySelector(".text");
      const fx = new TextScramble(el);

      const next = () => {
        fx.setText(phrases).then(() => {
          setTimeout(next, 30000);
        });
      };

      next();
    });
    return { texteRealisation}
  },
};
</script>
<style lang="scss" scoped>
@import "../../variable.scss";
.containerTexteRealisation {
  height: auto;
  width: 100%;
  border-radius: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
   @media (max-width: 375px) {
    font-size: 0.75em;
  }
  @media (min-width: 768px) {
    font-size: 2.5vh;
  }
  padding: 1vw;
}
</style>