<template>
  <div class="content-info">
    <span class="info-item">
      Aulas: <b>{{ stats.classes }} | {{ formatTime(stats.classesTime) }}</b>
    </span>
    <span class="info-item">
      Exercícios: <b>{{ stats.exercises }} | {{ formatTime(stats.exercisesTime) }}</b>
    </span>
    <span class="info-item">
      Materiais: <b>{{ stats.resources }} | {{ formatTime(stats.resourcesTime) }}</b>
    </span>
  </div>
</template>

<script setup>
import formatTime from '../utils/formatTime.js';

defineProps({
  stats: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.content-info {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  font-size: 0.85em;
  font-weight: normal;
  margin-top: 5px;
}

.info-item {
  white-space: nowrap;
}
</style>
