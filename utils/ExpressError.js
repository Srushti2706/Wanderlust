class ExpressError extends Error {
    constructor(statusCode, message) {
        super(); // ✅ Correctly sets this.message and Error stack
        this.statusCode = statusCode;
        this.message = message;
    }
}

module.exports = ExpressError;
