import * as PersonActions from '../actions/person.actions';
import { Person }         from '../models/person.model'

export type Action = PersonActions.All;

const defaultState: Person = {
  name: 'Marco Useche',
  age: 22
}

const newState = (state, newData) => {
  return Object.assign({}, state, newData)
}

export function personReducer(state: Person = defaultState, action: Action) {
  console.log(action.type, state)

	switch (action.type) {
  		case PersonActions.EDIT_NAME:
  			return newState(state, { name: action.payload });

      case PersonActions.UP_AGE:
        return newState(state, { age: state.age + 1 });

  		case PersonActions.DOWN_AGE:
  			return newState(state, { age: state.age - 1 });

  		case PersonActions.RESET:
  			return defaultState;

  		default:
  			return state;

	}
}