<template>
  <div class="relative">
    <!-- Botão principal -->
    <button
      ref="shareButton"
      @click="toggleMenu"
      class="button-share flex items-center justify-center bg-gray-800 text-white rounded-full p-3 shadow-lg hover:bg-gray-700 transition-all"
      aria-label="Compartilhar"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12v1m0-1a8 8 0 018-8m0 0a8 8 0 018 8m-8-8v1m0 11a8 8 0 01-8-8m16 0a8 8 0 01-8 8m0-8h.01" />
      </svg>
    </button>

    <!-- Menu suspenso com Teleport -->
    <Teleport to="body">
      <div
        v-if="menuOpen"
        class="fixed inset-0 flex items-center justify-center z-50 bg-black/50"
        @click.self="closeMenu"
        aria-modal="true"
        role="dialog"
        tabindex="-1"
      >
        <div
          class="w-80 bg-white/30 backdrop-blur-md rounded-lg shadow-glass z-10 overflow-hidden"
          ref="dialog"
        >
          <!-- Título do painel -->
          <div class="px-4 py-2 border-b border-gray-300">
            <h2 class="text-lg font-semibold text-gray-800">Compartilhar</h2>
          </div>

          <!-- Botão de copiar com input -->
          <div class="flex items-center px-4 py-3 gap-2 border-b border-gray-300">
            <input
              type="text"
              :value="currentUrl"
              class="flex-1 bg-gray-100 text-gray-700 rounded-lg px-3 py-2 text-sm"
              readonly
              disabled
            />
            <button
              @click="copyLink"
              class="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-all"
            >
              Copiar
            </button>
          </div>

          <!-- Lista de serviços -->
          <ul class="py-4 grid grid-cols-4 gap-4 px-4">
            <li v-for="service in services" :key="service.name">
              <button
                @click="handleServiceClick(service.platform)"
                class="flex flex-col items-center text-gray-700 hover:bg-gray-100/50 p-2 rounded-lg"
              >
                <img :src="service.icon" :alt="service.name" class="h-10 w-10 mb-1" />
                <span class="text-sm">{{ service.name }}</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted, onBeforeUnmount } from 'vue';

const menuOpen = ref(false);
const dialog = ref(null);
const shareButton = ref(null);
const currentUrl = ref('');

onMounted(() => {
  if (typeof window !== 'undefined') {
    currentUrl.value = window.location.href; // Define a URL atual apenas no navegador
  }
});

const toggleMenu = async () => {
  console.log('toggleMenu called'); // Log para depuração
  menuOpen.value = !menuOpen.value;
  console.log('menuOpen:', menuOpen.value); // Verifica o estado de menuOpen
  if (menuOpen.value) {
    await nextTick(); // Aguarda o DOM ser atualizado
    if (dialog.value) {
      dialog.value.setAttribute('tabindex', '-1'); // Garante que o painel seja focável
      dialog.value.focus(); // Foco no painel
    }
  }
};

const closeMenu = () => {
  console.log('closeMenu called'); // Log para depuração
  menuOpen.value = false;
  shareButton.value?.focus(); // Devolve o foco ao botão de compartilhamento
};

const handleServiceClick = (platform) => {
  share(platform);
  if (platform !== 'link') {
    closeMenu(); // Fecha o painel para serviços que não sejam "copiar link"
  }
};

const copyLink = () => {
  navigator.clipboard.writeText(currentUrl.value);
  alert('Link copiado para a área de transferência!');
};

// Gerenciar foco do teclado
const trapFocus = (event) => {
  const focusableElements = dialog.value.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.key === 'Tab') {
    if (event.shiftKey) {
      // Shift + Tab: Foco no último elemento
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab: Foco no primeiro elemento
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  } else if (event.key === 'Escape') {
    // Fechar o menu ao pressionar Escape
    closeMenu();
  }
};

// Adicionar/remover eventos de teclado
watch(menuOpen, (isOpen) => {
  const mainContent = document.querySelector('main'); // Altere para o seletor correto do conteúdo principal
  if (isOpen) {
    mainContent?.setAttribute('aria-hidden', 'true'); // Apenas oculte o conteúdo principal
    document.addEventListener('keydown', trapFocus);
  } else {
    mainContent?.removeAttribute('aria-hidden');
    document.removeEventListener('keydown', trapFocus);
  }
});

onMounted(() => {
  document.body.removeAttribute('aria-hidden');
});

onBeforeUnmount(() => {
  document.body.removeAttribute('aria-hidden');
  document.removeEventListener('keydown', trapFocus);
});

// Lista de serviços de compartilhamento
const services = [
  { name: 'WhatsApp', platform: 'whatsapp', icon: '/icons/whatsapp.svg' },
  { name: 'Facebook', platform: 'facebook', icon: '/icons/facebook.svg' },
  { name: 'Twitter', platform: 'twitter', icon: '/icons/twitter.svg' },
  { name: 'Email', platform: 'email', icon: '/icons/email.svg' },
  { name: 'Telegram', platform: 'telegram', icon: '/icons/telegram.svg' },
  { name: 'LinkedIn', platform: 'linkedin', icon: '/icons/linkedin.svg' },
  { name: 'Pinterest', platform: 'pinterest', icon: '/icons/pinterest.svg' },
  { name: 'Reddit', platform: 'reddit', icon: '/icons/reddit.svg' },
  { name: 'VK', platform: 'vk', icon: '/icons/vk.svg' },
  { name: 'Tumblr', platform: 'tumblr', icon: '/icons/tumblr.svg' },
  { name: 'Instagram', platform: 'instagram', icon: '/icons/instagram.svg' },
];

const share = (platform) => {
  const url = currentUrl.value; // URL atual da página
  if (platform === 'link') {
    navigator.clipboard.writeText(url);
    alert('Link copiado para a área de transferência!');
  } else if (platform === 'instagram') {
    alert('Copie o link e compartilhe manualmente no Instagram!');
  } else if (platform === 'whatsapp') {
    window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, '_blank');
  } else if (platform === 'facebook') {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  } else if (platform === 'twitter') {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, '_blank');
  } else if (platform === 'email') {
    window.open(`mailto:?subject=Confira isso!&body=${encodeURIComponent(url)}`, '_self');
  } else if (platform === 'telegram') {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}`, '_blank');
  } else if (platform === 'linkedin') {
    window.open(`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}`, '_blank');
  } else if (platform === 'pinterest') {
    window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}`, '_blank');
  } else if (platform === 'reddit') {
    window.open(`https://reddit.com/submit?url=${encodeURIComponent(url)}`, '_blank');
  } else if (platform === 'vk') {
    window.open(`https://vk.com/share.php?url=${encodeURIComponent(url)}`, '_blank');
  } else if (platform === 'tumblr') {
    window.open(`https://www.tumblr.com/share/link?url=${encodeURIComponent(url)}`, '_blank');
  }
};
</script>

<style scoped>
.button-share {
  width: 48px;
  height: 48px;
}

ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

div[aria-modal="true"] {
  background: rgba(0, 0, 0, 0.5); /* Fundo escuro para o modal */
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: var(--glass-box-shadow, 0 8px 32px rgba(31, 38, 135, 0.37));
}
</style>