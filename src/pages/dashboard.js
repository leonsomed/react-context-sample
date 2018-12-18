import React from 'react';
import { AccessContext } from '../context/access';

class Page extends React.Component {
    render() {
        const {
            owners,
            createOwner,
        } = this.context;

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
                        <li key={n.name}>{n.email}</li>
                    )}
                </ul>
            </div>
        );
    }
}

Page.contextType = AccessContext;

export default Page;
