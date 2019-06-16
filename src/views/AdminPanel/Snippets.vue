<template>
  <div class="section">
    <div class="column">
      <div class="columns">
        <div class="column">
          <router-link to="/code" class="button is-primary"
            >Создать новый сниппет</router-link
          >
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <table class="table">
            <thead>
              <tr>
                <th>Наименование</th>
                <th>Описание</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="snippet in snippets" :key="snippet.id">
                <td>
                  {{ snippet.name }}
                </td>
                <td>{{ snippet.description }}</td>
                <td>
                  <router-link
                    class="button"
                    :to="{
                      path: '/code',
                      query: { snippetId: snippet.id }
                    }"
                    >Редактировать</router-link
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { Snippet, snippetsService } from "@/services/snippet.service";

@Component({})
export default class Snippets extends Vue {
  private snippets: Snippet[] = [];

  public mounted() {
    snippetsService.getSnippets().subscribe(
      snippets => {
        this.snippets = snippets;
      },
      error => {}
    );
  }
}
</script>
<style lang='scss'>
</style>