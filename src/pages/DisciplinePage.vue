<template>
  <div class="discipline-page">
    <header class="discipline-header">
      <img
        src="@/assets/explicae.png"
        alt="Logo Explicaê"
        class="company-logo"
      />
      <div class="discipline-breadcrumb">
        <div class="discipline-breadcrumb__tail">
          Cadernos
        </div>
        <div class="discipline-breadcrumb__head">
          Língua Portuguesa
        </div>
      </div>
    </header>

    <div v-if="isLoading" class="loading-state">
      Carregando conteúdo...
    </div>

    <div v-else class="content-container">
      <ContentAccordion 
        v-for="cont in content" 
        :key="cont.id" 
        :contentId="cont.id" 
      />
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import ContentAccordion from '@/components/ContentAccordion.vue';

const store = useStore();

const content = computed(() => store.getters.getCategories);
const isLoading = computed(() => store.getters.isLoading);

onMounted(() => {
  store.dispatch('fetchCategories');
});
</script>

<style scoped>
.discipline-page {
  margin: 0 auto;
  padding: 20px;
}

.discipline-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
}

.company-logo {
  width: 80px;
  object-fit: contain;
  margin-bottom: 15px;
}

.discipline-breadcrumb {
  display: flex;
  flex-direction: row;
  gap: 4px;
}

.discipline-breadcrumb__tail {
 &::after {
  content: '/';
  margin-right: 4px;
 }
}

.discipline-breadcrumb__head {
  text-decoration: underline;
  text-decoration-thickness: 4px;
  text-underline-offset: 8px;
  text-decoration-color: #A505F0;
}

.loading-state {
  padding: 20px;
  text-align: center;
  font-size: 16px;
  color: #666;
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>