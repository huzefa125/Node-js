class ApiResponse {
    constructor(statusCodedata,message = "Suceess"){
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = statusCode < 400
        this.error = error
    }
}