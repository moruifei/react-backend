import React, { PureComponent } from 'react';
import { Spin } from 'antd';
import '@/style/spin.less';

class SpinWrapper extends PureComponent {
    render() {
        const PageRouter = this.props.pageRouter;
        return (
            <Spin
                spinning={false}
                wrapperClassName='spin-loading'
                indicator={
                    <div className="loading">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                }
            >
                <PageRouter />
            </Spin>
        )
    }
}
export default SpinWrapper;