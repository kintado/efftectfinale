import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MessageService {
  private http = inject(HttpClient);

  getMessage(): Observable<{ message: string }> {
    return this.http.get<{ message: string }>('http://localhost:3000/api/message');
  }
}
