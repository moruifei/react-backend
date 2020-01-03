import React, { PureComponent } from 'react';
import { Layout } from 'antd';
import SiderLayout from '@/containers/SiderLayout';
import HeaderLayout from '@/containers/HeaderLayout';
import '@/style/layout.less';
const { Content } = Layout;

class BasicLayout extends PureComponent {
    state = {
        collapsed: false
    }
    toggle = () => {
        this.setState({ collapsed: !this.state.collapsed });
    }
    render() {
        const { collapsed } = this.state;
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
                        这是内容
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
export default BasicLayout;