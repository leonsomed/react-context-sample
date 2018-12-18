import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AccessContextProvider } from './context/access';
import { NoAccessContextProvider, NoAccessContextConsumer } from './context/noaccess';

export const PROTECTED = 'protected';

const GuardRoute = (props) => {
    const {
        type,
        component: Component,
        ...rest
    } = props;

    return (
        <Route
            {...rest}
            render={(routeProps) => {
                let allow;
                let to;
                let Provider;

                return (
                    <NoAccessContextProvider>
                        <NoAccessContextConsumer>
                            {value => {
                                if (type === PROTECTED) {
                                    allow = value.isLoggedIn;
                                    to = '/login';
                                    Provider = AccessContextProvider;
                                } else {
                                    allow = !value.isLoggedIn;
                                    to = '/dashboard';
                                    Provider = React.Fragment;
                                }

                                if (!allow) {
                                    return <Redirect to={to} />;
                                }

                                return (
                                    <Provider>
                                       <Component {...routeProps} />
                                    </Provider>
                                );
                            }}
                        </NoAccessContextConsumer>
                    </NoAccessContextProvider>
                );
            }}
        />
    );
};

export default GuardRoute;
