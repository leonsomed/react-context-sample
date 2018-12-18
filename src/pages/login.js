import React from 'react';
import { withRouter } from 'react-router-dom';
import { NoAccessContext } from '../context/noaccess';

class Page extends React.Component {
    render() {
        const {
            login,
        } = this.context;

        const {
            history,
        } = this.props;

        return (
            <div>
                <h1>Login</h1>
                <button
                    onClick={() => {
                        login();
                        history.push('/dashboard');
                    }}
                >
                    login
                </button>
            </div>
        );
    }
}

Page.contextType = NoAccessContext;

export default withRouter(Page);
