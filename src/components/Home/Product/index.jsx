import React from 'react'
import {Image} from 'antd'
// 引入外部资源
import erp from '../../../assets/erp.png'
import youwen from '../../../assets/youwen.png'
import './index.css'

export default function index(props) {
    const {stateCpTop, stateCpBottom} = props.prdState
    return (
        <div className="product-bgc">
            <div className="prd-wrap">
                <div className={stateCpTop ? "prd-left prd-left-show" : "prd-left"}>
                    <div className="prd-left-h1">
                        面试轮
                    </div>
                    <div className="prd-left-h2">
                        报名须知
                    </div>
                    <div className="prd-left-text">
                        工作室考核主要采取面试＋俩轮基础知识考核，基础知识考核根据所选方向而有所不同，
                        关于面试和考核的时间我们会利用群或者邮件方式通知你。
                        如果面试和俩轮基础知识考核都顺利通过的话，就可以加入我们ict通信工作室的大家庭里面啦！
                    </div>
                    {/*<div className="prd-left-bottom">*/}
                    {/*    <Image*/}
                    {/*        src={erp}*/}
                    {/*        preview={false}*/}
                    {/*        className="prd-left-erp"*/}
                    {/*        alt="图片"*/}
                    {/*    />*/}
                    {/*</div>*/}
                </div>
                <div className="prd-right">
                    <div className={stateCpTop ? "prd-right-top prd-right-top-show" : "prd-right-top"}>
                        <div className="prd-right-top-left">
                            <span className="prd-right-top-left-cpjs-title">
                                招新说明
                            </span>
                        </div>
                        <div className="prd-right-top-right">
                            <span className="prd-right-top-right-cpjs-detail">
                                <div>
                                    嵌入式|后端|嵌入式开发部  ： C语言基础，涉及到到基础知识、入门算法
                                </div>
                                <hr/>
                                <div>
                                    人工智能开发部：Python基础
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className={stateCpBottom ? "prd-right-bottom prd-right-bottom-show" : "prd-right-bottom"}>
                        {/*<div className="prd-right-bottom-left">*/}
                        {/*<Image*/}
                        {/*    src={youwen}*/}
                        {/*    preview={false}*/}
                        {/*    className="prd-right-bottom-left-youwen"*/}
                        {/*    alt="图片"*/}
                        {/*/>*/}
                        {/*</div>*/}
                        <div className="prd-right-bottom-right">
                            <div className="prd-right-bottom-right-h1">
                                联系我们
                            </div>
                            <div className="prd-right-bottom-right-h2">
                                <div>
                                    嵌入式负责人：Mr.洪 | WeChat:husk159357 | Email:@2649330808@qq.com
                                </div>
                                <div>
                                    前端负责人：Mr.莫 | WeChat:M_Z_Yuuu | Email:2225642047@qq.com
                                </div>
                                <div>
                                    后端负责人：Mr.王 | WeChat:wj-1814320383 | Email:1814320383@qq.com
                                </div>
                                <div>
                                    人工智能负责人：Mr.何 | WeChat:hzx393297251 | Email:393297251@qq.com
                                </div>
                            </div>
                            <div className="prd-right-bottom-right-text">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
