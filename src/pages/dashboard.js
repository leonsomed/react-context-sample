import React from 'react';
import { OwnersContext } from '../context/owners';
import { withContext } from '../context';

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

export default withContext(OwnersContext)(Page);
