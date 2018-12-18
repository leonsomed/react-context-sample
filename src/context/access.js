import React from 'react';
import owners from './resources/owners';

export const AccessContext = React.createContext({});

export class AccessContextProvider extends React.Component {
    render() {
        const {
            children,
        } = this.props;

        return (
            <AccessContext.Provider
                value={{
                    owners: owners.owners,
                    getOwners: owners.getAll,
                    createOwner: owners.create,
                }}
            >
                {children}
            </AccessContext.Provider>
        );
    }
}

export const AccessContextConsumer = AccessContext.Consumer;
