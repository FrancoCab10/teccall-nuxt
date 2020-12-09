<template>
  <div class="students-view">
    <app-navbar></app-navbar>
    <app-container>
      <h1 class="title">Students</h1>
      <custom-filters @change="handleFilter" />
      <custom-table :headers="headers" :data="studentList">
        <template v-slot:cell-status="{ value }">
          <span :class="value ? 'active' : 'inactive'">
            {{ value ? 'Active' : 'Inactive' }}
          </span>
        </template>
      </custom-table>
    </app-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AppContainer from '@/components/AppContainer.vue'
import AppNavbar from '@/components/AppNavbar.vue'
import CustomFilters from '@/components/CustomFilters.vue'
import CustomTable from '@/components/CustomTable.vue'
import students from '@/data/students.json'

export default {
  name: 'Students',
  components: {
    AppContainer,
    AppNavbar,
    CustomFilters,
    CustomTable,
  },
  data: () => ({
    students,
    headers: [
      { name: 'id', title: 'ID', width: '5%' },
      { name: 'name', title: 'Name' },
      { name: 'file', title: 'File', width: '10%' },
      { name: 'status', title: 'Status', width: '10%' },
    ],
  }),
  computed: {
    ...mapGetters({
      studentList: 'students/students',
    }),
  },
  mounted() {
    this.setStudents(students)
  },
  methods: {
    ...mapActions({
      setStudents: 'students/setStudents',
    }),
    handleFilter({ sortBy, filter }) {
      const filteredData = this.students
        .filter((row) => row.name.toLowerCase().includes(filter.toLowerCase()))
        .sort((a, b) => {
          const sortVal = a.id > b.id ? -1 : a.id < b.id ? 1 : 0
          return sortBy === 'asc' ? sortVal * -1 : sortVal
        })

      this.setStudents(filteredData)
    },
  },
}
</script>

<style scoped>
.title {
  color: var(--secondary);
  text-align: left;
}
span.active {
  color: green;
}
span.inactive {
  color: red;
}
</style>
