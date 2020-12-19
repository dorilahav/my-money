export class BaseApiError extends Error {
  private readonly _status: number;

  constructor(message: string, status: number = 400) {
    super(message);

    this.name = this.constructor.name;
    this._status = status;
  }

  get status() {
    return this._status;
  }
}