import React,{Component} from 'react'
import { Table, Input,Layout,Button, Menu, Dropdown, Icon,Modal,Radio,Upload,DatePicker   } from 'antd'
import  './tearcherupcourse.css'
import Navbar from './../../../components/navbar/navbar'
import MyFooter from './../../../components/footer/myfooter'


const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { RangePicker } = DatePicker;
class Studentstudycourse extends Component{
    constructor(props){
        super(props)
    }
    state = {
        loading: false,
        visible: false,
        previewVisible: false,
        previewImage: '',
        fileList: [],
        liveTelecast:false,
        handShow:false
    };

    render(){
        const navson=[
            {key:'nav1',text:'课程'},
            {key:'nav2',text:'消息'}
        ]
        const courseUrl='/tcourse'
        const userurl='/scenter'
        const { visible, loading } = this.state;
        const { previewVisible, previewImage, fileList } = this.state;
        const { liveTelecast, handShow } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return(
            <Layout>
                <Navbar navson={navson} courseUrl={courseUrl} userurl={userurl}/>
                <div className="coursePageContent">
                    <div className="courseContent">
                        <Button type="primary" icon="upload" className="uploadBtn" onClick={this.showModal}>上传课程</Button>
                    </div>
                </div>
                <div className="uploadNewCourse">
                    <Modal
                        visible={visible}
                        title="上传课程"
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        style={{ top: 15 }}
                        footer={[
                            <Button key="back" onClick={this.handleCancel}>取消</Button>,
                            <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                                确定上传
                            </Button>,
                        ]}
                    >
                        <div>
                            <label htmlFor="">课程名称：</label>
                            <input type="text" className="courserName"/>
                        </div>
                        <div>
                            <label htmlFor="">内容简介：</label>
                            <textarea name="" id="" cols="30" rows="40"></textarea>
                        </div>
                        <div className="uploadHeaderPic">
                            <label htmlFor="">头像设置：</label>
                            <div className="clearfix">
                                <Upload
                                    action="//jsonplaceholder.typicode.com/posts/"
                                    listType="picture-card"
                                    fileList={fileList}
                                    onPreview={this.handlePreview}
                                    onChange={this.handleChange}
                                >
                                    {fileList.length >= 1 ? null : uploadButton}
                                </Upload>
                                <Modal visible={previewVisible} footer={null} onCancel={this.handlePicCancel}>
                                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                                </Modal>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">课程难度：</label>
                            <span className="selectCourseEasy">
                                <RadioGroup onChange={this.onChange} defaultValue="a">
                                    <RadioButton value="a">入门</RadioButton>
                                    <RadioButton value="b">拔高</RadioButton>
                                    <RadioButton value="c">进阶</RadioButton>
                                    <RadioButton value="d">突破</RadioButton>
                                </RadioGroup>
                            </span>
                        </div>
                        <div>
                            <label htmlFor="">收费类别：</label>
                            <span className="selectCourseEasy">
                                <RadioGroup onChange={this.onChange} defaultValue="a">
                                    <RadioButton value="a">免费</RadioButton>
                                    <RadioButton value="b">收费</RadioButton>
                                </RadioGroup>
                            </span>
                        </div>
                        <div>
                            <label htmlFor="">播放类别：</label>
                            <span className="selectCourseEasy">
                                <RadioGroup onChange={this.onChange} defaultValue="a">
                                    <RadioButton value="a" onClick={this.liveTelecast}>直播</RadioButton>
                                    <RadioButton value="b" onClick={this.handShow}>点播</RadioButton>
                                </RadioGroup>
                            </span>
                            <div className="selectShowType" onClick={this.liveTelecast}>
                                {
                                    liveTelecast===true?
                                        <div className="liveTelecast">
                                            <span>请选择直播课程时间：</span>
                                            <DatePicker
                                                showTime
                                                format="YYYY-MM-DD HH:mm:ss"
                                                placeholder="Select Time"
                                                onChange={this.onTimeChange}
                                                onOk={this.onTimeOk}
                                            />
                                        </div>:''

                                }

                                <div className="handShow">

                                </div>
                            </div>
                        </div>

                    </Modal>
                </div>
                <MyFooter/>
            </Layout>
        )
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
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
    onChange =(e)=> {
        console.log(`radio checked:${e.target.value}`);
    }
    handlePicCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => this.setState({ fileList })
    onTimeChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }

    onTimeOk(value) {
        console.log('onOk: ', value);
    }
    // liveTelecast(){
    //     this.setState({ liveTelecast: true });
    // }
}
export default Studentstudycourse