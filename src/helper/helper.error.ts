export class ClientError extends Error {
  code: any;
  name: string;
  constructor(message: string, code = 400) {
    super(message);
    this.message = message;
    this.code = code;
    this.name = 'ClientError';
  }
}

export class InvariantError extends ClientError {
  constructor(message: string) {
    super(message);
    this.message = message;
    this.name = 'InvariantError';
  }
}

export class NotFoundError extends ClientError {
  constructor(message: string) {
    super(message, 404);
    this.message = message;
    this.name = 'NotFoundError';
  }
}

export class AuthorizationError extends ClientError {
  constructor(message: string) {
    super(message, 403);
    this.message = message;
    this.name = 'AuthorizationError';
  }
}

export class AuthenticationError extends ClientError {
  constructor(message: string) {
    super(message, 401);
    this.message = message;
    this.name = 'AuthenticationError';
  }
}
