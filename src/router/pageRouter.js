import React, { PureComponent, Suspense, lazy } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
const BasicLayout = lazy(() => import('../layout/BasicLayout'));
const Login = lazy(() => import('../pages/Login'));

class PageRouter extends PureComponent {
    render() {
        return (
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to='/app/home' />} />
                        <Route path='/app' component={BasicLayout} />
                        <Route path='/login' component={Login} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        )
    }
}
export default PageRouter;