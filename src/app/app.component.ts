import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { loadData } from './store/people/people.actions';
import { State, Store, select } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { peopleSelector } from './store/people/people.selector';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe,JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data$ = this.store.pipe(select(peopleSelector));
  data:any;
  constructor(private store: Store, private actions$: Actions) {}

  ngOnInit() {
    this.store.dispatch(loadData());
    this.data$.subscribe((data)=>this.data=data);
  }
}
