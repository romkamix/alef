<template>
  <div class="form">
    <div class="form__block">
      <div class="form__header">
        <h2 class="form__header-title">Персональные данные</h2>
      </div>

      <div class="form__row">
        <input-container label="Имя" v-model="name" :error="$v.name.$error" />
      </div>

      <div class="form__row">
        <input-container
          label="Возраст"
          type="int"
          v-model="age"
          :error="$v.age.$error"
        />
      </div>
    </div>

    <div class="form__block">
      <div class="form__header">
        <h2 class="form__header-title">Дети (макс. {{ childrenLimit }})</h2>
        <button
          class="form__header-button btn btn_inv"
          @click="addChild"
          v-if="notLimited"
        >
          <img src="../assets/plus.svg" width="16" height="16" alt="plus" />
          &nbsp;Добавить ребенка
        </button>
      </div>

      <div
        class="form__grid"
        v-for="(child, i) in $v.children.$each.$iter"
        :key="i"
      >
        <input-container
          label="Имя"
          v-model="child.name.$model"
          :error="child.name.$error"
        />
        <input-container
          label="Возраст"
          type="int"
          v-model="child.age.$model"
          :error="child.age.$error"
        />
        <button class="btn btn_clr" @click="removeChild(i)">Удалить</button>
      </div>
    </div>

    <div class="form__block">
      <button class="form__save-button btn" @click="save">Сохранить</button>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import InputContainer from "../components/InputContainer.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "FormView",
  components: {
    InputContainer,
  },
  data: () => ({
    name: "",
    age: "",
    children: [],
  }),
  computed: {
    ...mapState("person", ["childrenLimit"]),
    ...mapState("person", {
      storedName: "name",
      storedAge: "age",
      storedChildren: "children",
    }),
    notLimited() {
      return this.children.length < this.childrenLimit;
    },
    isValid() {
      return this.$v.$invalid === false;
    },
  },
  validations: {
    name: { required },
    age: { required },
    children: {
      $each: {
        name: { required },
        age: { required },
      },
    },
  },
  methods: {
    ...mapMutations("person", ["SAVE"]),
    addChild() {
      if (this.notLimited) {
        this.children.push({
          name: "",
          age: "",
        });
      }
    },
    removeChild(i) {
      this.children.splice(i, 1);
    },
    save() {
      this.$v.$touch();

      if (this.isValid) {
        this.SAVE({
          name: this.name,
          age: this.age,
          children: this.children,
        });
      }
    },
  },
  mounted() {
    this.name = this.storedName;
    this.age = this.storedAge;
    this.children = [...this.storedChildren];
  },
};
</script>