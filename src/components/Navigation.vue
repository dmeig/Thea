<template>
  <nav
    class="navbar is-fixed-top is-white-ter"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <router-link v-on:click.native="togleMenu" class="navbar-item" to="/">
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
        <a class="navbar-item">
          Средства разработки web-приложений
        </a>

        <a class="navbar-item">
          Ресурсы
        </a>

        <a class="navbar-item">
          Среды разработки
        </a>

        <a class="navbar-item">
          Курсы
        </a>

        <router-link
          v-on:click.native="togleMenu"
          to="/code"
          class="navbar-item"
        >
          Редактор кода
        </router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Регистрация</strong>
            </a>
            <a class="button is-light">
              Войти
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Navigation extends Vue {
  private burgerIsActive: boolean = true;

  private togleMenu(): void {
    this.burgerIsActive = !this.burgerIsActive;
  }
}
</script>
<style lang='scss'>
</style>