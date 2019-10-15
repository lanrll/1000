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