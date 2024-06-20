import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

// Get complete state of the kart in application
export const selectPeopleState = createFeatureSelector<AppState>('people');

export const peopleSelector = createSelector(
    selectPeopleState,
    (state: AppState) => state.people
  );