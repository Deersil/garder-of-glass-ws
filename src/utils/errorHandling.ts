import buildResponse from './buildResponse';
import {
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_UNAUTHORIZED,
  HTTP_STATUS_FORBIDDEN,
  HTTP_STATUS_NOT_FOUND,
  HTTP_STATUS_INTERNAL_SERVER_ERROR,
  HTTP_STATUS_CONFLICT,
} from '../constants';

/**
 * Middleware function that handles exceptions
 * It parses the exception and handles to a user.
 * @param {Object} ctx koa context object
 * @param {Function} next next function
 */
export default async (ctx: any, next: any) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    buildResponse({
      status: err.status || 500,
      error: {
        status: err.status || 500,
        message: err.message,
      },
      ctx,
    });
    ctx.app.emit('error', err, ctx);
  }
};

/**
 * Base class for API errors. Contains indication of HTTP status.
 */
export class ApiError extends Error {
  constructor(message: string, status: any) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Throwing this error results in 404 (Not Found) HTTP response code.
 */
export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(message, HTTP_STATUS_NOT_FOUND);
  }
}

/**
 * Throwing this error results in 403 (Forbidden) HTTP response code.
 */
export class ForbiddenError extends ApiError {
  constructor(message: string) {
    super(message, HTTP_STATUS_FORBIDDEN);
  }
}

/**
 * Throwing this error results in 401 (Unautorized) HTTP response code.
 */
export class UnauthorizedError extends ApiError {
  constructor(message: string) {
    super(message, HTTP_STATUS_UNAUTHORIZED);
  }
}

/**
 * Represents validation error. Throwing this error results in 400 (Bad Request) HTTP response code.
 */
export class ValidationError extends ApiError {
  details: any | null;
  constructor(message: string, details: string) {
    super(message, HTTP_STATUS_BAD_REQUEST);
    this.details = details;
  }
}

/**
 * Represents unexpected error. Throwing this error results in 500 (Internal Error) HTTP response code.
 */
export class InternalError extends ApiError {
  constructor(message: string) {
    super(message, HTTP_STATUS_INTERNAL_SERVER_ERROR);
  }
}

/**
 * Represents unexpected error. Throwing this error results in 500 (Internal Error) HTTP response code.
 */
export class ConflictError extends ApiError {
  constructor(message: string) {
    super(message, HTTP_STATUS_CONFLICT);
  }
}

export class CurrencyLayerError extends ApiError {
  constructor(message: string, status: any) {
    super(message, status);
  }
}
