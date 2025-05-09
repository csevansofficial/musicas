<template>
  <div class="under-construction glass">
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
      </svg>
    </div>
    <p class="text">Em construção</p>
  </div>
</template>

<script>
export default {
  name: "UnderConstruction",
};
</script>

<style scoped>
.under-construction {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.icon {
  margin-bottom: 10px;
}

.text {
  font-size: 18px;
  font-weight: 500;
  color: #555;
  text-align: center;
}
</style>