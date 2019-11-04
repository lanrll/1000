import React, { Component } from 'react'
import detail2 from './detail.scss'
import Header from '../public/header';
import Footer from '../public/footer';
export default class detail extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // console.log(this.props.location.state)
        // let data = this.props.location.state
        return (
            <>
            <Header title="书籍详情" />
            <div className="box3">
                {/* fir */}
                <section className="cover-header">
                    <div className="cover-header-img">
                        <img src="http://img-tailor.11222.cn/bcv/big/201702171149315369.jpg" />
                    </div>
                    <div className="cover-header-info">
                        <h1 className="cover-book-title">错嫁替婚总裁</h1>
                        <a className="cover-book-author">分花拂柳</a>
                        <p className="cover-book-classify-etc">
                            <span>现代言情</span>
                            <span>443万字</span>
                        </p>
                        <p className="cover-book-price">连载中</p>
                    </div>
                </section>
                {/* sec */}
                <section className="cover-fn-buttons">
                    <a className="bs-button button-fill button-block">开始阅读</a>
                    <a className="bs-button button-block">离线下载</a>
                    <a className="bs-button button-block">加书架</a>
                </section>
                {/* thr */}
                <section className="cover-mate">
                    <div className="cover-book-desc">
                        <p>为了支付哥哥的治疗费，沈柒不得不代替自己的妹妹嫁入豪门贺家。她一直以为自己嫁的是贺家长子，却不知道自己名义上的丈夫是次子贺逸宁。贺逸宁，贺家真正的继承人，叱咤风云的商业帝王，冷酷无情的职场暴君，她妹妹的做梦都想嫁的人。</p>
                        <span className="extend-button"><i></i></span>
                    </div>
                    <a className="cover-book-latest-chapter">
                        <i className="cover-icon icon-clock"></i>
                        <div className="cover-mate-title">最新</div>
                        <div className="cover-mate-text">第一千八百八十九章  番外之打探珍妮弗的消息</div>
                        <i className="cover-icon icon-right-arrow"></i>
                    </a>
                    <a className="cover-book-directory">
                        <i className="cover-icon icon-dir"></i>
                        <div className="cover-mate-title">目录</div>
                        <div className="cover-mate-text">3小时前更新</div>
                        <i className="cover-icon icon-right-arrow"></i>
                    </a>
                </section>
                {/* for */}
                <section className="cover-comments">
                    <header className="header header-line">
                        <h3 className="title">精华评论</h3>
                    </header>
                    <ul className="comments-list">
                        <li className="comment-item">
                            <div className="comment">
                                <div className="comment-header">
                                    <img className="avatar-small" src="http://thirdqq.qlogo.cn/g?b=oidb&amp;k=byj3WkbJkuWGEYsOkvcnuQ&amp;s=100&amp;t=1564582489" />
                                    <span className="user-info-line">
                                        <span className="user-info-name">陌上花开，可缓缓归矣</span>
                                    </span>
                                </div>
                                <div className="comment-body">
                                    <div className="comment-content">沈陆为了小七真的付出了很多，只应该是最亲的兄妹吧！</div>
                                </div>
                            </div>
                        </li>
                        <li className="comment-item">
                            <div className="comment">
                                <div className="comment-header">
                                    <img className="avatar-small" src="http://img-tailor.11222.cn/account/avatar/39704e939a587638279ddb8c895897c9@120w_120h" />
                                    <span className="user-info-line">
                                        <span className="user-info-name">辣椒</span>
                                    </span>
                                </div>
                                <div className="comment-body">
                                    <div className="comment-content">好看好看，再告诉书友一个好看的，套路总裁轻点爱，巨好看</div>
                                </div>
                            </div>
                        </li>
                        <li className="comment-item">
                            <div className="comment">
                                <div className="comment-header">
                                    <img className="avatar-small" src="http://thirdwx.qlogo.cn/mmopen/vi_32/U6xjbQibZzibcXUOfIWp8mqyLrexyuTibguEH7JIJHMwM2P265lQGRkcSBgQMSK1LoUmEySbQ3Ghf8Ml7Gibs3IVDA/132" />
                                    <span className="user-info-line">
                                        <span className="user-info-name">杨柚柚</span>
                                    </span>
                                </div>
                                <div className="comment-body">
                                    <div className="comment-content">太多了，但很好看，如果拍成电视剧那就更好了，我全力支持那一部电视剧。</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
                {/* fif */}
                <section className="cover-related-books">
                    <header className="header header-nospaceing">
                        <h3 className="title">看过这本书的人还在看</h3>
                    </header>
                    <div className="books-group-4n">
                        <ul className="books-group-4">
                            <li className="book">
                                <a>
                                    <div className="book-cover">
                                        <img src="http://img-tailor.11222.cn/bcv/big/201707191612256709.jpg@80w_120h" className="book-cover-img" />
                                    </div>
                                    <div className="book-title">挟剑争天</div>
                                    <div className="book-author">俱往矣</div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="modular-link">
                        <span className="modular-text">换一换</span>
                        <span className="refresh"></span>
                    </div>
                </section>
            </div>
            <Footer />
            </>
        )
    }
}
