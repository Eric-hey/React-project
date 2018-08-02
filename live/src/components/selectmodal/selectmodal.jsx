import React,{Component} from 'react'
import { Modal, Button, Row, Col,Icon  } from 'antd';
import './selectmodal.css'
import { HttpGet } from '../.././server/get'

export default class selectModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            loading: false,
            curentId:'',
            selectCourseData:[],
            selectedStores:[],
            newSelection:[]
        }
    }

    componentDidMount() {
        HttpGet('/business-service/api/homePage/unAuth/allCourse','')
            .then((res) => {
                console.log(res)
                this.setState({
                    visible: true,
                    selectCourseData:res.data
                });
            })
            .catch((err)=>{

            })
    }
    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }
    handleCancel = () => {
        this.setState({ visible: false });
    }
    currentSelectSpan(id){
        const newSelection = id;
        let newSelectionArray;
        if(this.state.selectedStores.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.selectedStores.filter((s:any) => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.selectedStores, newSelection];
        }
        // console.log(newSelectionArray)
        this.setState({
            // selectCourseData:this.selectCourseData[idx].currentChildren
            curentId: id,
            selectedStores: newSelectionArray
        })
    }
    getTitleItemCssClasses(idClass) {
        return idClass === this.state.curentId ? "currentSelectDetail" : "selectDetail";
    }
    render() {
        const { visible, loading } = this.state;
        return (
            <div>
                <Modal
                    className="currentSelectModal"
                    visible={visible}
                    title="选择你感兴趣的知识"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="selectOk" className="selectOk" type="primary" loading={loading} onClick={this.handleOk}>
                            选好了
                        </Button>,
                    ]}
                >
                    <Row gutter={12}>
                        {
                            this.state.selectCourseData.map((item,idx)=>{
                                return <Col span={8} key={item.firstCategory}>
                                            <h3><Icon type="codepen-circle" className="thridIcon"/> {item.firstCategoryName}</h3>
                                            <div className="currentParCon">
                                                {
                                                    item.secondCategoryBeans.map((chidrenItem,chidrenIdx)=>{
                                                        return <span id={chidrenItem.secondCategory} className={this.getTitleItemCssClasses(chidrenItem.secondCategory)} key={chidrenIdx} onClick={this.currentSelectSpan.bind(this,chidrenItem.secondCategory)}>
                                                            {chidrenItem.secondCategoryName}
                                                       </span>
                                                    })
                                                }
                                            </div>
                                        </Col>

                            })
                        }
                    </Row>
                </Modal>
            </div>
        );
    }
}