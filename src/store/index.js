import { createStore } from 'vuex';
import { fetchCategories, fetchSubcontent } from '@/services/mockApiService';

export default createStore({
  state: {
    content: [],
    loading: false,
    componentLoading: {},
    expandedCategories: [],
    expandedSubcontent: [],
    expandedSections: []
  },
  getters: {
    getCategories: (state) => state.content,
    isLoading: (state) => state.loading,
    isComponentLoading: (state) => (contentId) => {
      return state.componentLoading[contentId] || false;
    },
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
    SET_COMPONENT_LOADING(state, { contentId, status }) {
      state.componentLoading = {
        ...state.componentLoading, [contentId]: status
      };
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
        const response = await fetchCategories();
        commit('SET_CATEGORIES', response);
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        commit('SET_LOADING', false);
      }
    },

    async fetchSubcontent({ commit }, contentId) {
      commit('SET_COMPONENT_LOADING', { contentId, status: true });
      try {
        const response = await fetchSubcontent(contentId);
        commit('UPDATE_CATEGORY_SUBCATEGORIES', { contentId, subcontent: response });
      } catch (error) {
        console.error(`Error fetching subcontent for content ${contentId}:`, error);
      } finally {
        commit('SET_COMPONENT_LOADING', { contentId, status: false });
      }
    },

    toggleContent({ commit, dispatch, state }, contentId) {
      commit('TOGGLE_CATEGORY', contentId);
      const isExpanded = state.expandedCategories.includes(contentId);
      const category = state.content.find(cat => cat.id === contentId);

      if (isExpanded && category && (!category.subcontent || category.subcontent.length === 0)) {
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
