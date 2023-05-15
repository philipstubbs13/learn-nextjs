export class AuthRequiredError extends Error {
    constructor(message = 'Auth is required to acccess this page') {
        super(message)
        this.name = 'AuthRequiredError'
    }
}