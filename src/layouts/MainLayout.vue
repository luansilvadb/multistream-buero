<template>
  <div :class="layoutClasses">
    <q-layout view="hhh LpR fFf" :class="[$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark']">
      <q-header :class="[$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark']">
        <q-toolbar :class="[$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark']">
          <q-btn dense flat round icon="menu" @click="toggleDrawer" />
          <q-toolbar-title class="toolbar-title">
            <router-link :to="{ path: '/' }" class="router-link" @mouseover="hover = true" @mouseleave="hover = false">
              <q-avatar><q-img src="../assets/logo-main.png" /></q-avatar>
              <b :class="{ 'transition-color': true }" :style="{ color: getColor() }">Daniels</b>
            </router-link>
          </q-toolbar-title>
          <a href="https://www.rivalry.com/pt" target="_blank" class="icon-link">
            <q-btn @click="handleButtonClick" class="icon-button"><img src="../assets/rivalry.svg" alt="Seu Ícone" /></q-btn>
          </a>
          <q-space />
          <q-btn flat round dense :icon="fullscreenIcon" @click="toggleFullscreen"><q-tooltip>Full screen</q-tooltip></q-btn>
          <q-btn dense flat round icon="dark_mode" @click="toggleDarkMode"><q-tooltip>Tema</q-tooltip></q-btn>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" :mini="miniState" @mouseover="miniState = false"
        @mouseout="miniState = true" :width="200" :breakpoint="500"
        :class="[$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark']">
        <q-scroll-area class="fit" :class="[$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark']">
          <q-list :class="[$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark']">
            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable v-ripple :to="menuItem.route">
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index" v-if="menuItem.separator" />
            </template>
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container :class="[$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark']">
        <router-view />
      </q-page-container>

    </q-layout>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useQuasar } from 'quasar'

const layoutClasses = computed(() => [$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark'])
const drawer = ref(false)
const miniState = ref(true)
const iframeLoadingDark = ref(true)
const iframeLoadingLight = ref(true)
const iframeLoadingTheme = ref('dark') // Padrão para o tema escuro
const $q = useQuasar()

const menuList = [
  { icon: 'help', label: 'Versão', separator: false, route: '/atualizacao' }
]

const toggleDrawer = () => { drawer.value = !drawer.value }
const toggleDarkMode = () => {
  $q.dark.toggle()
  iframeLoadingTheme.value = $q.dark.isActive ? 'dark' : 'light'
  iframeLoadingDark.value = true
  iframeLoadingLight.value = true
  $q.nextTick(() => iframeLoaded())
}

const iframeLoaded = () => {
  iframeLoadingTheme.value === 'dark' ? iframeLoadingDark.value = false : iframeLoadingLight.value = false
}

const hover = ref(false)

const getColor = () => hover.value ? '#FF6700' : $q.dark.isActive ? 'white' : 'black'
const isFullscreen = ref(false)

const fullscreenIcon = computed(() => isFullscreen.value ? 'fullscreen_exit' : 'fullscreen')

const toggleFullscreen = () => {
  const element = document.documentElement

  if (document.fullscreenElement) {
    document.exitFullscreen()
    isFullscreen.value = false
  } else {
    element.requestFullscreen().catch((err) => {
      console.error(`Error attempting to enable full-screen mode: ${err.message}`)
    })
    isFullscreen.value = true
  }
}

</script>

<style scoped>
.router-link { text-decoration: none; }
.router-link:hover { cursor: pointer !important; }
.bg-dark, .bg-white { transition: background-color 0.5s ease, color 0.5s ease; }
.transition-color { transition: color 0.5s ease; }
.icon-button img { height: 40px; padding-top: 5px; }
</style>
