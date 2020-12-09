export const state = () => ({
  courses: [],
})

export const getters = {
  courses: ({ courses }) => courses,
}

export const mutations = {
  SET_COURSES: (state, courses) => (state.courses = courses),
}

export const actions = {
  setCourses: ({ commit }, courses) => commit('SET_COURSES', courses),
}
