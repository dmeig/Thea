<template>
  <div class="column">
    <b-loading
      :is-full-page="true"
      :active.sync="isLoading"
      :can-cancel="false"
    ></b-loading>
    <div class="tabs is-centered is-boxed">
      <ul>
        <li
          @click="setActiveTab('code')"
          :class="[activeTab === 'code' && 'is-active']"
        >
          <a>Код</a>
        </li>

        <li
          @click="setActiveTab('result')"
          :class="[activeTab === 'result' && 'is-active']"
        >
          <a>Результат</a>
        </li>
      </ul>
    </div>
    <div class="columns">
      <div class="column is-3">
        <div class="aside">
          <div v-if="isAuthenticated" class="box">
            <div v-if="snippet.id" class="columns">
              <div class="column">
                <h4 class="title is-4">#{{ snippet.id }}</h4>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <input
                  v-model="snippet.name"
                  type="text"
                  class="input"
                  placeholder="Наименование"
                />
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <textarea
                  v-model="snippet.description"
                  class="textarea"
                  placeholder="Описание"
                ></textarea>
              </div>
            </div>
            <div class="columns is-mobile">
              <div class="column">
                <button @click="update" class="button">Выполнить</button>
              </div>
              <div class="column">
                <button @click="onSaveClick" class="button is-primary">
                  <span class="icon is-large"
                    ><ion-icon name="save"></ion-icon
                  ></span>
                  &nbsp;Сохранить
                </button>
              </div>
            </div>
          </div>
          <div v-else class="box">
            <div class="columns is-mobile">
              <div class="column">
                <button @click="update" class="button">Выполнить</button>
              </div>
            </div>
          </div>
          <div v-if="isAuthenticated" class="columns">
            <div class="column">
              <Snippets @selected-snippet="changeSnippet" />
            </div>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="box">
          <div class="columns">
            <div v-show="activeTab == 'code'" class="column">
              <div class="columns">
                <div class="column">
                  <h3 class="title is-3">HTML:</h3>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <MonacoEditor
                    @codeChanged="onHtmlChanged"
                    :code="snippet.html"
                    language="text/html"
                  />
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <h3 class="title is-3">CSS:</h3>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <MonacoEditor
                    @codeChanged="onCssChanged"
                    :code="snippet.css"
                    language="css"
                  />
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <h3 class="title is-3">JavaScript:</h3>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <MonacoEditor
                    @codeChanged="onJavaScriptChanged"
                    :code="snippet.javaScript"
                    language="javascript"
                  />
                </div>
              </div>
            </div>
            <div v-show="activeTab == 'result'" class="column">
              <div class="super-iframe-holder">
                <iframe class="result-frame" ref="result"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";
import MonacoEditor from "@/components/MonacoEditro.vue";
import { mapGetters } from "vuex";
import { Snippet, snippetsService } from "@/services/snippet.service";
import { finalize } from "rxjs/operators";
import Snippets from "@/views/CodeEditor/Snippets.vue";

@Component({
  components: { MonacoEditor, Snippets },
  computed: { ...mapGetters("auth", ["isAuthenticated"]) }
})
export default class CodeEditor extends Vue {
  @Prop() snippetId!: number;

  private tabs: Object = {};
  private activeTab: string = "code";
  private isAuthenticated!: boolean;
  private isLoading: boolean = false;

  private setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  private onChange(value: any) {
    console.log(value);
  }

  public snippet: Snippet = {
    javaScript: "",
    css: "",
    html: "",
    name: "",
    description: "",
    id: undefined
  };
  private frame!: HTMLIFrameElement;

  public mounted() {
    this.frame = this.$refs.result as HTMLIFrameElement;
    if (this.snippetId) {
      this.getSnippet();
    }
  }

  private update() {
    this.activeTab = "result";

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

  private onJavaScriptChanged(code: string) {
    this.snippet.javaScript = code;
  }
  private onCssChanged(code: string) {
    this.snippet.css = code;
  }
  private onHtmlChanged(code: string) {
    this.snippet.html = code;
  }
  private onSaveClick() {
    this.isLoading = true;

    if (this.snippet.id) {
      snippetsService
        .saveSnippet(this.snippet)
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe(
          (result: boolean) => {
            this.$toast.open({
              message: "Готово!",
              type: "is-success"
            });
          },
          (error: string) => {
            this.$toast.open({
              duration: 5000,
              message: `Что-то пошло не так...`,
              type: "is-danger"
            });
          }
        );
    } else {
      snippetsService
        .createSnippet(this.snippet)
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe(
          snippet => {
            this.snippet.id = snippet.id;
            this.$toast.open({
              message: "Готово!",
              type: "is-success"
            });
          },
          error => {
            this.$toast.open({
              duration: 5000,
              message: `Что-то пошло не так...`,
              type: "is-danger"
            });
          }
        );
    }
  }
  private changeSnippet(snippet: Snippet) {
    this.snippet = snippet;
  }
  private getSnippet() {
    snippetsService
      .getSnippet(this.snippetId)
      .subscribe(
        snippet => (this.snippet = snippet),
        error => console.log(error)
      );
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