<template>
  <div class="section ">
    <div class="columns">
      <div class="column">
        <h1 v-if="isVisible" class="title is-1">Среды разработки</h1>
        <p class="subtitle is-2">{{ errors }}</p>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Vue, Component, Prop } from "vue-property-decorator";
import { accountService } from "@/services/account.service";
import { finalize } from "rxjs/operators";

@Component({})
export default class Verify extends Vue {
  @Prop() userId!: number;
  @Prop() code!: string;

  isVisible: boolean = true;
  errors: any = null;

  public mounted() {
    accountService
      .verify(this.userId, this.code)
      .pipe(finalize(() => (this.isVisible = false)))
      .subscribe(
        (result: any) => {
          this.$router.push({
            name: "home"
          });
        },
        (errors: any) => (this.errors = errors)
      );
  }
}
</script>
<style lang='scss'>
</style>