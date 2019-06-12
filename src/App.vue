<template>
  <div id="app">
    <Navigation />
    <transition name="fade"><router-view /></transition>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Navigation,
    Footer
  }
})
export default class App extends Vue {}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

