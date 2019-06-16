<template>
  <nav
    class="navbar is-fixed-top is-light"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img src="@/assets/thea-logo.png" width="112" height="28" />
      </router-link>

      <a
        role="button"
        :class="['navbar-burger', 'burger', burgerIsActive && 'isActive']"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="togleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      :class="['navbar-menu', !burgerIsActive && 'is-active']"
    >
      <div class="navbar-start">
        <router-link
          v-on:click.native="togleMenu"
          to="/effects"
          class="navbar-item"
        >
          Библиотеки эффектов
        </router-link>

        <router-link
          v-on:click.native="togleMenu"
          to="/resources"
          class="navbar-item"
        >
          Ресурсы
        </router-link>

        <router-link
          v-on:click.native="togleMenu"
          to="/environment"
          class="navbar-item"
        >
          Среды разработки и редакторы
        </router-link>

        <router-link
          v-on:click.native="togleMenu"
          to="/courses"
          class="navbar-item"
        >
          Курсы
        </router-link>

        <router-link
          v-on:click.native="togleMenu"
          to="/code"
          class="navbar-item"
        >
          Редактор кода
        </router-link>

        <router-link
          v-on:click.native="togleMenu"
          to="/about"
          class="navbar-item"
        >
          О сайте
        </router-link>

        <!-- <router-link v-if="isAdmin" class="navbar-item" to="/admin"
          >Администрирование</router-link
        > -->
      </div>

      <div v-if="$store.getters['auth/isAuthenticated']" class="navbar-end">
        <div class="navbar-item">
          <div class="buttons"></div>
          <router-link
            v-on:click.native="logout"
            class="button is-primary"
            to="/"
            ><strong>Выход</strong></router-link
          >
        </div>
      </div>

      <div v-else class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link
              v-on:click.native="togleMenu"
              class="button is-primary"
              to="/registration"
              ><strong>Регистрация</strong></router-link
            >
            <router-link
              v-on:click.native="togleMenu"
              class="button is-white"
              to="/login"
              >Войти</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({ computed: { ...mapGetters("auth", ["isAdmin"]) } })
export default class Navigation extends Vue {
  private burgerIsActive: boolean = true;

  private isAdmin!: boolean;

  private togleMenu(): void {
    this.burgerIsActive = !this.burgerIsActive;
  }

  private logout(): void {
    this.$store.dispatch("auth/authLogout");
  }
}
</script>
<style lang='scss'>
</style>