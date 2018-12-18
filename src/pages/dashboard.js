import React from 'react';
import { OwnersContext } from '../context/owners';
import { AuthContext } from '../context/auth';
import { withContext } from '../context';
import flowRight from 'lodash/flowRight';
import { withRouter } from 'react-router-dom';

const Page = (props) => {
    const {
        owners,
        createOwner,
    } = props;

    return (
        <div>
            <h1>Dashboard</h1>
            <button
                onClick={createOwner}
            >
                create
            </button>
            <ul>
                {owners.map(n =>
                    <li key={n.id}>{n.email}</li>
                )}
            </ul>
        </div>
    );
}

export default flowRight([
    withContext(AuthContext),
    withContext(OwnersContext),
    withRouter,
])(Page);
