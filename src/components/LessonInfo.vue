<template>
  <div class="lesson-info">
    <div class="lesson-detail">
      <span>Aulas: <b>{{ lesson.aulas.amount }}</b> | {{ lesson.aulas.duracao }}</span>
    </div>
    <div class="lesson-detail">
      <span>Exercícios: <b>{{ lesson.exercicios.amount }}</b> | {{ lesson.exercicios.duracao }}</span>
    </div>
    <div class="lesson-detail">
      <span>Materiais: <b>{{ lesson.materiais.amount }}</b> | {{ lesson.materiais.duracao }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  lesson: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.lesson-info {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 5px 0;
  font-size: 0.9em;
}

.lesson-detail {
  flex: 1;
}
</style>
