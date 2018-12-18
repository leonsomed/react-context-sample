import React from 'react';
import auth from './resources/auth';

export const NoAccessContext = React.createContext({});

export class NoAccessContextProvider extends React.Component {
    render() {
        const {
            children,
        } = this.props;

        return (
            <NoAccessContext.Provider
                value={{
                    login: auth.login,
                    isLoggedIn: auth.isLoggedIn,
                    didDoubleAuth: auth.didDoubleAuth,
                    user: auth.user,
                }}
            >
                {children}
            </NoAccessContext.Provider>
        );
    }
}

export const NoAccessContextConsumer = NoAccessContext.Consumer;
