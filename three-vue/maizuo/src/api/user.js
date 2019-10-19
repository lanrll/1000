import request from '@/utils/request'
import {getToken} from '@/utils/local-data';
//获取用户资料
export const getUserInfo = () => {
    let token = getToken();
    return request({
        method: 'get',
        url: '/gateway?k=6189433',
        headers: {
            'X-Token': token
        },
        data: {
            xHost: 'mall.user.info.get'
        }
    })
}
//获取头像地址
export const getUserImg = (img) => {
    let token = getToken();
    return request({
        method: 'POST',
        url: '/gateway?k=1497436',
        headers: {
            'X-Token': token
        },
        data: {
            xHost: 'mall.img.upload',
            file: img
        }
    })
}
//修改用户资料
export const setUserInfo = (birth,sex,img,name) => {
    let token = getToken();
    return request({
        method: 'POST',
        url: '/gateway?k=6189433',
        headers: {
            'X-Token': token
        },
        data: {
            xHost: 'mall.user.update',
            birthday: birth,
            gender: sex,
            headIcon: img,
            nickname: name,
        }
    })
}

//获取验证码
export const getCode = (phone) => {
    phone = phone+''
    return request({
        method: 'POST',
        url: '/gateway',
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        data: {
            xHost: 'mall.user.sms-code.send',
            imgCode: '',
            imgKey: '',
            mobile: phone,
            type: '1'
        }
    })
}
//登录
export const Login = (mobile, smsCode) => {
    return request ({
        method: 'POST',
        url: '/gateway',
        data: {
            xHost: 'mall.user.sms-code-login',
            extra: {},
            ingCode: '',
            imgKey: '',
            mobile: mobile,
            smsCode: smsCode
        }
    })
}