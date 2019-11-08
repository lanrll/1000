import axios from 'axios';

var instance = axios.create({
    baseURL: '/hd',
    timeout: 5000,
    headers: {'content-type': 'application/json'}
})

instance.interceptors.request.use((config)=>{
    // config.headres["token"]="asdfasdfx35345345345"
		if(sessionStorage.getItem("token")){
		    config.headers["token"]=sessionStorage.getItem("token")
		}
    return config;
})

instance.interceptors.response.use((res)=>{
	if(res.data.message){ //token 验证失败
	    window.location.href="/login";
	}
    return res;
})

export const getPageList=(page,pageSize)=>{
  return  instance.get("/pagelist",{params:{
        page,pageSize
    }})
}

export const login =(username,password)=>{
    return instance.post('/users/login',{username,password});
}
export const reg =(username,password)=>{
    return instance.post('/users/reg',{username,password});
}
export const quit =(username,password)=>{
    return instance.post('/users/quit');
}

export const remove=(id)=>{
    return instance.post("/del",{id})
}
export const add=(name,age)=>{
    return instance.post("/add",{name,age})
}