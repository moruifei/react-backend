import React, { PureComponent } from 'react';
import { Menu } from 'antd';
class HeaderMenu extends PureComponent {
    render() {
        console.log(this.props, 'headerProps')
        const menuItemList = [];

        return (
            <Menu
              onClick={this.props.changeModule}
            //   selectedKeys={[]}
              mode="horizontal"
            >

            </Menu>
        )
    }
}
export default HeaderMenu;