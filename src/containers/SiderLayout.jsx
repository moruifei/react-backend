import React, { PureComponent } from 'react';
import { Layout, Menu, Icon} from 'antd';
import logo from '@/assets/images/logo.svg';

const { Sider } = Layout
class SiderLayout extends PureComponent {
    state = {

    }
    render() {
        const {collapsed} = this.props;
        return (
            <Sider trigger={null} collapsible collapsed={collapsed} className="layout-sider">
                <div className="layout-logo"><img src={logo} alt='' /><span>react-backend</span></div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span>nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span>nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span>nav 3</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}
export default SiderLayout;