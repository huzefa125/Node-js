class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went Wrong",
        error = [],
        stake = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.error = error

        if(stake){
            this.stack = stake
        }
        else{
            Error.captureStackTrace(this,this.construtor)
        }
    }
}
export {ApiError}