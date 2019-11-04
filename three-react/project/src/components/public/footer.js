import React, { Component } from 'react'
import Footer from './footer.scss'

export default class footer extends Component {
    render() {
        return (
            <div>
                <section className="bs-copyright">
                    <a className="bs-button button-fill button-block">下载书旗小说客户端</a>
                    <p className="bs-slogan">海量图书，更高品质阅读体验</p>
                    <p>©2016书旗网shuqi.com</p>
                    <p>粤ICP备13078413号-1</p>
                    <p><a>
                        <img src="http://c-shuqi.11222.cn/assets/coryright-wen_ed9939e.png" className="copyright-wen" />
                    </a>
                        <span>网络文化经营许可证：粤网文[2017]3018-499号</span>
                    </p>
                    <p>增值电信业务经营许可证：粤B2-20130742</p>
                    <p>广州阿里巴巴文学信息技术有限公司 版权所有</p>
                    <p>广州市天河区黄埔大道西平云路163号广电平云广场B塔13层自编03单元</p>
                    <p>0571-26883636</p>
                </section>
            </div>
        )
    }
}
