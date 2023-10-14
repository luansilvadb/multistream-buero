<template>
  <div class="videohost">
    <q-video
      :ratio="16/9"
      :style="{ border: 'none', borderRadius: '10px' }"
      :src="getVideoSrc"
    />
  <div>
          <iframe  :src="getChatSrc" @load="iframeLoaded" height="480px"
          :style="{ border: 'none', paddingLeft:'1px',paddingTop:'10px', borderRadius:'10px' }"
            width="100%" v-show="!getIframeLoading">
          </iframe>
  </div>

</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'

// const rightDrawerOpen = ref(false)
const iframeLoadingDark = ref(true)
const iframeLoadingLight = ref(true)
const iframeLoadingTheme = ref('dark') // Padrão para o tema escuro
const $q = useQuasar()

const getIframeLoading = computed(() => {
  return iframeLoadingTheme.value === 'dark' ? iframeLoadingDark.value : iframeLoadingLight.value
})

const getVideoSrc = computed(() => {
  return $q.dark.isActive
    ? 'https://player.twitch.tv/?channel=daniels&parent=daniels-ten.vercel.app&darkpopout'
    : 'https://player.twitch.tv/?channel=daniels&parent=daniels-ten.vercel.app'
})

const getChatSrc = computed(() => {
  return $q.dark.isActive
    ? 'https://www.twitch.tv/embed/daniels/chat?parent=daniels-ten.vercel.app&darkpopout'
    : 'https://www.twitch.tv/embed/daniels/chat?parent=daniels-ten.vercel.app'
})

const iframeLoaded = () => {
  if (iframeLoadingTheme.value === 'dark') {
    iframeLoadingDark.value = false
  } else {
    iframeLoadingLight.value = false
  }
}

// eslint-disable-next-line no-unused-vars
const isMobile = computed(() => {
  return $q.screen.width <= 500 // Defina o valor conforme necessário
})
</script>

<style scoped>
.videohost {
  grid-area: 2 / 2 / 4 / 3;
  width: 100%; /* Largura total em telas menores */
  height: auto; /* Altura automática para ajustar o conteúdo */
  margin: 0;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
}

/* Estilo para telas menores */
@media screen and (max-width: 768px) {
  .videohost {
    grid-area: auto; /* Reverta para fluxo automático na grade */
  }
}
</style>
