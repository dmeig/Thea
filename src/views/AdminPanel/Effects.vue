<template>
  <div class="section">
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">Эффекты</h1>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <button @click="startCreate" class="button is-primary">Добавить</button>
      </div>
    </div>

    <div v-if="creatingNew" class="columns">
      <div class="column">
        <div class="box">
          <b-field label="Наименование">
            <b-input v-model="newLibrary.name"></b-input>
          </b-field>
          <b-field label="Описание">
            <b-input
              v-model="newLibrary.description"
              maxlength="200"
              type="textarea"
            ></b-input>
          </b-field>
          <b-field label="Сниппеты">
            <b-select multiple native-size="5" v-model="newLibrary.snippets">
              <option
                v-for="snippet in snippets"
                :key="snippet.id"
                :value="snippet.id"
                >{{ snippet.name }}</option
              >
            </b-select>
          </b-field>

          <div class="field is-grouped">
            <div class="control">
              <button @click="createEffectLibrary" class="button is-primary">
                Создать
              </button>
            </div>
            <div class="control">
              <button @click="endCreating" class="button is-text">
                Отмена
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column">
        <div class="box">
          <table class="table">
            <thead>
              <tr>
                <th>Наименование</th>
                <th>Описание</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="effect in effects" :key="effect.id">
                <td>
                  {{ effect.name }}
                </td>
                <td>{{ effect.description }}</td>
                <td>
                  <button class="button">Редактировать</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { snippetsService, Snippet } from "@/services/snippet.service";
import { effectsService, EffectLibrary } from "@/services/effects.service";
import { finalize } from "rxjs/operators";

@Component({})
export default class Effects extends Vue {
  private effects: EffectLibrary[] = [];
  private snippets: Snippet[] = [];

  private creatingNew: boolean = false;

  private newLibrary: EffectLibrary = {
    name: "",
    description: "",
    snippets: []
  };

  public mounted() {
    snippetsService.getSnippets().subscribe(
      snippets => {
        this.snippets = snippets;
      },
      error => console.log(error)
    );

    effectsService.getEffects().subscribe(
      effects => {
        this.effects = effects;
      },
      error => console.log(error)
    );
  }

  private startCreate() {
    this.resetForm();
    this.creatingNew = true;
  }

  private endCreating() {
    this.resetForm();
    this.creatingNew = false;
  }

  private resetForm() {
    this.newLibrary.name = "";
    this.newLibrary.description = "";
    this.newLibrary.snippets = [];
  }

  private createEffectLibrary() {
    effectsService
      .createSnippet(this.newLibrary)
      .pipe(finalize(() => this.endCreating()))
      .subscribe(
        effectLibrary => {
          this.effects.push(effectLibrary);
        },
        error => console.log(error)
      );
  }
}
</script>
<style lang='scss'>
</style>