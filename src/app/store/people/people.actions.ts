import { createAction, props } from '@ngrx/store';
import { Person } from '../../models/Person.model';

export const loadData = createAction('[Person] load');
export const loadDataSuccess = createAction('[Person] loadSuccess', props<{ payload: any }>());
export const loadDataFailure = createAction('[Person] loadFailed', props<{ payload: any }>());


export const addData = createAction('[Person] add');

export const addDataFailure = createAction('[Person] addFailed', props<{ payload: any }>());