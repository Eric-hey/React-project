import React,{Component} from 'react'
import './centertile.css'
class Centertile extends Component{
    constructor(props){
        super(props)
        this.state={
            text:[]
        }
    }
    componentDidMount(){
        const titleArray=[]
        const propsString=this.props.centerTitle
        for(let i=0;i<propsString.length;i++){
               titleArray.push(propsString[i])
        }
        this.setState({
            text:titleArray
        })
    }
    render(){
        const emsText=this.state.text.map((item,index)=>{
            if(index!==this.state.text.length){
                return (
                    <span key={index}>
                       <em>{item}</em>/
                    </span>
                )
            }else{
                return (
                    <span key={index}>
                       <em>{item}</em>
                    </span>
                )
            }
        })
        return(
            <div className='container-types'>
                <h3 className="types-title">
                    <span className="tit-icon icon-shizhan-l tit-icon-l"></span>
                    {
                        emsText
                    }
                    <span className="tit-icon icon-shizhan-r tit-icon-r"></span>
                </h3>
            </div>
        )
    }
}
export default Centertile