<template>
  <div class="section">
    <div class="columns">
      <div class="column">
        <h1 class="title is-1">Курсы</h1>
      </div>
    </div>
    <div class="columns is-multiline">
      <div
        v-for="course in courses"
        :key="course.id"
        class="column is-one-quarter"
      >
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">
              {{ course.name }}
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
              {{ course.description }}
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Пройти курс</a>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Courses extends Vue {
  private courses = [
    {
      id: 1,
      name: "Базовый курс по HTML",
      description:
        "Научитесь создавать и программировать современные веб-интерфейсы, начните карьеру в IT, оттачивайте своё мастерство."
    },
    {
      id: 2,
      name: "Основы CSS",
      description:
        "Знакомимся с синтаксисом CSS, тренируемся использовать селекторы, каскадность и наследование. И ещё много других полезных вещей"
    }
  ];
}
</script>
<style lang='scss'>
</style>