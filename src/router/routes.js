import Home from '../pages/home'
import ShopCart from '../pages/shopCart'
import Personal from '../pages/personal'
import Classification from '../pages/classification'
import Favorite from '../pages/favorite'
import Login from "../pages/Login"
import Search from "../pages/search"

export default [{
        path: '/',
        redirect: '/home'
    }, {
        name: "Home",
        path: '/home',
        component: Home
    },
    {
        name: "ShopCart",
        path: '/shopCart',
        component: ShopCart
    },
    {
        name: "Personal",
        path: '/personal',
        component: Personal
    },
    {
        name: "Classification",
        path: '/classification',
        component: Classification
    },
    {
        name: "Favorite",
        path: '/favorite',
        component: Favorite
    },
    {
        name: "Login",
        path: '/login',
        component: Login,
        meta: {
            isHide: true
        }
    },
    {
        name: "Search",
        path: '/search',
        component: Search,
        meta: {
            isHide: true
        }
    }
]