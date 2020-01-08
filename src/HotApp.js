import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
// import { hot } from 'react-hot-loader';
import PageRouter from './router/pageRouter';
import SpinWrapper from '@/containers/SpinWrapper';
import store from './store';

class HotApp extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <SpinWrapper pageRouter={PageRouter} />
            </Provider>
        )
    }
}
export default HotApp;