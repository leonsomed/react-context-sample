class Owners {
    constructor() {
        this.owners = [
            {
                id: Math.random(),
                name: `New owner ${Math.random()}`,
                email: 'test@example.com',
            },
        ];

        this.getAll = this.getAll.bind(this);
        this.create = this.create.bind(this);
    }

    getAll() {
        this.owners = [
            {
                id: Math.random(),
                name: `New owner ${Math.random()}`,
                email: 'test@example.com',
            },
        ];
    }

    create() {
        // TODO call API
        const newOwner = {
            id: Math.random(),
            name: `New owner ${Math.random()}`,
            email: 'test@example.com',
        };

        this.owners = [
            ...this.owners,
            newOwner,
        ];

        console.log(this.owners);
    }
}

export default new Owners();
