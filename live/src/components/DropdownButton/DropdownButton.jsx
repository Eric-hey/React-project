import React,{Component} from 'react'
import { Button, Menu, Dropdown, Icon } from 'antd'

class DropdownButton extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const menu=this.props.dropsons.map((item)=>{
            return(
                <Menu.Item key={item.id}>{item.text}</Menu.Item>
            )
        })
        let handleMenuClick=(e)=>{
            console.log(e)
        }
        const menuContainer=(
            <Menu onClick={handleMenuClick}>
                {menu}
            </Menu>
        )
        return(
            <div>
                <Dropdown overlay={menuContainer}>
                    <Button>
                        全部课程 <Icon type="down" />
                    </Button>
                </Dropdown>
            </div>
        )
    }
}
export default DropdownButton