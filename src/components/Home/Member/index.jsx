import React from 'react'
import {nanoid} from 'nanoid'
// 引入外部资源
import './index.css'
import lbw from '../../../assets/lbw.png'
import toLeftMember from '../../../static/toLeftMember.json'
import toRightMember from '../../../static/toRightMember.json'

export default function index() {
    return (
        <div className="member-bgc">
            <div className="member-wrap">
                <div className="member-top">
                    <span>
                        成员动态
                    </span>
                </div>
                <div className="member-middle">
                    <div className="member-middle-left">
                        <div className="member-middle-left-top">
                            <span>
                                学长寄语
                            </span>
                        </div>
                        <div className="member-middle-left-bottom">
                            {/*<video*/}
                            {/*    src="https://youtu.be/SNT6IEcw3-w"*/}
                            {/*    // src={"https://mislab.oss-cn-chengdu.aliyuncs.com/xuezhangcaifang.mp4"}*/}
                            {/*    muted*/}
                            {/*    autoPlay*/}
                            {/*    loop*/}
                            {/*    controls*/}
                            {/*    className="member-middle-left-bottom-vedio"*/}
                            {/*    poster={lbw}*/}
                            {/*    webkit-playsinline="true"*/}
                            {/*    playsinline="true"*/}
                            {/*    x5-playsinline=""*/}
                            {/*    x-webkit-airplay="allow"*/}
                            {/*    x5-video-player-type="h5"*/}
                            {/*    x5-video-player-fullscreen="false"*/}
                            {/*/>*/}

                            <iframe
                                src="//player.bilibili.com/player.html?aid=644224887&bvid=BV1ZY4y1w7uE&cid=795665349&page=1&high_quality=1&danmaku=0"
                                scrolling="no" border="0" frameBorder="no" framespacing="0"
                                // sandbox ="allow-top-navigation allow-same-origin allow-forms allow-scripts"
                                 allowFullScreen="allowfullscreen" width="100%" height="500" scrolling="no"
                               ></iframe>


                        </div>
                    </div>
                    <div className="member-middle-right">
                        <div className="member-middle-right-toLeft">
                            {toLeftMember.map((item, index) => {
                                return (
                                    <span className={`member-middle-right-toLeft-member-${index}`} key={nanoid()}>
                                        {item.name}—{item.company}
                                    </span>
                                )
                            })}
                        </div>
                        <div className="member-middle-right-toRight">
                            {toRightMember.map((item, index) => {
                                return (
                                    <span className={`member-middle-right-toRight-member-${index}`} key={nanoid()}>
                                        {item.name}—{item.company}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
