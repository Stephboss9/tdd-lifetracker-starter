class ExpressError extends Error {
    constructor(status, message){
        super()
        this.message = message
        this.status = status
    }
}

class BadRequestError extends ExpressError {
    constructor(message = "Bad Request"){
        super(400, message);
    }

}

class NotFoundError extends ExpressError {
    constructor(message = "Not Found"){
        super(404, message);
    }
   
}

class UnauthorizedError extends ExpressError {
    constructor(message = "Not Found"){
        super(401, message);
    }
   
}

module.exports = {ExpressError, BadRequestError, NotFoundError, UnauthorizedError}