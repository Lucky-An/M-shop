import Home from '../pages/home'
import ShopCart from '../pages/shopCart'
import Personal from '../pages/personal'
import Classification from '../pages/classification'
import Favorite from '../pages/favorite'

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
    }
]