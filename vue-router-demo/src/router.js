import Vue from 'vue'
import VueRouter from 'vue-router'
import Find from '@/views/FindMain'
import My from '@/views/MyMain'
import Part from '@/views/PartMain'
import NotFound from '@/views/NotFound'
import Bian from '@/views/bianMain'
import Recommend from '@/views/Second/Recommend'
import Ranking from '@/views/Second/Ranking'
import SongList from '@/views/Second/SongList'


Vue.use(VueRouter)
const routes = [{
        path: "/",

        redirect: "/find"
    }, {
        path: "/find",
        name: 'Find',
        component: Find,
        children: [{
                path: "recommend",
                component: Recommend
            },
            {
                path: "ranking",
                component: Ranking
            },
            {
                path: "songlist",
                component: SongList
            }
        ]
    },
    {
        path: "/my/:username",
        name: 'My',
        component: My
    },
    {
        path: "/part",
        name: 'Part',
        component: Part
    },
    {
        path: "/bian",
        name: 'Bian',
        component: Bian
    }, {
        path: "*",
        component: NotFound
    }
]
const router = new VueRouter({
        routes,
        mode: "history"
    })
    // 路由守卫
    // 场景：当你要对路由权限判断时
    // 语法： router.beforeEach((to, from, next) => { //路由跳转“之前”先执行这里，决定是否跳转})
    // 参数1:要去跳转的路由（路由对象信息）目标
    // 参数2:从那里跳转的路由（路由对象信息）来源
    // 参数3:函数体 -next（）才会让路由正常的跳转切换，next(false)在院里停留，next（“强制修改到另一个路由路径上”）

const inLogin = false;
router.beforeEach((to, from, next) => {
    if (to.path === '/find' && inLogin === false) {
        alert('请登录')
        next(false)
    } else {
        next()
    }
})


export default router