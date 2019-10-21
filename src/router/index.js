export default [{
    name: 'setting',
    path: '/',
    meta: {
      title: '奖励项设置'
    },
    component: (resolve) => require(['@/views/setting.vue'], resolve)
  },
  {
    name: 'rewardRecord',
    path: '/',
    meta: {
      title: '奖励记录'
    },
    component: (resolve) => require(['@/views/rewardRecord.vue'], resolve)
  },
]