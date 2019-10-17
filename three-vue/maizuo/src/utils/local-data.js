export const getCityId = ()=>{
    let cityId = localStorage.getItem('cityId')
    return cityId ? cityId : ''
}

export const setCityId = (val) =>{
    return localStorage.setItem('cityId',val)
}

export const getCityName = ()=>{
    let cityName  = localStorage.getItem('cityName')
    return cityName ? cityName : ''
}
export const setCityName = (val)=>{
    return localStorage.setItem('cityName',val)
}

export const getToken = () => {
    let getToken = localStorage.getItem('token')
    return getToken ? getToken : ''
}
export const setToken = (val) => {
    return localStorage.setItem('token',val)
}

export const getUserInfo = () => {
    let userInfo = localStorage.getItem('userInfo')
    return userInfo ? userInfo : ''
}
export const setUserinfo = (val) => {
    return localStorage.setItem('userInfo',val)
}

