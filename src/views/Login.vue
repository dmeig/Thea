<template>
  <section class="section">
    <div class="container has-text-centered">
      <div class="column is-4 is-offset-4">
        <h3 class="title has-text-grey">Thea</h3>
        <p class="subtitle has-text-grey">Войдите что бы продолжить</p>
        <article class="message is-success" v-if="$route.query.new">
          <div class="message-body">
            <strong
              >{{ $route.query.firstName }}, Вы зарегистрировались как
              {{ $route.query.email }} !</strong
            >
            Войдите со своим паролем что бы продолжить
          </div>
        </article>
        <div class="box">
          <form @submit.prevent="handleSubmit">
            <div class="field">
              <div class="control">
                <input
                  class="input is-large is-primary"
                  type="email"
                  placeholder="E-mail"
                  autofocus=""
                  v-model="credentials.userName"
                />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
                  class="input is-large is-primary"
                  type="password"
                  placeholder="Пароль"
                  v-model="credentials.password"
                />
              </div>
            </div>
            <Loader :isVisibly="isBusy" />
            <button
              class="button is-block is-primary is-large is-fullwidth"
              type="submit"
            >
              Войти
            </button>
            <div class="errors-container" v-if="errors">
              {{ errors }}
            </div>
          </form>
        </div>
        <p class="has-text-grey">
          <router-link to="/registration">Регистрация</router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Loader from "@/components/Loader.vue";
import { Component, Vue } from "vue-property-decorator";
import { Credentials } from "@/models/credentials.interface";
@Component({
  components: {
    Loader
  }
})
export default class RegistrationForm extends Vue {
  private isBusy: boolean = false;
  private errors: string = "";
  private credentials = {} as Credentials;
  private created() {
    if (this.$route.query.new) {
      this.credentials.userName = this.$route.query.email as string;
    }
  }
  private handleSubmit() {
    this.isBusy = true;
    this.$store
      .dispatch("auth/authRequest", this.credentials)
      .then(result => {
        if (this.$router.currentRoute.query.redirect) {
          this.$router.push(this.$router.currentRoute.query.redirect as string);
        } else {
          this.$router.push("/");
        }        
      })
      .catch(err => {
        this.errors = err;
      })
      .then(() => {
        this.isBusy = false;
      });
  }
}
</script>

<style lang="scss" scoped>
</style>