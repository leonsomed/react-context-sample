import React from 'react';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import { withContext } from '../context';

function Page(props) {
    const {
        history,
        login,
    } = props;

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

export default withContext(AuthContext)(
    withRouter(Page)
);
