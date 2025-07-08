// message.effects.ts
import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MessageService } from './message.service';
import { loadMessage, loadMessageFailure, loadMessageSuccess } from './messge.actions'
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MessageEffects {
  private actions$ = inject(Actions);
  private service = inject(MessageService);

  loadMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMessage),
      mergeMap(() =>
                      this.service.getMessage().pipe(
                                                      map(res => { return loadMessageSuccess({ message: res.message })}),        
                                                      catchError(error => of(loadMessageFailure({ error: error.message || 'Errore generico' })))
                                                    )
      )
    )
  );
}
