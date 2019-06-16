<template>
  <div>
    <div class="container has-text-centered">
      <div class="columns">
        <div class="column">
          <h1 class="title is-1">404. Извините, мы не нашли нужную страницу</h1>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <img :src="imagePath" alt="sorry :'('" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class NotFound extends Vue {
  private imagePath: string = require("../assets/404/sorry.jpeg");
}
</script>
<style lang='scss'>
</style>