<template>
  <label class="input" :class="{ input_error: error }">
    <span class="input__label">{{ label }}</span>
    <input
      class="input__field"
      v-if="type === 'int'"
      type="text"
      v-model="fake"
      @keypress="onlyNumber"
    />
    <input class="input__field" v-else type="text" v-model.trim="fake" />
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "label",
    },
    type: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    fake: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("input", v);
      },
    },
  },
  methods: {
    onlyNumber(e) {
      let keyCode = e.keyCode ? e.keyCode : e.which;

      if (keyCode < 48 || keyCode > 57) {
        e.preventDefault();
      }
    },
  },
  watch: {
    fake(v) {
      if (this.type === "int" && v) {
        v = v.replace(/^0+/, "");
      }

      if (v === 0) {
        v = "";
      }

      this.fake = v;
    },
  },
};
</script>