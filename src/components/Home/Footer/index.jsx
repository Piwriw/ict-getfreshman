import React from 'react'
import { Image } from 'antd'
// 外部资源的引用
import './index.css'
import logo from '../../../assets/logo1.png'
import qrcode from '../../../assets/qrcode.png'

export default function index() {
    return (
        <div className="footer-bgc">
            <div className="footer-wrap">
                <div className="footer-middle">
                    <div className="footer-middle-left">
                        <img
                            src={logo}
                            alt="logo"
                            className="footer-middle-left-logo"
                        />
                    </div>
                    <div className="footer-middle-line-left" />
                    <div className="footer-middle-middle">
                        <div className="footer-middle-middle-left">
                            <div className="footer-middle-middle-left-left">
                                <span className="footer-middle-middle-left-left-title">联系我们</span>
                                <span><a href="https://www.wjx.cn/vm/YDCrRxg.aspx">报名投递</a></span>
                                {/*<span><a href="https://jq.qq.com/?_wv=1027&k=LkGcB3dU">招新咨询</a></span>*/}
                            </div>
                            {/*<div className="footer-middle-middle-left-right">*/}
                                {/*<span className="footer-middle-middle-left-right-title">我们的产品</span>*/}
                                {/*<span>ERP虚拟运营系统</span>*/}
                                {/*<span>邮问必答</span>*/}
                                {/*<span>邮读书馆</span>*/}
                                {/*<span>学员系统</span>*/}
                            {/*</div>*/}
                        </div>
                        <div className="footer-middle-middle-right">
                            <span>互联网时代早已到来</span>
                            <span>欢迎加入</span>
                        </div>
                    </div>
                    <div className="footer-middle-line-right" />
                    <div className="footer-middle-right">
                        <Image
                            src={qrcode}
                            alt="二维码"
                            className="footer-middle-right-qrcode"
                        />
                        <span>WX招新群</span>
                    </div>
                </div>
                <div className="footer-footer">
                    <span>
                        地址：韶关学院韶师三号楼209室
                    </span>
                    <span>
                        邮箱：2649330808@qq.com
                    </span>
                </div>
            </div>
        </div>
    )
}
