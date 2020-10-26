import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import { withRouter } from 'react-router-dom';
import SiderLayout from '@/containers/SiderLayout';
import HeaderLayout from '@/containers/HeaderLayout';
import { getAccessMenuFn } from '@/request/service';
import { changeAccessMenu } from '@/reducer/app';
import { connect } from 'react-redux';
import { Checkbox } from 'antd';
import CheckGroup from '@/components/linshi'
// import {Collapse} from 'react-collapse';
import '@/style/layout.less';
const { Content } = Layout;

class BasicLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            isOpend: false,
            selectedBox: ['最高领袖', '欠扁哥'],
            plainOptions: ['最高领袖', '欠扁哥', '靓仔宁']
        }
    }
    state = {

    }
    componentDidMount() {
        console.log(this.props, '---')
        this.init();
    }
    init = () => {
        let menuData = getAccessMenuFn();
        let moduleList = menuData.data.filter(it => it.leftMemu);
        let currentModule = moduleList[0].name;
        let moduleMenu = moduleList[0].children;
        this.props.changeAccessMenu({
            moduleList,
            currentModule,
            moduleMenu
        })
    }
    toggle = () => {
        this.setState({ collapsed: !this.state.collapsed });
    }
    open = () => {
        this.setState({ isOpend: !this.state.isOpend })
    }
    handleCheckboxChange = (val) => {
        console.log(val)
        this.setState({
            selectedBox: val
        })
    }
    handleSelectedAll = () => {
        const { selectedBox, plainOptions } = this.state;
        this.setState({
            selectedBox: plainOptions
        })
    }
    handleSelectedOpposite = () => {
        const { selectedBox, plainOptions } = this.state;
        const oppositeSelected = [];
        plainOptions.forEach((e, k) => {
            let flag = false;
            selectedBox.forEach((e1, k1) => {
                if (e == e1) {
                    flag = true
                }
            })
            if (!flag) {
                oppositeSelected.push(e)
            }
        })
        this.setState({
            selectedBox: oppositeSelected
        }, () => { console.log(this.state.selectedBox) })
    }
    render() {
        const { collapsed, isOpend, selectedBox, plainOptions } = this.state;
        return (
            <Layout>
                <SiderLayout
                    collapsed={collapsed}
                />
                <Layout>
                    <HeaderLayout
                        collapsed={collapsed}
                        toggle={this.toggle}
                    />
                    <Content style={{ margin: '20px', background: '#fff', padding: '16px' }}>
                        {/* <Checkbox.Group
                            value={selectedBox}
                            //   options={plainOptions}
                            onChange={this.handleCheckboxChange}
                        >
                            {
                                plainOptions.map((e, k) => {
                                    return <Checkbox key={e} value={e}>{e}</Checkbox>
                                })
                            }
                        </Checkbox.Group>
                        <Button style={{ marginRight: "20px" }} type="primary" onClick={this.handleSelectedAll}>全选</Button>
                        <Button type="primary" onClick={this.handleSelectedOpposite}>反选</Button> */}
                        <CheckGroup />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        currentModule: state.app.currentModule,
        moduleList: state.app.moduleList,
        moduleMenu: state.app.moduleMenu
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeAccessMenu: (accessM) => {
            dispatch(changeAccessMenu(accessM))
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BasicLayout));