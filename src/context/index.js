import React from 'react';

export function withContext(ContextConsumer, options = {}) {
    if (ContextConsumer.Consumer) {
        ContextConsumer = ContextConsumer.Consumer;
    }

    const {
        asContext,
    } = options;

    return (Component) => {
        const Hoc = (props) => {
            return (
                <ContextConsumer>
                    {values =>
                        <Component
                            {...asContext ? { context: values } : values}
                            {...props}
                        />
                    }
                </ContextConsumer>
            );
        };

        Hoc.displayName = `withContext(${Component.displayName || Component.name})`;

        return Hoc;
    };
}
