import React, {useState} from 'react'
import {Image} from 'antd'
//引入外部资源
import us from '../../../assets/us.png'
import members from '../../../assets/members.png'
import './index.css'

// ICT通信双创工作室成立于2018年
// 是一个以发展内部成员专业技能与专业素养、提升通信工程专业
// 技术氛围的学生组织。不断探索、实践新的技术体系，在十余年
// 的成长过程当中，逐渐完善自身技术体系，扩大团队规模。
// 我们希望并也一直在努力将一些成功经验和有趣的团队文化
// 传播出去影响更多的人
const introducing = `工作室成立于2018年,成立时间较短。
工作室隶属于信息工程学院、ICT学院，
由北京华晟经世信息技术有限公司、广州粤嵌通信科技股份有限公司协办，
旨在为学生提供一个学习交流、竞赛培训、创新创业实践的环境和平台，
提升学生的实践动手能力、创新能力、创业能力和学科竞赛水平。
目前，ICT通信工程创新创业工作室主要开展嵌入式、服务器后端、人工智能、移动应用等方面的研究和开发。
`

const des = `ICT通信双创工作室永远都是一个温暖积极的大家庭
这里承载着勤奋、进步、友爱、关怀、和谐与温馨
这里汇聚了优秀的学长学姐，在学习和生活上伴你同行
这里诞生了卓越的技术，新颖的产品和以学习至上的优秀理念`
// 我们不怕困难，勇敢直上，无惧挑战，勇于绽放，追逐最完美的自己
// 因为这里，是希望撒下的地方，是种子发芽成长的地方，是我们向往的地方

export default function Aboutus(props) {
    // 得到关于我们页面动画的状态
    let {stateAbusB, stateAbusM, stateAbusS} = props.abusState
    return (
        <div className="abus-bgc">
            <div className="abus-wrap">
                <div className="abus-middle">
                    <div className="abus-middle-left">
                        <div className="abus-middle-left-title">
                            <div
                                className={stateAbusB ? "abus-middle-left-suptitle abus-middle-left-suptitle-show" : "abus-middle-left-suptitle"}>
                                关于我们
                            </div>
                            <pre
                                className={stateAbusB ? "abus-middle-left-subtitle abus-middle-left-subtitle-show" : "abus-middle-left-subtitle"}>
                                {introducing}
                            </pre>
                        </div>
                        <div className="abus-middle-left-subtitle-label">
                            <img src={us} alt="us" className="abus-middle-left-us"/>
                            <span
                                className={stateAbusS ? "abus-middle-left-subtitle-label-little bm-show" : "abus-middle-left-subtitle-label-little bm"}>优秀学长学姐</span>
                            <span
                                className={stateAbusS ? "abus-middle-left-subtitle-label-little cx-show" : "abus-middle-left-subtitle-label-little cx"}>创新</span>
                            <span
                                className={stateAbusS ? "abus-middle-left-subtitle-label-little rc-show" : "abus-middle-left-subtitle-label-little rc"}>人才培养</span>
                            <span
                                className={stateAbusS ? "abus-middle-left-subtitle-label-little js-show" : "abus-middle-left-subtitle-label-little js"}>技术应用</span>
                            <span
                                className={stateAbusS ? "abus-middle-left-subtitle-label-little nq-show" : "abus-middle-left-subtitle-label-little nq"}>年轻</span>
                            <span
                                className={stateAbusS ? "abus-middle-left-subtitle-label-little fx-show" : "abus-middle-left-subtitle-label-little fx"}>分享日</span>
                            <span
                                className={stateAbusS ? "abus-middle-left-subtitle-label-little hk-show" : "abus-middle-left-subtitle-label-little hk"}>选课指导</span>
                            <span
                                className={stateAbusS ? "abus-middle-left-subtitle-label-little zh-show" : "abus-middle-left-subtitle-label-little zh"}>考研分享</span>
                        </div>
                    </div>
                    <div className="abus-middle-right">
                        <pre
                            className={stateAbusB ? "abus-middle-right-suptitle abus-middle-right-suptitle-show" : "abus-middle-right-suptitle"}>
                            {des}
                        </pre>
                        <div
                            className={stateAbusM ? "abus-middle-right-bgpic-wrap abus-middle-right-bgpic-wrap-show" : "abus-middle-right-bgpic-wrap"}>

                            <Image
                                src={members}
                                // src={"https://mislab.oss-cn-chengdu.aliyuncs.com/bgpic.jpg"}
                                className="abus-middle-right-bgpic"
                                alt="     如果图片没有加载出来，请同学们把学长学姐脑补好看一点！拜托了！"
                                style={{
                                    resizeMode: " center",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
