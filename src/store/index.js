import { createStore } from 'vuex';
import { fetchContent, fetchSubcontent } from '@/services/mockApiService';

export default createStore({
  state: {
    content: [],
    loading: false,
    componentLoading: {},
    expandedContent: [],
    expandedSubcontent: {},
    expandedSections: []
  },
  getters: {
    getContent: (state) => state.content,
    isLoading: (state) => state.loading,
    isComponentLoading: (state) => (contentId) => {
      return state.componentLoading[contentId] || false;
    },
    getExpandedContent: (state) => state.expandedContent,
    getExpandedSubcontent: (state) => (contentId) => {
      return state.expandedSubcontent[contentId] || [];
    },
    getExpandedSections: (state) => state.expandedSections,
    getContentById: (state) => (id) => {
      return state.content.find(content => content.id === id);
    }
  },
  mutations: {
    SET_CONTENT(state, content) {
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
    UPDATE_CONTENT_SUBCONTENT(state, { contentId, subcontent }) {
      const contentIndex = state.content.findIndex(cont => cont.id === contentId);
      if (contentIndex !== -1) {
        state.content[contentIndex].subcontent = subcontent;
      }
    },
    TOGGLE_CONTENT(state, contentId) {
      if (state.expandedContent.includes(contentId)) {
        state.expandedContent = state.expandedContent.filter(id => id !== contentId);
      } else {
        state.expandedContent.push(contentId);
      }
    },
    TOGGLE_SUBCONTENT(state, { contentId, subcontentId }) {
      if (!state.expandedSubcontent[contentId]) {
        state.expandedSubcontent[contentId] = [];
      }
    
      if (state.expandedSubcontent[contentId].includes(subcontentId)) {
        state.expandedSubcontent[contentId] = state.expandedSubcontent[contentId].filter(id => id !== subcontentId);
      } else {
        state.expandedSubcontent[contentId].push(subcontentId);
      }
    },
    TOGGLE_SECTION(state, sectionId) {
      console.log(sectionId);
      if (state.expandedSections.includes(sectionId)) {
        state.expandedSections = state.expandedSections.filter(id => id !== sectionId);
      } else {
        state.expandedSections.push(sectionId);
      }
    }
  },
  actions: {
    async fetchContent({ commit }) {
      commit('SET_LOADING', true);
      try {
        const response = await fetchContent();
        commit('SET_CONTENT', response);
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
        commit('UPDATE_CONTENT_SUBCONTENT', { contentId, subcontent: response });
      } catch (error) {
        console.error(`Error fetching subcontent for content ${contentId}:`, error);
      } finally {
        commit('SET_COMPONENT_LOADING', { contentId, status: false });
      }
    },

    toggleContent({ commit, dispatch, state }, contentId) {
      commit('TOGGLE_CONTENT', contentId);
      const isExpanded = state.expandedContent.includes(contentId);
      const content = state.content.find(cont => cont.id === contentId);

      if (isExpanded && content && (!content.subcontent || content.subcontent.length === 0)) {
        dispatch('fetchSubcontent', contentId);
      }
    },

    toggleSubcontent({ commit }, { contentId, subcontentId }) {
      commit('TOGGLE_SUBCONTENT', { contentId, subcontentId });
    },

    toggleSection({ commit }, sectionId) {
      commit('TOGGLE_SECTION', sectionId);
    }
  }
});
