import Default from 'layouts/default'
import Auth from '../utils/Auth'
import Home from 'pages/Home'
import StartUp from 'pages/StartUp'

export default [
  {
    path: '/startup',
    component: StartUp
  },
  {
    path: '/',
    component: Default,
    beforeEnter: Auth.requireAuth,
    children: [
      { path: '/home', component: Home },

      {
        path: '/ranking',
        component: () => import('pages/Ranking'),
        children:[
          { path: '/detail/:id', component: () => import('pages/BattleDetail') }
        ]
      },


      { path: '/profile', component: () => import('pages/Profile') },
      { path: '/profile/detail/:id', component: () => import('pages/ProfileDetail') },
      { path: '/battle/detail/:id',     component: () => import('pages/BattleDetail') },


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
