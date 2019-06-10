<template>
  <div class="section is-paddingless">
    <div class="columns is-marginless">
      <div class="column is-3 is-paddingless">
        <div class="aside">
          <div class="section">
            <button @click="update" class="button">Выполнить</button>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="columns is-marginless">
          <div class="column is-marginless">
            <div class="main-content">
              <div class="columns is-multiline">
                <div class="column is-half">
                  <textarea
                    class="textarea"
                    v-model="snippet.html"
                    rows="10"
                    placeholder="HTML"
                  ></textarea>
                </div>
                <div class="column is-half">
                  <textarea
                    class="textarea"
                    v-model="snippet.javaScript"
                    rows="10"
                    placeholder="JavaScript"
                  ></textarea>
                </div>
                <div class="column is-half">
                  <textarea
                    class="textarea"
                    v-model="snippet.css"
                    rows="10"
                    placeholder="CSS"
                  ></textarea>
                </div>
                <div class="column is-half">
                  <div class="control">
                    <iframe ref="result"></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
interface ISnippet {
  javaScript: string;
  css: string;
  html: string;
}

import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class CodeEditor extends Vue {
  public snippet: ISnippet = {
    javaScript: "setTimeout(()=>{ alert('Прошла одна секунда'); }, 1000)",
    css: "h1 {color: red}",
    html: "<h1>Привет, Мир!</h1>"
  };
  private frame!: HTMLIFrameElement;

  public mounted() {
    this.frame = this.$refs.result as HTMLIFrameElement;
  }

  private update() {
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
</style>