import NotFound from '../components/notfound';
import Home from '../App';
import Login from '../components/login';
import List from '../components/list';
import Dashboard from '../components/dashboard';
import Setting from '../components/set';
// import Login from '../compinents/login';

export const mainRoutes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/404',
        component: NotFound
    },
    {
        path: '/login',
        component: Login
    }
]

export const subRoutes = [
    {
        path: '/home/list',
        component: List
    },
    {
        path: '/home/dashboard',
        component: Dashboard
    },
    {
        path: '/home/setting',
        component: Setting
    }
]