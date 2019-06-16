<template>
  <section class="main-content columns is-fullheight">
    <aside class="column is-3 is-narrow-mobile is-fullheight section ">
      <div class="box">
        <ul class="menu-list">
          <li>
            <router-link
              v-for="item in items"
              :key="item.name"
              :to="item.path"
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
      </div>
    </aside>
    <div class="column">
      <router-view></router-view>
    </div>
  </section>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class extends Vue {
  private items: Object[] = [
    { name: "Эффекты", path: "/admin/effects" },
    { name: "Тесты", path: "/admin/tests" },
    { name: "Главы курсов", path: "/admin/sections" },
    { name: "Курсы", path: "/admin/courses" }
  ];
}
</script>
<style lang='scss'>
</style>