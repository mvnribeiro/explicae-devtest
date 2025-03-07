<template>
  <div class="tabbed-content">
    <div class="tab-nav">
      <button 
        v-for="tab in tabs" 
        :key="tab.id" 
        @click="activeTab = tab.id"
        :class="{ 'active': activeTab === tab.id }"
        class="tab-button"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="tab-content">
      <tab-content-pane 
        v-if="activeTab === 'classes'"
        :contents="section.classes"
        tab-id="classes"
        label="Aulas"
      />
      
      <tab-content-pane 
        v-else-if="activeTab === 'exercises'"
        :contents="section.exercises"
        tab-id="exercises"
        label="Exercícios"
      />
      
      <tab-content-pane 
        v-else-if="activeTab === 'resources'"
        :contents="section.resources"
        tab-id="resources"
        label="Materiais"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TabContentPane from './TabContentPane.vue';

defineProps({
  section: {
    type: Object,
    required: true
  }
});

const activeTab = ref('classes');

const tabs = [
  { id: 'classes', label: 'Aulas' },
  { id: 'exercises', label: 'Exercícios' },
  { id: 'resources', label: 'Materiais' }
];
</script>

<style scoped>
.tabbed-content {
  margin-top: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.tab-nav {
  display: flex;
  background-color: #ECCBFC;
  border-bottom: 1px solid #e0e0e0;
}

.tab-button {
  padding: 10px 15px;
  border: none;
  background: none;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.tab-button.active {
  border-bottom: 4px solid #9c27b0;
}

.tab-content {
  padding: 0;
}
</style>
