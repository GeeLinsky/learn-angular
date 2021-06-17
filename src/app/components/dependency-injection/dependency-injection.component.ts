import { Component } from '@angular/core';
import { Person } from 'src/app/models/person';

import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss']
})
export class DependencyInjectionComponent {

  isLoading: boolean = false;
  inputId!: number | null;
  person!: Person | null;

  constructor(
    private peopleService: PeopleService
  ) { }

  async fetchPerson() {
    if (!this.inputId || this.isLoading === true) {
      return;
    }

    try {
      this.isLoading = true;
      this.person = await this.peopleService.getPerson(this.inputId);
    } finally {
      this.isLoading = false;
    }
  }

  clear(): void {
    this.inputId = null;
    this.person = null;
  }
}
