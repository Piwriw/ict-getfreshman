import React, { Fragment } from 'react'
import { Carousel, Image } from 'antd';
import {nanoid} from 'nanoid'
// 引入外部资源
import "./index.css"
import qianduan from '../../../assets/qianduan.png'
import houduan from '../../../assets/houduan.png'
import chanpin from '../../../assets/chanpin.png'
import jiqixuexi from '../../../assets/jiqixuexi.png'
import anzhuo from '../../../assets/anzhuo.png'

const date = [
    {
        pic: anzhuo,
        h1: "嵌入式开发部",
        text: `嵌入式由硬件和软件组成．是能够独立进行运作的器件。其软件内容只包括软件运行环境及其操作系统。
        硬件内容包括信号处理器、存储器、通信模块等在内的多方面的内容。所有带有数字接口的设备，如手表、微波炉、汽车等，都使用嵌入式系统。`,
        color: ""
    },
    {
        pic: qianduan,
        h1: "前端开发部",
        text: `前端即网站前台部分，运行在PC端，移动端等浏览器上展现给用户浏览的网页。
        前端开发人员可以使用完美的动效设计和前端技术，给用户带来极高的页面视觉体验和用户交互体验。`,
        color: ""
    },
    {
        pic: houduan,
        h1: "后端开发部",
        text: `后端开发指的是运行在后台并且控制前端的内容，它负责程序设计架构以及数据库管理和处理相关的业务逻辑。
        它主要考虑的是对于业务的控制和处理，功能的实现以及数据的操作，目前工作室以开发Java后端为主`,
        color: ""
    },
    // {
    //     pic: chanpin,
    //     h1: "产品设计部",
    //     text: `捕捉事物间逻辑，倾听用户们需求，结合各平台数据，设计最好用产品。来产品策划部,
    //     培养更缜密的思维，学习产品设计，将从道术器三个层面，建立自己与互联网产品的亲密联系。`,
    //     color: ""
    // },
    {
        pic: jiqixuexi,
        h1: "人工智能部",
        text: `人工智能从从历史数据中学习规律，将规律应用到未来中。我们致力于研究如何
        通过计算的手段，利用数据构建模型，量化过去，预测未来。`,
        color: ""
    },

]

function showDepm(item) {
    return <Fragment>
        <div className="depm-depmshow-part " key={nanoid()}>
            <div className="depm-depmshow-part-depm">
                <div className="depm-depmshow-left">
                    <Image
                        src={item.pic}
                        preview={false}
                        alt="图片"
                    />
                </div>
                <div className="depm-depmshow-right">
                    <div className="depm-depmshow-right-top">
                        {item.h1}
                    </div>
                    <div className="depm-depmshow-right-bottom">
                        {item.text}
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
}

export default function index() {
    return (
        <div className="depm-bgc">
            <div className="depm-depm-title-position">
                <span className="depm-depm-title">
                    部门介绍
                </span>
            </div>
            <div>
                <Carousel
                    autoplay
                    className="depm-depmshow"
                    dots={{ className: "dep-depmshow-dots" }}
                >
                    {date.map((item) => {
                        return showDepm(item)
                    })}
                </Carousel>
            </div>
        </div>
    )
}
