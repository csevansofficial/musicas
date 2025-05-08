<template>
  <nav class="glass bg-white shadow-lg">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div>
          <NuxtLink to="/" class="flex items-center">
            <span class="font-semibold text-gray-700 text-lg"><Logo /></span>
          </NuxtLink>
        </div>

        <!-- Links para desktop -->
        <div class="hidden md:flex space-x-6">
          <NuxtLink
            to="/"
            class="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Início
          </NuxtLink>
          <NuxtLink
            to="/devocionais"
            class="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Devocionais
          </NuxtLink>
          <NuxtLink
            to="/sobre"
            class="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Sobre
          </NuxtLink>
          <NuxtLink
            to="/contato"
            class="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contato
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import Logo from "@/components/Logo.vue";
</script>