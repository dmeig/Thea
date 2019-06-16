<template>
  <div class="super-iframe-holder">
    <iframe width="640" height="480" class="result-frame" ref="result"></iframe>
  </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class EffectViewer extends Vue {
  @Prop() snippet!: { javaScript: string; css: string; html: string };

  private frame!: HTMLIFrameElement;

  public mounted() {
    this.frame = this.$refs.result as HTMLIFrameElement;
    this.show();
  }

  private show() {
    this.frame = this.$refs.result as HTMLIFrameElement;

    if (this.frame.contentWindow) {
      const document = this.frame.contentWindow.document;
      document.open();
      document.write(this.snippet.html);
      document.close();

      var head = document.head || document.getElementsByTagName("head")[0];

      const style = document.createElement("style");
      style.innerHTML = this.snippet.css;
      head.appendChild(style);

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.appendChild(document.createTextNode(this.snippet.javaScript));
      document.body.appendChild(script);
    }
  }
}
</script>
<style lang='scss'>
.super-iframe-holder {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.super-iframe-holder iframe,
.super-iframe-holder object,
.super-iframe-holder embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  bottom: 0;
  outline: 0;
}
</style>