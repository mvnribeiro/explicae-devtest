<template>
  <div class="section">
    <div 
      @click="toggleSection(section.id)" 
      class="section-header" 
      :class="{ 'active': isExpanded }"
    >
      <div class="section-title">
        <span class="toggle-icon">
          {{ isExpanded ? '-' : '+' }}
        </span>
        <span>{{ section.title }}</span>
      </div>
    </div>
    
    <div
      v-if="isExpanded"
      class="section-content"
    >
      <ContentStats :stats="section.stats" />
      <SectionTabContent :section="section" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ContentStats from './ContentStats.vue';
import SectionTabContent from './SectionTabContent.vue';

const props = defineProps({
  section: {
    type: Object,
    required: true
  }
});

const store = useStore();
const isExpanded = computed(() => 
  store.getters.getExpandedSections.includes(props.section.id)
);

const toggleSection = (id) => {
  store.dispatch('toggleSection', id);
};
</script>

<style scoped>
.section-header {
  padding: 8px 10px;
  cursor: pointer;
  background-color: #f0f0f0;
  border-bottom: 1px solid #e5e5e5;
  border-radius: 4px;
}

.section-header.active {
  background-color: #ECCBFC;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.section-content {
  padding: 10px 15px;
  border-radius: 0 0 4px 4px;
}
</style>
