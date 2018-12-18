import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { OwnersContextProvider } from './context/owners';
import { AuthContextProvider, AuthContextConsumer } from './context/auth';

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
                    <AuthContextProvider>
                        <AuthContextConsumer>
                            {value => {
                                if (type === PROTECTED) {
                                    allow = value.isLoggedIn;
                                    to = '/login';
                                    Provider = OwnersContextProvider;
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
                        </AuthContextConsumer>
                    </AuthContextProvider>
                );
            }}
        />
    );
};

export default GuardRoute;
