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
      <div v-if="activeTab === 'classes'" class="tab-pane">
        <div class="content-header">
          <span class="time-total">{{ section.classes.totalTime }}</span>
        </div>
        <div class="content-items">
          <div v-for="(item, index) in section.classes.items" :key="index" class="content-item">
            <input type="checkbox" :id="'class-' + section.id + '-' + index" v-model="item.completed">
            <label :for="'class-' + section.id + '-' + index">{{ item.title }}</label>
            <span class="item-time">{{ item.time }}</span>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'exercises'" class="tab-pane">
        <div class="content-header">
          <span class="time-total">{{ section.exercises.totalTime }}</span>
        </div>
        <div class="content-items">
          <div v-for="(exercise, index) in section.exercises.items" :key="index" class="content-item">
            <input type="checkbox" :id="'exercise-' + section.id + '-' + index" v-model="exercise.completed">
            <label :for="'exercise-' + section.id + '-' + index">{{ exercise.title }}</label>
            <span class="item-time">{{ exercise.time }}</span>
          </div>
        </div>
      </div>

      <div v-if="activeTab === 'resources'" class="tab-pane">
        <div class="content-header">
          <span class="time-total">{{ section.resourcesTime }}</span>
        </div>
        <div class="content-items">
          <div v-if="section.resources.items && section.resources.items.length">
            <div v-for="(material, index) in section.resources.items" :key="index" class="content-item">
              <input type="checkbox" :id="'material-' + section.id + '-' + index" v-model="material.completed">
              <label :for="'material-' + section.id + '-' + index">{{ material.title }}</label>
              <span class="item-time">{{ material.time }}</span>
            </div>
          </div>
          <div v-else class="empty-state">
            Nenhum material disponível
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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

.tab-pane {
  display: flex;
  flex-direction: column;
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  padding: 8px 12px;
  font-size: 0.9em;
}

.content-header h3 {
  margin: 0;
  font-size: 0.95em;
}

.time-total {
  font-weight: bold;
}

.content-items {
  padding: 5px 10px;
}

.content-item {
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}

.content-item input[type="checkbox"] {
  margin-right: 10px;
}

.content-item label, .content-item span:first-child {
  flex: 1;
}

.item-time {
  text-align: right;
  font-size: 0.85em;
  color: #666;
}

.empty-state {
  padding: 15px;
  text-align: center;
  color: #666;
  font-style: italic;
}
</style>
