<template>
  <div class="home">
    <section class="hero is-link is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <p class="title">
            Тут должно быть вступительное слово...
          </p>
        </div>
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
