<template>
  <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="@/assets/thea-logo.png" width="112" height="28" />
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
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

        <a class="navbar-item">
          Редактор кода
        </a>
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
export default class Navigation extends Vue {}
</script>
<style lang='scss'>
</style>