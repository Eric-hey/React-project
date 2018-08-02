import React, {Component} from 'react'
import {Layout} from 'antd'
import './footer.css'
const {Footer} = Layout

class MyFooter extends Component {
    render() {
        return (
            <Layout>
                <Footer style={{textAlign: 'center'}}>
                    <div className="footer-link">
                        <a href="#" target="_blank" title="关于我们">关于我们</a>
                        <a href="#" target="_blank" title="联系我们">联系我们</a>
                        <a href="#" target="_blank" title="友情链接">友情链接</a>
                    </div>
                   <div style={{color:'#999'}}>
                       中软云课堂 ©2018 中软国际技术服务有限公司
                   </div>
                </Footer>
            </Layout>
        )
    }
}

export default MyFooter
