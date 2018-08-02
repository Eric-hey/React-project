import React,{Component} from 'react'
import {Radio} from 'antd'
import './radiobox.css'
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


class MyRadiobox extends Component{
    constructor(props){
        super(props)
        this.state={
        }
        this.onChangeForRadio=this.onChangeForRadio.bind(this)
    }
    onChangeForRadio(e){
       this.props.setRadioValue(e.target.value,this.props.componentType)
    }
    render(){
        return(
            <div className="myradio-c">
                <RadioGroup defaultValue={this.props.radioValue} onChange={this.onChangeForRadio}>
                    <RadioButton value="STUDENT">我是学生</RadioButton>
                    <RadioButton value="TEACHER">我是老师</RadioButton>
                </RadioGroup>
            </div>
        )
    }
}
export default MyRadiobox