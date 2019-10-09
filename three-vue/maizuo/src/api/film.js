import request from '@/utils/request'
// 获取(正在热映、即将放映)电影列表接口
export const getFilmList = (params = {
  type: 1,
  pageNum: 2,
  pageSize: 10
}) => {
  return request({
    url: '/gateway?cityId=510100&pageNum=' + params.pageNum + '&pageSize=' + params.pageSize + '&type=' + params.type + '&k=4210892',
    data: {
      xHost: 'mall.film-ticket.film.list'
    }
  })
}
export const getFilmDetail = (params) => {
  return request({
    url: 'gateway?filmId=' + params.id + '&k=4210892',
    data: {
      xHost: 'mall.film-ticket.film.info'
    }
  })
}
// 获取电影的banner列表接口
export const getFilmBannerList = () => {
  return request({
    url: '/gateway?type=2&cityId=510100&k=7729231',
    data: {
      xHost: 'mall.cfg.common-banner'
    }
  })
}
