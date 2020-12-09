<template>
  <div class="courses-view">
    <app-navbar></app-navbar>
    <app-container>
      <h1 class="title">Courses</h1>
      <custom-filters @change="handleFilter" />
      <custom-table :headers="headers" :data="courseList">
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
import courses from '@/data/courses.json'

export default {
  name: 'Courses',
  components: {
    AppContainer,
    AppNavbar,
    CustomFilters,
    CustomTable,
  },
  data: () => ({
    courses,
    headers: [
      { name: 'id', title: 'ID', width: '5%' },
      { name: 'course', title: 'Course' },
      { name: 'description', title: 'Description' },
      { name: 'status', title: 'Status', width: '10%' },
    ],
  }),
  computed: {
    ...mapGetters({
      courseList: 'courses/courses',
    }),
  },
  mounted() {
    this.setCourses(courses)
  },
  methods: {
    ...mapActions({
      setCourses: 'courses/setCourses',
    }),
    handleFilter({ sortBy, filter }) {
      const filteredData = this.courses
        .filter((row) =>
          row.course.toLowerCase().includes(filter.toLowerCase())
        )
        .sort((a, b) => {
          const sortVal = a.id > b.id ? -1 : a.id < b.id ? 1 : 0
          return sortBy === 'asc' ? sortVal * -1 : sortVal
        })

      this.setCourses(filteredData)
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
