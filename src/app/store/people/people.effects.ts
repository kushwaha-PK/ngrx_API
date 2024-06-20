import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
@Injectable()
export class PeopleEffects {
    
    url="http://localhost:3000/people";
    loadData$ = createEffect(() => this.actions$.pipe(
    ofType('[Person] load'),
    exhaustMap(() => this.http.get(this.url)
      .pipe(
        map((people: any) => ({ type: '[Person] loadSuccess', payload: people })),
        catchError((err: any) => of({ type: '[Person] loadFailed',payload:err }))
      ))
    )
  );

  

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}
}