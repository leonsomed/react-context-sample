import React from 'react';

export const AuthContext = React.createContext({});

export class AuthContextProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            didDoubleAuth: false,
            user: {
                name: 'leo',
                email: 'test@gmail.com',
            },
        };

        this.login = this.login.bind(this);
    }

    login() {
        this.setState({
            isLoggedIn: true,
            user: {
                name: 'leo',
                email: 'test@gmail.com',
            },
        });
    }

    logout() {
        this.setState({
            isLoggedIn: false,
            didDoubleAuth: false,
            user: null,
        });
    }

    render() {
        const {
            children,
        } = this.props;

        return (
            <AuthContext.Provider
                value={{
                    ...this.state,
                    login: this.login,
                    logout: this.logout,
                }}
            >
                {children}
            </AuthContext.Provider>
        );
    }
}

export const AuthContextConsumer = AuthContext.Consumer;
