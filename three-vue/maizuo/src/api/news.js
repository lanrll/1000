import request from 'request'
export const getNews = () => {
    return request({
        url: 'gateway?actId=ElzMZU125260',
        data: {
            xHost: 'mall.act.static-page.info'
        }
    })
}