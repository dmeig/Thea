<template>
  <div id="snackbar">{{ message }}</div>
</template>
<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class extends Vue {
  @Prop() message!: string;
}
</script>
<style lang='scss'>
#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  color: #377951;
  border: solid 1px #5ead7e;
  background-color: rgba(35, 209, 96, 0.4);
  box-shadow: -1px 1px 8px 0 rgba(94, 173, 126, 0.2);
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  top: 30px;
  font-size: 17px;
}
#snackbar.show {
  visibility: visible;
  animation: fadein 0.2s, fadeout 0.5s 2.5s;
}
@keyframes fadein {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 30px;
    opacity: 1;
  }
}
@keyframes fadeout {
  from {
    top: 30px;
    opacity: 1;
  }
  to {
    top: 0;
    opacity: 0;
  }
}
</style>