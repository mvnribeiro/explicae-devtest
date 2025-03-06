<template>
  <div class="discipline-page">
    <header class="discipline-header">
      <img src="@/assets/explicae.png" alt="Logo Explicaê" class="company-logo" />
      <div class="discipline-breadcrumb">
        <div class="discipline-breadcrumb__tail"> Cadernos </div>
        <div class="discipline-breadcrumb__head"> Língua Portuguesa </div>
      </div>
    </header>
  </div>
</template>

<script setup>
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
}

.discipline-breadcrumb {
  display: flex;
  flex-direction: row;
  gap: 4px;
}

.discipline-breadcrumb__tail {
 &::after {
  content: '/';
 }
}

.discipline-breadcrumb__head {
  text-decoration: underline;
  text-decoration-thickness: 4px;
  text-underline-offset: 8px;
  text-decoration-color: #A505F0;
}

.course-title {
  font-size: 16px
}
</style>
