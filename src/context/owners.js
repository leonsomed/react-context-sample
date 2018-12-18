import React from 'react';

export const OwnersContext = React.createContext({});

export class OwnersContextProvider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            owners: [
                {
                    id: Math.random(),
                    name: 'leo',
                    email: 'test@gmail.com',
                },
            ],
        };

        this.createOwner = this.createOwner.bind(this);
    }

    createOwner() {
        this.setState({
            owners: [
                ...this.state.owners,
                {
                    id: Math.random(),
                    name: 'leo',
                    email: 'test@gmail.com',
                },
            ],
        });
    }

    render() {
        const {
            children,
        } = this.props;

        return (
            <OwnersContext.Provider
                value={{
                    ...this.state,
                    createOwner: this.createOwner,
                }}
            >
                {children}
            </OwnersContext.Provider>
        );
    }
}

export const OwnersContextConsumer = OwnersContext.Consumer;
