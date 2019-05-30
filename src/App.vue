<template>
  <div id="app">
    <Navigation />
    <router-view />
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

