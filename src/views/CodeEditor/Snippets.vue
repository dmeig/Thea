<template>
  <div class="box">
    <b-loading
      :is-full-page="false"
      :active.sync="isLoading"
      :can-cancel="false"
    ></b-loading>
    <div class="columns">
      <div class="column">
        <h5 class="title is-5">Мои сниппеты:</h5>
      </div>
    </div>
    <div v-if="snippets.length == 0" class="columns div column">
      <p class="subtitle is-5">Пока нет ни одного...</p>
    </div>
    <div v-for="snippet in snippets" :key="snippet.id" class="columns">
      <div class="column">
        <h5 @click="onSnippetClick(snippet.id)" class="title is-5">
          {{ snippet.name }}
        </h5>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { snippetsService, Snippet } from "@/services/snippet.service";
import { finalize } from "rxjs/operators";

@Component({})
export default class Snippets extends Vue {
  private snippets: Snippet[] = [];
  private isLoading: boolean = false;

  public mounted() {
    snippetsService
      .getSnippets()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe(
        snippets => {
          this.snippets = snippets;
        },
        error => {
          console.log(error);
        }
      );
  }

  private onSnippetClick(id: number) {
    this.$emit(
      "selected-snippet",
      this.snippets.filter(s => {
        return s.id === id;
      })[0]
    );
  }
}
</script>
<style lang='scss'>
</style>