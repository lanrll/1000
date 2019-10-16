import request from '@/utils/request'
// 获取所有城市的数据
export const getCityList = () =>{
    return request({
        url:'/gateway?k=9825847',
        data:{
            xHost:'mall.film-ticket.city.list'
        }
    })
}
//电影日期影院列表
export  const getFilmTimeCinema = (num) => {
    return request({
        url:'gateway?cityId='+num+'&k=7209940',
        data: {
            xHost: 'mall.cfg.cinema.banners'
        }
    })
}