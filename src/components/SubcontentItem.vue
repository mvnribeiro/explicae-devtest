<template>
  <div class="subcontent">
    <div 
      @click="toggleSubcontent(subcontent.id)" 
      class="subcontent-header" 
      :class="{ 'active': isExpanded }"
    >
      <div class="subcontent-title">
        <span class="toggle-icon">
          {{ isExpanded ? '-' : '+' }}
        </span>
        <span>
          {{ subcontent.title }}
        </span>
      </div>
    </div>

    <div
      v-if="isExpanded"
      class="subcontent-content"
    >
      <div
        v-if="subcontent.lessons && subcontent.lessons.length"
      >
        <LessonInfo 
          v-for="lesson in subcontent.lessons" 
          :key="lesson.id" 
          :lesson="lesson" 
        />
      </div>

      <div
        v-if="subcontent.sections"
        class="nested-sections"
      >
        <SectionItem 
          v-for="section in subcontent.sections" 
          :key="section.id"
          :section="section"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import LessonInfo from './LessonInfo.vue';
import SectionItem from './SectionItem.vue';

const props = defineProps({
  subcontent: {
    type: Object,
    required: true
  }
});

const store = useStore();
const isExpanded = computed(() => 
  store.getters.getExpandedSubcontent.includes(props.subcontent.id)
);

const toggleSubcontent = (id) => {
  store.dispatch('toggleSubcontent', id);
};
</script>

<style scoped>
.subcontent {
  margin-bottom: 3px;
}

.subcontent-header {
  padding: 8px 10px;
  cursor: pointer;
  border-bottom: 1px solid #eaeaea;
  border-radius: 4px;
  margin-top: 5px;
}

.subcontent-header.active {
  background-color: #ECCBFC;
}

.subcontent-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.toggle-icon {
  font-weight: bold;
  font-size: 1.2em;
  width: 15px;
  display: inline-block;
  text-align: center;
}

.subcontent-content {
  padding: 10px 15px;
  border-radius: 0 0 4px 4px;
}

.nested-sections {
  margin-top: 10px;
}
</style>
