<template>
  <div
    v-if="content"
    class="content-accordion"
  >
    <div
      @click="toggleContent(content.id)"
      class="content-header"
    >
      <div class="content-title">
        <span class="number">
          {{ content.id }}.
        </span> 
        <span>
          {{ content.title }}
        </span>
      </div>
      <ContentStats :stats="content.stats" />
    </div>

    <div v-if="isExpanded">
      <SubcontentItem 
        v-for="subcontent in content.subcontent" 
        :key="subcontent.id"
        :subcontent="subcontent"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import ContentStats from './ContentStats.vue';
import SubcontentItem from './SubcontentItem.vue';

const props = defineProps({
  contentId: {
    type: String,
    required: true
  }
});

const store = useStore();

const content = computed(() => store.getters.getContentById(props.contentId));
const isExpanded = computed(() => 
  store.getters.getExpandedCategories.includes(props.contentId)
);

const toggleContent = (id) => {
  store.dispatch('toggleContent', id);
};
</script>

<style scoped>
.content-accordion {
  background-color: #ffffff;
  margin: 0 0 15px 0;
  border-radius: 4px;
  overflow: hidden;
}

.content-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
}

.content-title {
  display: flex;
  align-items: center;
  gap: 5px;
}

.number {
  font-weight: bold;
}

.subcontent {
  padding: 10px 15px;
}
</style>
