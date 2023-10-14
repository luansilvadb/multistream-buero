const routes = [
  {
    path: '/',
    name: 'Daniels',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      title: 'Daniels E-Sports'
    },
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'teste', component: () => import('pages/TestePage.vue') },
      { path: 'atualizacao', component: () => import('pages/UpdatePage.vue') }
    ]
  },
  // Sempre deixe esta rota como a última,
  // mas você também pode removê-la
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
