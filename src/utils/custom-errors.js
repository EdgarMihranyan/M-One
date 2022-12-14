/* eslint-disable max-classes-per-file */

export class ServerError extends Error {
     constructor(statusCode, param, customMessage) {
          super();
          this.statusCode = statusCode;
          this.msg = customMessage;
          this.param = param;
          this.location = 'Server';
     }
}
export class ValidatorError extends Error {
     constructor(statusCode, param, customMessage) {
          super();
          this.statusCode = statusCode;
          this.msg = customMessage;
          this.param = param;
          this.location = 'Validator';
     }
}
