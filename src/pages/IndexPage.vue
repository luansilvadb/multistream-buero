<template>
  <div class="index-page">
    <ContainerComponent/>
  </div>
</template>

<script>
import ContainerComponent from '../components/ContainerComponent.vue'

export default {
  components: {
    ContainerComponent
  }
}
</script>

<style scoped>
/* Estilos específicos da página, se necessário */
.index-page {
  position: relative;

}
</style>
