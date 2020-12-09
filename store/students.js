export const state = () => ({
  students: [],
})

export const getters = {
  students: ({ students }) => students,
}

export const mutations = {
  SET_STUDENTS: (state, students) => (state.students = students),
}

export const actions = {
  setStudents: ({ commit }, students) => commit('SET_STUDENTS', students),
}
