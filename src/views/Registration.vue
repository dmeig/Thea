<template>
  <section class="section">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h3 class="title has-text-grey">Регистрация</h3>
        <p class="subtitle has-text-grey">Укажите информацию о себе</p>
        <div class="box">
          <form @submit.prevent="handleSubmit">
            <div class="field">
              <div class="control">
                <input
                  class="input is-large is-primary"
                  type="text"
                  placeholder="Имя"
                  v-model="user.firstName"
                  autofocus=""
                />
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input
                  class="input is-large is-primary"
                  type="email"
                  placeholder="E-mail"
                  v-model="user.email"
                />
              </div>
            </div>

            <div class="field">
              <div class="control">
                <input
                  class="input is-large is-primary"
                  type="password"
                  placeholder="Пароль"
                  v-model="user.password"
                />
              </div>
            </div>

            <Loader :isVisibly="isBusy" />
            <button
              class="button is-block is-primary is-large is-fullwidth"
              type="submit"
            >
              Отправить
            </button>
            <div class="errors-container" v-if="errors">
              {{ errors }}
            </div>
          </form>
        </div>
        <p class="has-text-grey">
          <router-link to="/login">Войти</router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Loader from "@/components/Loader.vue";
import { Component, Vue } from "vue-property-decorator";
import { RegistrationModel } from "@/models/registrationModel.interface";
import { accountService } from "@/services/account.service";
import { finalize } from "rxjs/operators";
@Component({
  components: {
    Loader
  }
})
export default class RegistrationForm extends Vue {
  private isBusy: boolean = false;
  private errors: string = "";
  private user = {} as RegistrationModel;
  private handleSubmit() {
    this.isBusy = true;
    accountService
      .register(this.user)
      .pipe(finalize(() => (this.isBusy = false)))
      .subscribe(
        (result: any) => {
          this.$router.push({
            name: "login",
            query: {
              new: "true",
              firstName: this.user.firstName,
              email: this.user.email
            }
          });
        },
        (errors: any) => (this.errors = errors)
      );
  }
}
</script>

<style lang="scss" scoped>
</style>