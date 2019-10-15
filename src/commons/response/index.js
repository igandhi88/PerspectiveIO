class Response {

  constructor(build) {
    this.status = build.status
    this.code = build.code
    this.message = build.message
    this.data = build.data
    this.error=build.error
    this.errorMessage=build.errorMessage
  }
}


class Builder {
  constructor(status, code) {
    this.status = status
    this.code = code
  }

  setMessage(message) {
    this.message = message
    return this
  }

  setResultData(result) {
    this.data = result
    return this
  }

  setErrorData(error) {
    this.error = error
    return this
  }

  setErrorMessage(message)
  {
    this.errorMessage=message
    return this
  }

  build() {
    return new Response(this)
  }
}

module.exports = Builder
