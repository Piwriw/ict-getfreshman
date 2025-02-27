import React from 'react'
// 引入外部资源
import './index.css'
import liucheng1 from '../../../assets/liucheng1.png'
import liucheng2 from '../../../assets/liucheng2.png'
import liucheng3 from '../../../assets/liucheng3.png'
import jiaruwomen from '../../../assets/jiaru.png'

const haveNoContent = () => {
    alert("即将上线，敬请期待！")
}

export default function index() {
    return (
        <div className="prc-bgc">
            <div className="prc-wrap">
                <div className="prc-top">
                    <div className="prc-top-left prc-top-process">
                        <img
                            src={liucheng1}
                            alt="图片"
                            className="prc-top-img"
                        />
                        <div className="prc-top-h">
                            <div className="prc-top-h1">
                                初报名/预习
                            </div>
                            <div className="prc-top-h2">
                                9月初旬—10月初旬
                            </div>
                        </div>
                    </div>
                    <div className="prc-top-icon">
                        <i className="iconfont prc-top-icon-i">&#xe6d7;</i>
                    </div>
                    <div className="prc-top-middle prc-top-process">
                        <img
                            src={liucheng2}
                            alt="图片"
                            className="prc-top-img"
                        />
                        <div className="prc-top-h">
                            <div className="prc-top-h1">
                                一轮考核
                            </div>
                            <div className="prc-top-h2">
                                10月初旬
                            </div>
                        </div>
                    </div>
                    <div className="prc-top-icon">
                        <i className="iconfont prc-top-icon-i">&#xe6d7;</i>
                    </div>
                    <div className="prc-top-right prc-top-process">
                        <img
                            src={liucheng3}
                            alt="图片"
                            className="prc-top-img"
                        />
                        <div className="prc-top-h">
                            <div className="prc-top-h1">
                                二轮考核
                            </div>
                            <div className="prc-top-h2">
                                11月中旬
                            </div>
                        </div>
                    </div>
                </div>
                <div className="prc-middle-1">
                    <a href="https://www.wjx.cn/vm/YDCrRxg.aspx">
                        <img
                            src={jiaruwomen}
                            alt="图片"
                            className="prc-middle-1-img"
                        />
                    </a>
                </div>
                <div className="prc-middle-2">
                    <div className="prc-middle-2-title">
                        想和优秀的你&nbsp;&nbsp;一起改变世界
                    </div>
                </div>
                <div className="prc-bottom">
                    <div className="prc-bottom-item">
                        <a href="https://www.wjx.cn/vm/YDCrRxg.aspx"><span className="prc-bottom-text">报名投递</span></a>
                    </div>
                    <div className="prc-bottom-item">
                        <span className="prc-bottom-text" onClick={haveNoContent}>学员系统</span>
                    </div>
                    {/*<div className="prc-bottom-item">*/}
                    {/*    <a href="https://jq.qq.com/?_wv=1027&k=LkGcB3dU"><span className="prc-bottom-text">招新咨询</span></a>*/}
                    {/*</div>*/}
                </div>
                <div className="prc-title">
                    招新流程
                </div>
            </div>
        </div>
    )
}
