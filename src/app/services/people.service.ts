import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EnvironmentService } from './environment.service';
import { People } from '../models/people';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private environmentService: EnvironmentService,
    private httpClient: HttpClient
  ) { }
  
  getPeople(): Promise<People> {
    const url = `${this.environmentService.getApiUrl()}people`;
    return this.httpClient.get<People>(url).toPromise();
  }

  getPerson(id: number): Promise<Person> {
    const url = `${this.environmentService.getApiUrl()}people/${id}`;
    return this.httpClient.get<Person>(url).toPromise();
  }
}
