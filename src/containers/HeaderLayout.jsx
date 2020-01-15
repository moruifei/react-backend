import React, { PureComponent } from 'react';
import { Layout, Icon, Row, Col, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeModule } from '@/actions/actionsCreate';
import FullScreen from '@/components/FullScreen';
import HeaderMenu from '@/components/HeaderMenu';
import logo from '@/assets/images/logo.svg';

const { Header } = Layout
const MenuItem = Menu.Item;
const {SubMenu} = Menu;
class HeaderLayout extends PureComponent {
    state = {
        
    }
    componentDidMount(){
        console.log(this.props,'props')
        this.props.changeModule({a:'b'})
    }
    logOut=()=>{
        setTimeout(()=>{
            this.props.history.push('/login');
        },2000)
    }
    render() {
        const { collapsed } = this.props;
        return (
            <Header className="layout-header">
                <Row type="flex" justify="start" className="layout-flex-row">
                    <Col xs={6} sm={6} md={2} lg={2} xl={1} className="layout-flex-col">
                        <ul className="layout-ul">
                            <li>
                                <Icon
                                    className="trigger"
                                    type={collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.props.toggle}
                                />
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={12} md={16} lg={16} xl={18} className="layout-flex-col">
                        <HeaderMenu 
                            moduleList={this.props.moduleList}
                            changeModule={this.props.changeModule}
                            currentModule={this.props.currenModule}
                        />
                    </Col>
                    <Col xs={6} sm={6} md={2} lg={2} xl={1} className="layout-flex-col">
                        <a href="https://github.com/moruifei/react-backend" target="_blank"><Icon type="github" /></a>
                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6} xl={4} className="layout-flex-col">
                        <Menu
                            mode="horizontal"
                            style={{ background: 'none', lineHeight: '48px', borderBottom: '1px solid #fff' }}
                        >
                            <MenuItem key='full-screen'>
                                <FullScreen />
                            </MenuItem>
                            <SubMenu
                                title={
                                    <span className="user-avatar"><img src={logo} alt=""/><i className="on bottom b-white" /></span>
                                }
                            >
                                <Menu.ItemGroup title="用户中心">
                                    <MenuItem key="setting:1">你好,欢迎~</MenuItem>
                                    <MenuItem key="setting:2"><span><Icon type="user" />个人中心</span></MenuItem>
                                    <MenuItem key="logout"><span onClick={this.logOut}><Icon type="logout" />退出系统</span></MenuItem>
                                </Menu.ItemGroup>
                            </SubMenu>
                        </Menu>
                    </Col>
                </Row>
            </Header>
        )
    }
}
const mapStateToProps = (state) =>{
    console.log(state)
    return {
        currentModule: state.app.currentModule,
        moduleList: state.app.moduleList,
        accessMenu: state.app.accessMenu
    }
}
const mapDispatchToProps =(dispatch) => {
    return {
        changeModule: (modules)=>{
            dispatch(changeModule(modules))
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderLayout))