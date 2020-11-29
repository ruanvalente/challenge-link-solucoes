import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Person } from '../models/person';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  url = 'http://localhost:3000/person'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) {}

  // Headers
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  // };

  retrieveAll(): Observable<Person[]> {
    return this.httpClient.get<Person[]>(this.url);
  }

  retrieveById(id: string): Observable<Person> {
    return this.httpClient.get<Person>(`${this.url}/${id}`);
  }

  save(person: Person): Observable<Person> {
    if(person.id) {
      return this.httpClient.put<Person>(`${this.url}/${person.id}`, person);
    } else {
      return this.httpClient.post<Person>(`${this.url}`, person);
    }
  }

  deleteById(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}/${id}`);
  }
}
