<template>
  <div class="tab-pane">
    <div class="content-header">
      <span class="time-total">
        {{ formatTime(contents.totalTime) || '0min' }}
      </span>
    </div>
    <div class="content-items">
      <div v-if="contents.items?.length > 0" class="content-list">
        <div
          v-for="(item, index) in contents.items"
          :key="index"
          class="content-item"
        >
          <input 
            type="checkbox" 
            :id="`${tabId}-${index}`" 
            :checked="item.completed"
          >
          <label :for="`${tabId}-${index}`">
            {{ item.title }}
          </label>
          <span class="item-time">
            {{ formatTime(item.time) }}
          </span>
        </div>
      </div>
      <div v-else class="empty-state">
        Nenhum item disponível
      </div>
    </div>
  </div>
</template>

<script setup>
import formatTime from '../utils/formatTime.js';

defineProps({
  contents: {
    type: Object,
    required: true
  },
  tabId: {
    type: String,
    required: true
  },
});

defineEmits(['update:item']);
</script>

<style scoped>
.tab-pane {
  display: flex;
  flex-direction: column;
}

.content-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #f0f0f0;
  padding: 8px 12px;
  font-size: 0.9em;
}

.content-header h3 {
  margin: 0;
  font-size: 0.95em;
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
