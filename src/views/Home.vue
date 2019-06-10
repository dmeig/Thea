<template>
  <div class="home">
    <section class="hero hero-has-background is-link is-fullheight-with-navbar">
      <div class="hero-body has-mask">
        <div class="container">
          <h1 class="title is-1 has-text-white">
            Thea-project
          </h1>
          <h3 class="subtitle is-3">
            Сайт для web-дизайнеров и разработчиков
          </h3>
        </div>
      </div>
    </section>
    <section class="section is-medium">
      <h1 class="title is-1 has-text-centered">Так что же такое web-дизайн?</h1>
      <div class="container has-text-justified">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Duis ut diam quam
        nulla. Sed viverra tellus in hac habitasse platea. Elementum integer
        enim neque volutpat ac tincidunt vitae. Eget est lorem ipsum dolor.
        Pulvinar neque laoreet suspendisse interdum. Augue mauris augue neque
        gravida. Aliquet enim tortor at auctor urna nunc id cursus metus.
        Feugiat nisl pretium fusce id. Etiam non quam lacus suspendisse faucibus
        interdum posuere lorem ipsum. Tempus egestas sed sed risus pretium quam.
        Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.
        Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum
        posuere. Eu facilisis sed odio morbi quis. Fermentum leo vel orci porta
        non. Ullamcorper malesuada proin libero nunc consequat interdum varius
        sit amet. Sit amet facilisis magna etiam tempor orci eu lobortis. Amet
        volutpat consequat mauris nunc congue nisi. At erat pellentesque
        adipiscing commodo. Sollicitudin nibh sit amet commodo nulla facilisi
        nullam. Pretium fusce id velit ut tortor pretium. Velit euismod in
        pellentesque massa placerat duis. A diam maecenas sed enim ut sem
        viverra aliquet eget. Congue nisi vitae suscipit tellus mauris a. Etiam
        dignissim diam quis enim lobortis. Dui vivamus arcu felis bibendum ut
        tristique et egestas. Penatibus et magnis dis parturient montes nascetur
        ridiculus mus mauris. Vulputate sapien nec sagittis aliquam malesuada
        bibendum arcu vitae. Vitae tempus quam pellentesque nec. Eros donec ac
        odio tempor orci. Amet justo donec enim diam vulputate. Euismod
        elementum nisi quis eleifend. Donec et odio pellentesque diam volutpat.
        Sagittis eu volutpat odio facilisis mauris sit. Aliquam etiam erat velit
        scelerisque in dictum non. Blandit massa enim nec dui. Gravida neque
        convallis a cras semper. Nulla at volutpat diam ut. Vel eros donec ac
        odio tempor orci. Molestie nunc non blandit massa enim. Adipiscing
        bibendum est ultricies integer. Ut ornare lectus sit amet est. Velit
        euismod in pellentesque massa placerat. Semper viverra nam libero justo
        laoreet sit amet cursus sit. Venenatis urna cursus eget nunc scelerisque
        viverra mauris. Scelerisque felis imperdiet proin fermentum leo vel.
        Morbi tristique senectus et netus et malesuada fames. Scelerisque in
        dictum non consectetur. Eleifend quam adipiscing vitae proin sagittis
        nisl rhoncus mattis rhoncus. Vulputate dignissim suspendisse in est ante
        in nibh mauris cursus. Erat nam at lectus urna duis convallis convallis.
        Leo vel orci porta non. Nibh ipsum consequat nisl vel pretium lectus
        quam. Pulvinar sapien et ligula ullamcorper malesuada proin. Orci eu
        lobortis elementum nibh tellus. Varius duis at consectetur lorem donec
        massa sapien faucibus. Volutpat consequat mauris nunc congue nisi vitae
        suscipit tellus. Aliquet sagittis id consectetur purus ut faucibus.
        Velit euismod in pellentesque massa placerat duis ultricies. Morbi
        tincidunt augue interdum velit euismod. Bibendum at varius vel pharetra
        vel turpis nunc eget. Sollicitudin tempor id eu nisl nunc mi ipsum
        faucibus. Quis vel eros donec ac odio tempor. Amet mattis vulputate enim
        nulla aliquet porttitor lacus luctus accumsan. Nunc non blandit massa
        enim nec dui nunc mattis enim. Iaculis nunc sed augue lacus viverra
        vitae congue eu consequat. Lectus mauris ultrices eros in cursus.
        Sodales ut etiam sit amet nisl purus in mollis nunc. Nunc scelerisque
        viverra mauris in aliquam sem fringilla. Etiam tempor orci eu lobortis
        elementum nibh. Sem fringilla ut morbi tincidunt. Elit sed vulputate mi
        sit amet mauris commodo quis. Fames ac turpis egestas maecenas pharetra
        convallis posuere morbi. Egestas quis ipsum suspendisse ultrices
        gravida. Justo donec enim diam vulputate. Eu lobortis elementum nibh
        tellus molestie nunc non. Ullamcorper morbi tincidunt ornare massa eget.
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
require("../assets/main.scss");

@Component({
  components: {}
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.hero-has-background {
  background: url("../assets/main-hero/fullhd-back.jpg") center / cover;
}

@media (max-width: 1024px) {
  .hero-has-backgrounf {
    background: url("../assets/main-hero/mobile-back.jpg") center / cover;
  }
}
@media (max-width: 768px) {
  .hero-has-backgrounf {
    background: url("../assets/main-hero/mobile-back.jpg") center / cover;
  }
}

.has-mask {
  background-color: rgba(0, 0, 0, 0.42);
}
</style>

