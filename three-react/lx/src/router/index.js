import React from 'react'
import Loadable from 'react-loadable';
import { Spin } from 'antd';
const NotFound  = Loadable({
	loader: () => import('../components/notfound'),
	loading: ()=><Spin size="large" />,
});
const Home = Loadable({
	loader: () => import('../App'),
	loading: ()=><Spin size="large" />
});
const Login= Loadable({
	loader: () => import('../components/login'),
	loading: ()=><Spin size="large" />
});
const Reg= Loadable({
	loader: () => import('../components/register'),
	loading: ()=><Spin size="large" />
});
const List= Loadable({
	loader: () => import("../components/list"),
	loading: ()=><Spin size="large" />
});
const Dashboard= Loadable({
	loader: () => import("../components/dashboard"),
	loading: ()=><Spin size="large" />
});
const Setting= Loadable({
	loader: () => import("../components/set"),
	loading: ()=><Spin size="large" />
});
const Add= Loadable({
	loader: () => import("../components/add"),
	loading: ()=><Spin size="large" />
});
const My= Loadable({
	loader: () => import("../components/my"),
	loading: ()=><Spin size="large" />
});
const Notify  =Loadable({
	loader: () => import("../components/notify"),
	loading: ()=><Spin size="large" />
});
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
    }, {
        path: '/reg',
        component: Reg
    }
]

export const subRoutes = [
    {
        path: '/home/notify',
        component: Notify,
				roles:["abc","def"]
    }, {
        path: '/home/list',
        component: List,
				roles:["abc","def"]
    },
    {
        path: '/home/dashboard',
        component: Dashboard,
				roles:["abc","def"]
    },
    {
        path: '/home/setting',
        component: Setting,
				roles:["abc"]
    },
		{
        path: '/home/add',
        component: Add,
				roles:["abc"]
    },{
        path: '/home/my',
        component: My,
				roles:["abc"]
    }
]