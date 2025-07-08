import { createReducer, on } from '@ngrx/store';
import * as MessageActions from './messge.actions';

export interface MessageState {
  message: string;
  error: string | null;
}

export const initialState: MessageState = {
  message: 'Nessun messaggio ancora',
  error: null,
};

export const messageReducer = createReducer(
  initialState,
  on(MessageActions.loadMessageSuccess, (state, { message }) => ({ ...state, message:message, error: null })),
  on(MessageActions.loadMessageFailure, (state, { error }) => ({ ...state, error }))
);
