export const formDataModule = {
  state: () => ({
    formDataStore: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      message: ""
    }
  }),
  getters: {
    getFormDataStore(state) {
      return state.formDataStore
    }
  },
  mutations: {
    setFormDataStore(state, formDataStore) {
      state.formDataStore = formDataStore
    },
  },
  namespaced: true
}