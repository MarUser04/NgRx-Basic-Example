import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Person } from './models/person.model';
import * as PersonActions from './actions/person.actions';


interface AppState {
  person: Person;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  person: Observable<Person>

  name: string; 

  constructor(private store: Store<AppState>) {
    this.person = this.store.select('person')
  }

  editName() {
    this.store.dispatch(new PersonActions.EditName(this.name))
    this.name = '';
  }

  reset() {
    this.store.dispatch(new PersonActions.Reset())
  }

  upAge() {
    this.store.dispatch(new PersonActions.UpAge())
  }

  downAge() {
    this.store.dispatch(new PersonActions.DownAge())
  }
}