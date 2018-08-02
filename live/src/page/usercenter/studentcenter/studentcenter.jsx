import React,{Component} from 'react'
import { Table, Input,Layout,Button, Menu, Dropdown, Icon } from 'antd'
import  './studentcenter.css'
import Commonheadericon from "../privatecomponent/headercommon/commonheadericon";
import Navbar from './../../../components/navbar/navbar'
import MyFooter from './../../../components/footer/myfooter'



const data = [{
    key: '1',
    exchangeTime: '2018-3-14',
    exchangeName: '大数据',
    exchangeNumber: '2500.00',
    exchangeState:'交易完成',
    remark:'',
}, {
    key: '2',
    exchangeTime: '2018-3-14',
    exchangeName: 'web前端开发',
    exchangeNumber: '2500.00',
    exchangeState:'交易完成',
    remark:'',
}, {
    key: '3',
    exchangeTime: '2018-3-14',
    exchangeName: 'ios开发',
    exchangeNumber: '2500.00',
    exchangeState:'交易完成',
    remark:'',
}, {
    key: '4',
    exchangeTime: '2018-3-14',
    exchangeName: 'java开发',
    exchangeNumber: '2500.00',
    exchangeState:'交易完成',
    remark:'',
}];
class Studentcenter extends Component{
    constructor(props){
        super(props)
    }
    state = {
        filterDropdownVisible: false,
        data,
        searchText: '',
        filtered: false,
    };
    onInputChange = (e) => {
        this.setState({ searchText: e.target.value });
    }
    onSearch = () => {
        const { searchText } = this.state;
        const reg = new RegExp(searchText, 'gi');
        this.setState({
            filterDropdownVisible: false,
            filtered: !!searchText,
            data: data.map((record) => {
                const match = record.name.match(reg);
                if (!match) {
                    return null;
                }
                return {
                    ...record,
                    name: (
                        <span>
              {record.name.split(reg).map((text, i) => (
                  i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
              ))}
            </span>
                    ),
                };
            }).filter(record => !!record),
        });
    }
    render(){
        const navson=[
            {key:'nav1',text:'课程'},
            {key:'nav2',text:'消息'}
        ]
        const userurl='/scenter'
        const courseUrl='/tcourse'
        const currentStateLabel='账户余额：'
        const userType='student'
        const columns= [{
            title: '交易时间',
            dataIndex: 'exchangeTime',
            key: 'exchangeTime',
            // filterDropdown: (
            //     <div className="custom-filter-dropdown">
            //         <Input
            //             ref={ele => this.searchInput = ele}
            //             placeholder="Search name"
            //             value={this.state.searchText}
            //             onChange={this.onInputChange}
            //             onPressEnter={this.onSearch}
            //         />
            //         <Button type="primary" onClick={this.onSearch}>Search</Button>
            //     </div>
            // ),
            // filterIcon: <Icon type="smile-o" style={{ color: this.state.filtered ? '#108ee9' : '#aaa' }} />,
            // filterDropdownVisible: this.state.filterDropdownVisible,
            // onFilterDropdownVisibleChange: (visible) => {
            //     this.setState({
            //         filterDropdownVisible: visible,
            //     }, () => this.searchInput && this.searchInput.focus());
            // },
        }, {
            title: '交易名称',
            dataIndex: 'exchangeName',
            key: 'exchangeName',
        }, {
            title: '交易金额',
            dataIndex: 'exchangeNumber',
            key: 'exchangeNumber',
            // filters: [{
            //     text: 'London',
            //     value: 'London',
            // }, {
            //     text: 'New York',
            //     value: 'New York',
            // }],
            // onFilter: (value, record) => record.address.indexOf(value) === 0,
        }, {
            title: '交易状态',
            dataIndex: 'exchangeState',
            key: 'exchangeState',
        }, {
            title: '备注',
            dataIndex: 'remark',
            key: 'remark',
        }];
        return(
            <Layout>
                <Navbar navson={navson} courseUrl={courseUrl} userurl={userurl}/>
                <div className="personCenter">
                    <Commonheadericon currentStateLabel={currentStateLabel} userType={userType} />
                    <div className="exchangeDetail">
                        <h3><Icon type="pay-circle" />交易记录</h3>
                        <Table className="exchangeTabel" columns={columns} dataSource={this.state.data} />
                    </div>
                </div>
                <MyFooter/>
            </Layout>
        )
    }
}
export default Studentcenter