import Default from 'layouts/default'
import Home from 'pages/Home'

export default [
  {
    path: '/',
    component: Default,
    children: [
      { path: '/home', component: Home },

      {
        path: '/battle',
        component: () => import('pages/Battle'),
        children:[
          { path: '/detail/:id', component: () => import('pages/BattleDetail') }
        ]
      },


      { path: '/profile', component: () => import('pages/Profile') },
      // { path: '/profile/detail/:id', component: () => import('pages/ProfileDetail') },


      { path: '/battle-management',     component: () => import('pages/admin/BattleManagement') },
      { path: '/battle-management/:id', component: () => import('pages/admin/BattleRecord') },
      { path: '/user-management',       component: () => import('pages/admin/UserManagement') },


    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
