import { createStore } from 'vuex';

export default createStore({
  state: {
    categories: [],
    loading: false,
  },
  getters: {
    getCategories: (state) => state.categories,
    isLoading: (state) => state.loading,
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_LOADING(state, status) {
      state.loading = status;
    },
  },
  actions: {
    async fetchCategories({ commit }) {
      commit('SET_LOADING', true);
      try {
        const response = await new Promise(resolve => {
          setTimeout(() => {
            resolve([
              {
                id: '1',
                title: 'Interpretação de Textos',
                stats: {
                  aulas: 1193,
                  aulasTime: '100h 22m',
                  exercicios: 161,
                  exerciciosTime: '79h 12m',
                  materiais: 53,
                  materiaisTime: '58h 18m'
                },
                subcategories: []
              },
              {
                id: '2',
                title: 'Gramática',
                stats: {
                  aulas: 36,
                  aulasTime: '14h 41m',
                  exercicios: 27,
                  exerciciosTime: '10h 45m',
                  materiais: 10,
                  materiaisTime: '10h 20m'
                },
                subcategories: []
              }
            ]);
          }, 900);
        });
        
        commit('SET_CATEGORIES', response);
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        commit('SET_LOADING', false);
      }
    },
  }
});
