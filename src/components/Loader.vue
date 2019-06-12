<template>
  <div v-if="isVisible">Загрузка...</div>
</template>
<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";
import { PropOptions } from "vue";

@Component({})
export default class Loader extends Vue {
  @Prop({ default: false }) isVisible!: boolean;
}
</script>
<style lang='scss'>
</style>