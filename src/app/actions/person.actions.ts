import { Action } from '@ngrx/store';

export const EDIT_NAME  = '[Post] Edit Name';
export const UP_AGE     = '[Post] Up Age';
export const DOWN_AGE   = '[Post] Down Age';
export const RESET      = '[Post] Reset';


export class EditName implements Action {
  readonly type = EDIT_NAME;

  /// user a constructor to send a payload with the action
  constructor(public payload: string) {}
}

export class UpAge implements Action {
  readonly type = UP_AGE;
}

export class DownAge implements Action {
  readonly type = DOWN_AGE;
}

export class Reset implements Action {
  readonly type = RESET;
}

export type All
  = UpAge
  | DownAge
  | Reset
  | EditName;