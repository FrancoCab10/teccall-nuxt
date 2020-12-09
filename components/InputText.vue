<template>
  <input
    class="input-text"
    :name="name"
    :placeholder="placeholder"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'InputText',
  props: {
    name: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.input-text {
  padding: 8px;
  width: 100%;
  background: rgb(248, 248, 248);
  border: 2px solid lightgray;
  border-radius: 4px;
  outline: none !important;
  margin: 2px 10px;
}
.input-text:focus {
  border-color: var(--secondary);
}
</style>
