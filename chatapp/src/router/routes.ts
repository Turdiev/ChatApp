
const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/chat',
    component: () => import('../layouts/MainLayouts.vue'),
    children: [
      { name: 'ChatDashboard', path: '', components: { contentView: () => import('../pages/ChatDashboard.vue') }}
    ]
  }
]

export default routes