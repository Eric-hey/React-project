import React, {Component} from 'react'
import './mysearchbtn.css'
import { icon,Input } from 'antd';
const Search = Input.Search;

class Mysearchbtn extends Component {
    constructor(props){
        super(props)
        this.state = {
        };
    }
    render(){
        return(
                    <div >
                        <Search
                            placeholder="课程搜索"
                            onSearch={value => console.log(value)}
                            enterButton
                        />
                    </div>

        )
    }
}
export default Mysearchbtn