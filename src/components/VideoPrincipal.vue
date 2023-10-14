<template>
  <div class="videoprincipal">
    <q-video
      :ratio="16/9"
      :style="{ border: 'none', borderRadius: '10px' }"
      :src="videoSrc"
    />
    <!-- <div class="sincronizar">
    <q-btn :style="{ border: 'none', borderRadius: '10px' }" :loading="loading[3]" color="blue" @click="onButtonClick" style="width: 150px">
      Sincronizar
      <template v-slot:loading>
        <q-spinner-hourglass :class="{ 'on-left': loading[3] }" />
        aguarde...
      </template>
    </q-btn>
  </div> -->
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const loading = ref([false, false, false, false, false, false])
    const videoSrc = ref('https://player.twitch.tv/?channel=baiano&parent=daniels-ten.vercel.app&muted=true')

    function simulateProgress (number) {
      // Definimos o estado de carregamento
      loading.value[number] = true

      // Simulamos um atraso
      setTimeout(() => {
        // Terminamos, redefinimos o estado de carregamento
        loading.value[number] = false
      }, 3000)
    }

    function atualizarIframe () {
      // Atualizar a URL do iframe
      // Isso adiciona um parâmetro de data atual à URL para forçar a atualização
      const novaSrc = `${videoSrc.value}&${Date.now()}`
      videoSrc.value = novaSrc
    }

    function onButtonClick () {
      atualizarIframe()
      simulateProgress(3)
    }

    return {
      loading,
      videoSrc,
      simulateProgress,
      onButtonClick
    }
  }
}
</script>

<style scoped>
.videoprincipal {
  grid-area: 2 / 1 / 4 / 2;
  width: 100%;
  height: auto;
  max-width: auto;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}
.sincronizar{
  padding-top: 10px;
  margin-inline-start: 42%;
}

@media screen and (max-width: 768px) {
  .videoprincipal {
    grid-area: auto;
  }
}
</style>
