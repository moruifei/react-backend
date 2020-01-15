import React, { PureComponent } from 'react';
import { Layout, Button } from 'antd';
import {withRouter} from 'react-router-dom';
import SiderLayout from '@/containers/SiderLayout';
import HeaderLayout from '@/containers/HeaderLayout';
import { getAccessMenuFn } from '@/request/service';
import {connect} from 'react-redux';
// import {Collapse} from 'react-collapse';
import '@/style/layout.less';
const { Content } = Layout;

class BasicLayout extends PureComponent {
    state = {
        collapsed: false,
        isOpend: false
    }
    componentDidMount(){
        console.log(this.props,'---')
        this.init();
    }
    init=()=>{
        let menuData = getAccessMenuFn();
        let moduleList = menuData.data.filter(it=>it.leftMemu);
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
    open=()=>{
        this.setState({isOpend: !this.state.isOpend})
    }
    render() {
        const { collapsed, isOpend } = this.state;
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
                        这是正文内容
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        currentModule: state.app.currentModule,
        moduleList: state.app.moduleList,
        moduleMenu: state.app.moduleMenu
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        changeAccessMenu: (accessM)=>{
            dispatch(changeAccessMenu(accessM))
        }
    }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BasicLayout));