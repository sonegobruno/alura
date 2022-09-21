import { Injectable } from '@angular/core';
import * as uuid from 'uuid'

@Injectable({ providedIn: 'root'})
export class UniqueIdService {

  constructor() { }

  public generateUniqueIdWithPrefix(prefix: string) {
    return `${prefix}-${this._generateUniqueId()}`
  }

  private _generateUniqueId(): string {
    return uuid.v1()
  }
}
