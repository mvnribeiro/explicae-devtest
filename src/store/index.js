import { createStore } from 'vuex';

export default createStore({
  state: {
    content: [],
    loading: false,
    expandedCategories: [],
    expandedSubcontent: [],
    expandedSections: []
  },
  getters: {
    getCategories: (state) => state.content,
    isLoading: (state) => state.loading,
    getExpandedCategories: (state) => state.expandedCategories,
    getExpandedSubcontent: (state) => state.expandedSubcontent,
    getExpandedSections: (state) => state.expandedSections,
    getContentById: (state) => (id) => {
      return state.content.find(content => content.id === id);
    }
  },
  mutations: {
    SET_CATEGORIES(state, content) {
      state.content = content;
    },
    SET_LOADING(state, status) {
      state.loading = status;
    },
    UPDATE_CATEGORY_SUBCATEGORIES(state, { contentId, subcontent }) {
      const contentIndex = state.content.findIndex(cat => cat.id === contentId);
      if (contentIndex !== -1) {
        state.content[contentIndex].subcontent = subcontent;
      }
    },
    TOGGLE_CATEGORY(state, contentId) {
      if (state.expandedCategories.includes(contentId)) {
        state.expandedCategories = state.expandedCategories.filter(id => id !== contentId);
      } else {
        state.expandedCategories.push(contentId);
      }
    },
    TOGGLE_SUBCATEGORY(state, subcontentId) {
      if (state.expandedSubcontent.includes(subcontentId)) {
        state.expandedSubcontent = state.expandedSubcontent.filter(id => id !== subcontentId);
      } else {
        state.expandedSubcontent.push(subcontentId);
      }
    },
    TOGGLE_SECTION(state, sectionId) {
      if (state.expandedSections.includes(sectionId)) {
        state.expandedSections = state.expandedSections.filter(id => id !== sectionId);
      } else {
        state.expandedSections.push(sectionId);
      }
    }
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
                subcontent: []
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
                subcontent: []
              }
            ]);
          }, 900);
        });
        
        commit('SET_CATEGORIES', response);
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        commit('SET_LOADING', false);
      }
    },
    
    async fetchSubcontent({ commit }, contentId) {
      const subcontentData = {
        '1': [
          {
            id: 'comp01',
            title: 'Competência 01: Palavras, Imagem e Vida Social',
            lessons: [
              {
                id: '11',
                aulas: { amount: 523, duracao: '48h 50m' },
                exercicios: { amount: 62, duracao: '28h 30m' },
                materiais: { amount: 32, duracao: '38h 15m' }
              }
            ]
          },
          {
            id: 'comp06',
            title: 'Competência 06: Texto - Contexto e Função',
            lessons: [
              {
                id: '12',
                aulas: { amount: 310, duracao: '42h 24m' },
                exercicios: { amount: 90, duracao: '38h 54m' },
                materiais: { amount: 29, duracao: '28h 13m' }
              }
            ]
          },
        ],
        '2': [
          {
            id: 'fonologia',
            title: '2.1 Fonologia',
            lessons: [
              {
                id: '21',
                aulas: { amount: 67, duracao: '31h 09m' },
                exercicios: { amount: 44, duracao: '31h 38m' },
                materiais: { amount: 20, duracao: '31h 36m' }
              }
            ]
          },
          {
            id: 'morfologia',
            title: '2.2 Morfologia',
            lessons: [
              {
                id: '22',
                aulas: { amount: 67, duracao: '31h 09m' },
                exercicios: { amount: 44, duracao: '31h 38m' },
                materiais: { amount: 20, duracao: '31h 36m' }
              }
            ],
            sections: [
              {
                title: 'A. Estrutura e Formação das Palavras',
                stats: {
                  aulas: 94,
                  aulasTime: '00h 55m',
                  exercicios: 60,
                  exerciciosTime: '62h 45m',
                  materiais: 1,
                  materiaisTime: '00h 48m'
                },
                classes: {
                  totalTime: '00:05:29',
                  items: [
                    { title: 'Estrutura e Formação da Palavra I', time: '00:14:00', completed: false },
                    { title: 'Estrutura e Formação da Palavra II', time: '00:14:19', completed: false },
                    { title: 'Estrutura e Formação da Palavra III', time: '00:15:14', completed: true },
                    { title: 'Estrutura e Formação das Palavras IV: Um Passeio no Caminho', time: '00:11:56', completed: false }
                  ]
                },
                exercises: [
                  {
                    id: 'exercicio1',
                    title: 'Exercício 1: Estrutura e Formação da Palavra I',
                    time: '00:14:00'
                  },
                  {
                    id: 'exercicio2',
                    title: 'Exercício 2: Estrutura e Formação da Palavra II',
                    time: '00:14:19'
                  },
                  {
                    id: 'exercicio3',
                    title: 'Exercício 3: Estrutura e Formação da Palavra III',
                    time: '00:15:14'
                  },
                ],
              }
            ]
          },
        ]
      };
      
      try {
        const subcontent = await new Promise(resolve => {
          commit('SET_LOADING', true);
          setTimeout(() => {
            resolve(subcontentData[contentId] || []);
          }, 500);
          commit('SET_LOADING', false);
        });

        commit('UPDATE_CATEGORY_SUBCATEGORIES', { contentId, subcontent });
        return subcontent;
      } catch (error) {
        console.error(`Error fetching subcontent for content ${contentId}:`, error);
        return [];
      }
    },
    
    toggleContent({ commit, dispatch }, contentId) {
      commit('TOGGLE_CATEGORY', contentId);
      const isExpanded = this.state.expandedCategories.includes(contentId);
      if (isExpanded) {
        dispatch('fetchSubcontent', contentId);
      }
    },
    
    toggleSubcontent({ commit }, subcontentId) {
      commit('TOGGLE_SUBCATEGORY', subcontentId);
    },
    
    toggleSection({ commit }, sectionId) {
      commit('TOGGLE_SECTION', sectionId);
    }
  }
});