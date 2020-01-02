import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
// import { hot } from 'react-hot-loader';
import PageRouter from './router/pageRouter.js';

class HotApp extends PureComponent {
    render() {
        return (
            <PageRouter />
        )
    }
}
export default HotApp;