class Auth {
    constructor() {
        this.isLoggedIn = false;
        this.didDoubleAuth = false;
        this.user = {
            name: 'leo',
            email: 'test@gmail.com',
        };

        this.login = this.login.bind(this);
    }

    login() {
        this.isLoggedIn = true;
        this.user = {
            name: 'leo',
            email: 'test@gmail.com',
        };
    }
}

export default new Auth();
