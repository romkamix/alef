<template>
  <div class="form">
    <div class="form__block">
      <div class="form__header">
        <h2 class="form__header-title">Персональные данные</h2>
      </div>
      <div class="form__person">{{ name }}, {{ age | year }}</div>
    </div>

    <div class="form__block" v-if="children.length > 0">
      <div class="form__header">
        <h2 class="form__header-title">Дети</h2>
      </div>

      <div class="form__row-child" v-for="(child, i) in children" :key="i">
        <div class="form__child">{{ child.name }}, {{ child.age | year }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { declOfYear as year } from "../filters";

export default {
  name: "PreviewView",
  computed: {
    ...mapState("person", ["name", "age", "children"]),
  },
  filters: {
    year,
  },
};
</script>