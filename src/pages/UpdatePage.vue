<template>
  <q-page padding>
    <transition name="fade">
      <div class="update-container">
        <h1 class="text-h3 text-center q-my-md">Notas de Atualizações</h1>
        <div v-for="(update, index) in updates" :key="index">
          <q-expansion-item
            :label="`${update.version} - ${update.date}`"
            :caption="update.shortNotes"
          >
            <q-card flat bordered>
              <q-card-section>
                <div class="text-h6">{{ update.version }}</div>
                <div>{{ update.date }}</div>
              </q-card-section>
              <q-separator />
              <q-card-section>
                {{ update.notes }}
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </div>
      </div>
    </transition>
  </q-page>
</template>

<script>
export default {
  name: 'UpdatesNotesPage',
  data () {
    return {
      updates: [
        {
          version: 'v1.0.7',
          date: '11 Outubro, 2023',
          shortNotes: 'Responsividade',
          notes: 'Interface adaptada a todos dispositivos'
        },
        {
          version: 'v1.0.6',
          date: '11 Outubro, 2023',
          shortNotes: 'Botão FullScreen',
          notes: 'Adicionado Botão de FullScreen'
        },
        {
          version: 'v1.0.5',
          date: '11 Outubro, 2023',
          shortNotes: 'Botão Sincronizar',
          notes: 'Adicionado Botão de Sincronizar com base a hora atual'
        },
        {
          version: 'v1.0.4',
          date: '11 Outubro, 2023',
          shortNotes: 'BUG Dark Mode',
          notes: 'Corrigido bug dark mode, quando alternava o video desaparecia'
        },
        {
          version: 'v1.0.3',
          date: '11 Outubro, 2023',
          shortNotes: 'Player',
          notes: 'Adicionado Border Radius nos Player'
        },
        {
          version: 'v1.0.2',
          date: '11 Outubro, 2023',
          shortNotes: 'Ajustado Dark Mode',
          notes: 'Adicionado transição do Dark Mode'
        },
        {
          version: 'v1.0.1',
          date: '10 Outubro, 2023',
          shortNotes: 'Integração com a Twitch',
          notes: 'Adicionado a integração com a twitch player e chat'
        },

        {
          version: 'v1.0.0',
          date: '10 Outubro, 2023',
          shortNotes: 'Lançamento inicial.',
          notes: 'Esta é a primeira versão. Inclui recursos básicos, menu, cor do tema, layout.'
        }
        // adicione mais notas de atualizações conforme necessário
      ]
    }
  }
}
</script>

<style scoped>
.update-container {
  max-width: 800px;
  margin: auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
