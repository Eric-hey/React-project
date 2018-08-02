import React,{Component} from 'react'
import './tabs.css'
import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;

class Mytabs  extends Component{
    constructor(props){
        super(props)
    }
    render(){
       return(
           <div>
               <Tabs defaultActiveKey="1">
                   <TabPane tab={<span><Icon type="calculator" />课程简介</span>} key="1">
                       <p>React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设Instagram 的网站。做出来以后，发现这套东西很好用，就在2013年5月开源了。</p>
                       <p>由于 React的设计思想极其独特，属于革命性创新，性能出众，代码逻辑却非常简单。所以，越来越多的人开始关注和使用，认为它可能是将来 Web 开发的主流工具。
                           这个项目本身也越滚越大，从最早的UI引擎变成了一整套前后端通吃的 Web App 解决方案。衍生的 React Native 项目，目标更是宏伟，希望用写 Web App 的方式去写 Native App。如果能够实现，整个互联网行业都会被颠覆，因为同一组人只需要写一次 UI ，就能同时运行在服务器、浏览器和手机。
                           React主要用于构建UI。你可以在React里传递多种类型的参数，如声明代码，帮助你渲染出UI、也可以是静态的HTML DOM元素、也可以传递动态变量、甚至是可交互的应用组件。</p>
                          <h3>特点：</h3>
                           <p>1.声明式设计：React采用声明范式，可以轻松描述应用。</p>
                           <p>2.高效：React通过对DOM的模拟，最大限度地减少与DOM的交互。</p>
                           <p>3.灵活：React可以与已知的库或框架很好地配合。</p>
                   </TabPane>
                   <TabPane tab={<span><Icon type="profile" />课程目录</span>} key="2">
                       <p>第一章</p>
                       <p>第二章</p>
                       <p>第三章</p>
                       <p>第四章</p>
                       <p>第五章</p>
                       <p>第六章</p>
                       <p>第七章</p>
                       <p>第八章</p>
                       <p>第九章</p>
                   </TabPane>
                   <TabPane tab={<span><Icon type="message" />用户评价</span>} key="3">
                       <p>好</p>
                       <p>nice</p>
                       <p>good</p>
                   </TabPane>
               </Tabs>
           </div>
       )
    }
}
export default Mytabs