<template>
  <section class="hero has-background is-fullheight-with-navbar">
    <div class="hero-body has-mask">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="title is-1 has-text-white">Полезные источники:</h1>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <div class="content has-text-white">
              <ul>
                <li v-for="(source, index) in sources" :key="index">
                  <a
                    has-text-white
                    class="has-text-white"
                    target="_blank"
                    :href="source.link"
                    >{{ source.name }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class extends Vue {
  private sources = [
    {
      name: "Скачать крутые шрифты от руки для создания логотипа",
      link:
        "http://beloweb.ru/dizayn-sayta/skachat-krutyie-shriftyi-ot-ruki-dlya-sozdaniya-logotipa.html"
    },
    {
      name:
        "Скачать бесплатные адаптивные блоки на CSS для создания стильного сайта",
      link:
        "http://beloweb.ru/novichkam/skachat-besplatnyie-adaptivnyie-bloki-na-css-dlya-sozdaniya-stilnogo-sayta.html"
    },
    {
      name: "Лучшие бесплатные стоковые фото и видео от талантливых авторов",
      link: "https://www.pexels.com/ru-ru/"
    },
    {
      name: "Интернет-источник свободно используемых изображений",
      link: "https://unsplash.com"
    },
    {
      name: "Цветовые палитры для дизайнеров и художников",
      link: "https://colorhunt.co"
    },
    {
      name: "Хорошая статья про дизайн на medium.com",
      link:
        "https://medium.com/основы-визуального-дизайна/75-самых-толковых-ресурсов-для-веб-дизайнеров-1fc89e64ed57"
    },
    {
      name: "Оформление фильтров поиска в веб-дизайне",
      link: "http://www.dejurka.ru/web-design/filters-in-web-design/#top"
    },
    {
      name:
        "Бесплатные векторные графические изображения для сайта — ТОП 15 лучших сервисов с бесплатными векторными изображениями",
      link:
        "http://www.sitehere.ru/besplatnye-vektornye-graficheskie-izobrazheniya"
    },
    { name: "Генератор иконок", link: "http://fontello.com" },
    {
      name: "Сайт дизайн студии Артемия Лебедева",
      link: "https://www.artlebedev.ru/everything/"
    }
  ];
}
</script>
<style lang='scss'>
.has-background {
  background: url("../assets/res-background.jpg") center / cover;
}
.has-mask {
  background-color: rgba(0, 0, 0, 0.42);
}
</style>