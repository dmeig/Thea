<template>
  <section class="main-content is-fullheight">
    <div class="columns">
      <aside class="column is-3 is-narrow-mobile is-fullheight section ">
        <ul class="menu-list">
          <li
            @click="sectionChanged(effect.id)"
            v-for="effect in effects"
            :key="effect.id"
          >
            <a :class="[isActive(effect.id) && 'is-active']">{{
              effect.name
            }}</a>
          </li>
        </ul>
      </aside>

      <div class="container column is-9">
        <div class="section">
          <div class="columns">
            <div class="column">
              <h1 class="title is-1">{{ getCurrentTitle() }}</h1>
              <p class="subtitle is-3">{{ getCurrentSubtitle() }}</p>
            </div>
          </div>

          <div
            v-for="snippet in snippets"
            :key="snippet.id"
            class="columns is-centered"
          >
            <div class="column column is-three-quarters">
              <div class="card">
                <header class="card-header">
                  <p class="card-header-title">
                    {{ snippet.name }}
                  </p>
                  <a
                    href="#"
                    class="card-header-icon"
                    aria-label="more options"
                  >
                    <span class="icon">
                      <i class="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </a>
                </header>
                <div class="card-content">
                  <div class="content">
                    {{ snippet.description }}
                    <Viewer :snippet="snippet" />
                  </div>
                </div>
                <footer class="card-footer">
                  <router-link
                    class="card-footer-item"
                    :to="{ path: '/code', query: { snippetId: snippet.id } }"
                    >Посмотреть</router-link
                  >
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
interface EffectSection {
  name: string;
  handler: Function;
}

import { Vue, Component } from "vue-property-decorator";
import Viewer from "@/components/EffectViewer.vue";
import { effectsService, EffectLibrary } from "@/services/effects.service";
import { Snippet, snippetsService } from "@/services/snippet.service";
@Component({ components: { Viewer } })
export default class EffectsLibrary extends Vue {
  private effects: EffectLibrary[] = [];
  private snippets: Snippet[] = [];
  private currentActiveId: number = 0;

  public mounted() {
    effectsService.getEffects().subscribe(
      effects => {
        this.effects = effects;
        this.currentActiveId = effects[0].id;
        this.sectionChanged(effects[0].id);
      },
      error => console.log(error)
    );
  }

  public sectionChanged(id: number) {
    this.currentActiveId = id;

    snippetsService
      .getSnippetsOfLibrary(id)
      .subscribe(
        snippets => (this.snippets = snippets),
        error => console.log(error)
      );
  }

  private isActive(id: number) {
    return id == this.currentActiveId;
  }
  private getCurrentTitle() {
    const effect = this.effects.find(i => i.id == this.currentActiveId);
    if (effect) {
      return effect.name;
    } else {
      return "";
    }
  }
  private getCurrentSubtitle() {
    const effect = this.effects.find(i => i.id == this.currentActiveId);
    if (effect) {
      return effect.description;
    } else {
      return "";
    }
  }
}
</script>
