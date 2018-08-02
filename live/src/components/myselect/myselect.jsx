import React, {Component} from 'react'
import './myselect.css'
import { Select  } from 'antd';
const Option = Select.Option;

class Myselect extends Component {
    constructor(props){
        super(props)
        this.state = {
        };
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(e){
        console.log(e)
    }
    render(){
        const selectMes=this.props.selectMes
        return(
            <div >
                <Select
                    style={{width:selectMes.width}}
                    defaultValue={selectMes.defaultValue} onChange={this.handleChange}>
                    {
                        selectMes.options.map((item)=>{
                            return(
                                <Option key={item.key} value={item.value}>{item.text}</Option>
                            )
                        })
                    }
                </Select>
            </div>

        )
    }
}
export default Myselect