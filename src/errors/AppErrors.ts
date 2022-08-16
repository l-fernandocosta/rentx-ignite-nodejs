class AppErrors {
  public readonly statusCode;
  public readonly errorMessage;

  constructor(statusCode = 400, errorMessage) {
    this.errorMessage = errorMessage;
    this.statusCode = statusCode;
  }
}

export { AppErrors };
