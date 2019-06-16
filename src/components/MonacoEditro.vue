<template>
  <div class="columns">
    <div class="column">
      <div ref="editor" class="editor"></div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import * as monaco from "monaco-editor";

@Component({})
export default class MonacoEditor extends Vue {
  @Prop() code!: string;
  @Prop() language!: string;
  private editor!: monaco.editor.IStandaloneCodeEditor;
  mounted() {
    const config = {
      value: this.code,
      language: this.language,
      theme: "vs-light",
      automaticLayout: true
    };

    this.editor = monaco.editor.create(
      this.$refs.editor as HTMLElement,
      config
    );

    this.editor.onDidBlurEditorText(this.blurListener);
  }

  beforeDestroy() {
    this.editor && this.editor.dispose();
  }

  private blurListener() {
    this.$emit("codeChanged", this.editor.getValue());
  }

  @Watch("code")
  private onCodeChange(newValue: string, oldValue: string) {
    this.editor.setValue(newValue);
  }
}
</script>
<style lang='scss'>
.editor {
  margin: auto;
  height: 300px;
  border: 1px solid grey;
}
</style>