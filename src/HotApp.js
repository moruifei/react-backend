import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
// import { hot } from 'react-hot-loader';
import PageRouter from './router/pageRouter';
import SpinWrapper from '@/containers/SpinWrapper';

class HotApp extends PureComponent {
    render() {
        return (
            <SpinWrapper pageRouter={PageRouter} />
        )
    }
}
export default HotApp;