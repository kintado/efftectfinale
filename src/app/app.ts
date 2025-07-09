import { Component, inject, signal } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MessageState } from './ngrx/message/message.reducer';
import { loadMessage } from './ngrx/message/messge.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Messaggio dal server</h1>
    <p>{{ message() }}</p>
    <button (click)="nuovoMessaggio()">Carica Nuovo Messaggio</button>
    <button (click)="toggleMessage()">
      {{ intervalId ? 'Disabilita Ricarica' : 'Abilita Ricarica' }}
    </button> 
  `,
})
export class App {
  private store = inject(Store<{ data: MessageState }>);
  message = signal('Nessun messaggio ancora');
  intervalId: any = null;

  constructor() {
    

    // Subscribe singolo
    this.store.pipe(select((state) => state.data.message)).subscribe((msg) => {
      this.message.set(msg);
    });
  // this.store.dispatch(loadMessage());
  }

  nuovoMessaggio() {
    this.store.dispatch(loadMessage());
    console.log('Nuovo messaggio caricato');
  }

  toggleMessage() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      console.log('Ricarica messaggio disabilitata');
    } else {
      this.intervalId = setInterval(() => {
        this.store.dispatch(loadMessage());
      }, 1000);
      console.log('Ricarica messaggio abilitata');
    }
  }
}
