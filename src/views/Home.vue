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
      <div class="columns">
        <div class="column">
          <h1 class="title is-1 has-text-centered">
            Так что же такое web-дизайн?
          </h1>
          <div class="content has-text-justified">
            <p>
              Web-ДИЗАЙН – это актуальная, современная профессия, которая
              позволяет творчески развиваться, креативно мыслить, наполнять свою
              жизнь яркими красками и работать над собой.
            </p>
            <p>
              Веб-дизайн достаточно непростая и сложная область. Вы должны быть
              готовы к тому, что это колоссальная работа, которая требует очень
              много времени. Но знания, которые вы получите, пригодятся вам в
              различных ситуациях и сферах жизни, а это отличная возможность для
              самореализации и карьерного роста.
            </p>
            <p>
              Дизайн веб-сайта играет очень важную роль. Именно он является
              одним из ключевых моментов, влияющих на впечатление посетителя,
              который впервые заходит на ресурс с поиска. Современный веб-дизайн
              – это не только проектирование и создание внешнего вида сайта в
              графическом варианте, но и его верстка с использованием языков
              HTML и CSS. Языки верстки постоянно совершенствуются и
              развиваются.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div class="section">
      <div class="columns">
        <div class="column">
          <h1 class="title is-1 has-text-centered">
            Веб-дизайнер является востребованной профессией!
          </h1>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <h2 class="subtitle is-2 has-text-centered">
            КТО ТАКОЙ ВЕБ-ДИЗАЙНЕР?
          </h2>
          <div class="content has-text-justified">
            <p>
              Веб-дизайнер – это тот, кто самостоятельно осуществляет запуск
              сайта и выполняет все этапы создания сайта своими силами.
              Веб-дизайнер должен быть специалистом широкого профиля и
              разбираться во всех аспектах веб-дизайна.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

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
  .hero-has-background {
    background: url("../assets/main-hero/mobile-back.jpg") center / cover;
  }
}
@media (max-width: 768px) {
  .hero-has-background {
    background: url("../assets/main-hero/mobile-back.jpg") center / cover;
  }
}

.has-mask {
  background-color: rgba(0, 0, 0, 0.42);
}
</style>

