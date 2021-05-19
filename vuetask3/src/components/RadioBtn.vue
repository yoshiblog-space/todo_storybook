<template>
  <label>
    <input
      type="radio"
      name="state"
      :value="filterLabel"
      :checked="defaultState"
      v-on:click="handleClick"
    />{{ filterLabel }}</label>
</template>
<script>
export default {
  name: 'radio-Btn',
  props: {
    filterLabel: { type: String },
    defaultState: { type: Number }
  },
  emits: ["clickFilters"],
  methods: {
    handleClick() {
      const clickLabel = this.filterLabel;
      this.$emit("clickFilters", clickLabel);
    }
  }
};
</script>
