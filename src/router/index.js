export default [{
        name: 'home',
        path: '',
        component: function (resolve) {
            require(['../view/home.vue'], resolve)
        }

    }, {
        name: 'login',
        path: '/login',
        component: function (resolve) {
            require(['../view/login.vue'], resolve)
        }
    },
    {
        name: 'user',
        path: '/user',
        component: function (resolve) {
            require(['../view/user.vue'], resolve)
        }
    }
];