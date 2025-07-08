import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { messageReducer } from './ngrx/message/message.reducer';

import { MessageService } from './ngrx/message/message.service';
import { MessageEffects } from './ngrx/message/message.effects';

import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [    
    provideZonelessChangeDetection(),     
    provideHttpClient(),
    provideStore({ data: messageReducer }),
    provideEffects([MessageEffects]),
    MessageService,
  ]
};
