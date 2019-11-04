import React, { Component } from 'react'
import './index.scss'
import axios from 'axios'
import Heafer from '../public/header';
import {NavLink} from 'react-router-dom';
export default class Classify extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        axios({
            url: 'http://walden1.shuqireader.com/webapi/rank/classrelation?_=1572665053495',
            method: 'POST',
            data: {
                type: 1,
                timestamp: '1572665124311',
                sign: 'adfd2ea2f77c753eca3da86426ce0060',
                shuqi_h5: '',
            }
        }).then((res) => {
            console.log(res)
        })
    }
    render() {
        return (
            <>
            <Heafer title="分类" />
            <div className="box1">
                <div className="title">
                    女生分类
                </div>
                <ul className="novel-list">
                    <li>
                        <NavLink to="/classify/classlist">
                            <div className="left"></div>
                            <div className="middle">
                                <div className="large-title">古言</div>
                                <p className="category-name">
                                    <span className="ellipsis">豪门总裁</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;婚姻</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;都市情感</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;宝宝</span>
                                </p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/classify/classlist">
                            <div className="left sec"></div>
                            <div className="middle">
                                <div className="large-title">现言</div>
                                <p className="category-name">
                                    <span className="ellipsis">穿越</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;架空</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;宫斗宅斗</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;情仇爱恨</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;女尊</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;种田</span>
                                </p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/classify/classlist">
                            <div className="left thr"></div>
                            <div className="middle">
                                <div className="large-title">幻言</div>
                                <p className="category-name">
                                    <span className="ellipsis">仙侣奇缘</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;江湖奇缘</span>
                                </p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/classify/classlist">
                            <div className="left for"></div>
                            <div className="middle">
                                <div className="large-title">校园</div>
                                <p className="category-name">
                                    <span className="ellipsis">青春年华</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;校园魔幻</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;青春校园</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;学生</span>
                                </p>
                            </div>
                        </NavLink>
                    </li>
                </ul>
                <div className="title">
                    男生分类
                </div>
                <ul className="novel-list">
                    <li>
                        <NavLink to="/classify/classlist">
                            <div className="left a"></div>
                            <div className="middle">
                                <div className="large-title">都市</div>
                                <p className="category-name">
                                    <span className="ellipsis">生活</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;异能</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;重生</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;热血</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;人生</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;美女</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;极道江湖</span>
                                </p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/classify/classlist">
                            <div className="left b"></div>
                            <div className="middle">
                                <div className="large-title">玄幻</div>
                                <p className="category-name">
                                    <span className="ellipsis">东方玄幻</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;异界大陆</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;转世重生</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;远古神话</span>
                                </p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/classify/classlist">
                            <div className="left c"></div>
                            <div className="middle">
                                <div className="large-title">仙侠</div>
                                <p className="category-name">
                                    <span className="ellipsis">现代修真</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;奇幻修真</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;洪荒封神</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;凡人</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;丹药</span>
                                </p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/classify/classlist">
                            <div className="left d"></div>
                            <div className="middle">
                                <div className="large-title">灵异</div>
                                <p className="category-name">
                                    <span className="ellipsis">灵异鬼怪</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;恐怖惊悚</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;悬疑探险</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;侦探推理</span>
                                </p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/classify/classlist">
                            <div className="left e"></div>
                            <div className="middle">
                                <div className="large-title">历史</div>
                                <p className="category-name">
                                    <span className="ellipsis">架空历史</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;两宋元明</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;秦汉三国</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;权谋</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;乱世</span>
                                </p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/classify/classlist">
                            <div className="left f"></div>
                            <div className="middle">
                                <div className="large-title">游戏</div>
                                <p className="category-name">
                                    <span className="ellipsis">虚拟网游</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;游戏异界</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;游戏人生</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;系统</span>
                                </p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/classify/classlist">
                            <div className="left g"></div>
                            <div className="middle">
                                <div className="large-title">科幻</div>
                                <p className="category-name">
                                    <span className="ellipsis">未来</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;进化变异</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;末世</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;星际</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;机甲</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;时空穿梭</span>
                                </p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/classify/classlist">
                            <div className="left h"></div>
                            <div className="middle">
                                <div className="large-title">武侠</div>
                                <p className="category-name">
                                    <span className="ellipsis">传统武侠</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;新派武侠</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;幻武异侠</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;江湖风波</span>
                                </p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/classify/classlist">
                            <div className="left i"></div>
                            <div className="middle">
                                <div className="large-title">奇幻</div>
                                <p className="category-name">
                                    <span className="ellipsis">领主贵族</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;亡灵异族</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;西方奇幻</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;魔法</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;召唤</span>
                                </p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/classify/classlist">
                            <div className="left j"></div>
                            <div className="middle">
                                <div className="large-title">竞技</div>
                                <p className="category-name">
                                    <span className="ellipsis">电子竞技</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;体坛风云</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;球类运动</span>
                                </p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                    <NavLink to="/classify/classlist">
                            <div className="left k"></div>
                            <div className="middle">
                                <div className="large-title">其他</div>
                                <p className="category-name">
                                    <span className="ellipsis">动漫</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;影视</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;武侠</span>
                                    <span className="ellipsis">&nbsp;|&nbsp;小说</span>
                                </p>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
            </>
        )
    }
}
