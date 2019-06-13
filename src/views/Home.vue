<template>
  <div class="home">
    <section class="hero hero-has-background is-fullheight-with-navbar">
      <div class="hero-body has-mask">
        <div class="container">
          <h1 class="title is-1 has-text-white">
            Thea-project
          </h1>
          <h3 class="subtitle is-3 has-text-white">
            Сайт для web-дизайнеров и разработчиков
          </h3>
        </div>
      </div>
    </section>
    <section class="section is-medium">
      <h1 class="title is-1 has-text-centered">Так что же такое web-дизайн?</h1>
      <div class="container has-text-justified">
        Веб-дизайн является одним из основных элементов веб-разработки, веб-дизайнеры часть работы, 
        чтобы представить и создать/дизайн веб-страницы с использованием изображений, форматирование HTML, 
        стандартизации и удобства использования веб-страницы.

        Веб-дизайн требует много различных навыков, стандартов и дисциплин, которые используются в создании
        и обслуживании веб-сайта. Под термином веб-дизайн мы подразумеваем веб-и графический дизайн, дизайн 
        интерфейса, авторизацию, стандартизированное кодирование, пользовательскую среду и поисковую оптимизацию.

        В то время как некоторые люди покрывают все эти навыки сами по себе, большинство людей обычно работают в
        командах для более быстрого производства и более профессионального подхода. Точнее, веб-дизайн word 
        используется для описания передней части (видимой части) веб-сайта, в то время как веб-разработка заботится 
        о функциональности и бэкэнде веб-сайта (кодовая часть).
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
require("../assets/main.scss");

@Component({
  components: {}
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.hero-has-background {
  background: url("../assets/main-hero/fullhd-back.jpg") center / cover;
}

@media (max-width: 1024px) {
  .hero-has-backgrounf {
    background: url("../assets/main-hero/mobile-back.jpg") center / cover;
  }
}
@media (max-width: 768px) {
  .hero-has-backgrounf {
    background: url("../assets/main-hero/mobile-back.jpg") center / cover;
  }
}

.has-mask {
  background-color: rgba(0, 0, 0, 0.42);
}
</style>

