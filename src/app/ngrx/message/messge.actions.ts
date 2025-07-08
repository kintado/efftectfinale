import { createAction, props } from '@ngrx/store';

export const loadMessage = createAction('[Message] Load Message');
export const loadMessageSuccess = createAction('[Message] Load Message Success', props<{ message: string }>());
export const loadMessageFailure = createAction('[Message] Load Message Failure', props<{ error: string }>());
