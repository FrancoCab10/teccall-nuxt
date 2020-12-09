<template>
  <div class="custom-filters">
    <div class="sort">
      <i class="material-icons">sort</i>
      <label for="sl-sort">Sort</label>
      <input-select v-model="sortBy" name="sl-sort" :options="sortOptions" />
    </div>
    <span class="separator"></span>
    <div class="filters">
      <i class="material-icons">filter_list</i>
      <label for="txt-filter">Filter</label>
      <input-text v-model="filter" name="txt-filter" placeholder="Search" />
    </div>
  </div>
</template>

<script>
import InputSelect from './InputSelect.vue'
import InputText from './InputText.vue'

export default {
  name: 'CustomFilters',
  components: { InputSelect, InputText },
  data: () => ({
    filter: '',
    sortBy: 'asc',
    sortOptions: [
      { label: 'Desc', value: 'desc' },
      { label: 'Asc', value: 'asc' },
    ],
  }),
  watch: {
    filter() {
      this.emitChange()
    },
    sortBy() {
      this.emitChange()
    },
  },
  methods: {
    emitChange() {
      this.$emit('change', {
        sortBy: this.sortBy,
        filter: this.filter,
      })
    },
  },
}
</script>

<style scoped>
.custom-filters {
  display: flex;
  align-items: center;
  width: 100%;
  background: white;
  border-radius: 20px;
  box-shadow: 0 1px 1px rgba(189, 189, 189, 0.12),
    0 2px 2px rgba(189, 189, 189, 0.12), 0 4px 4px rgba(189, 189, 189, 0.12),
    0 8px 8px rgba(189, 189, 189, 0.12), 0 16px 16px rgba(189, 189, 189, 0.12);
  padding: 20px;
}
.sort,
.filters {
  display: flex;
  align-items: center;
}
.CustomFilters label {
  font-size: 1.2rem;
}
.separator {
  align-self: stretch;
  margin: 0 10px;
  border-left: 2px solid var(--secondary);
}
</style>
