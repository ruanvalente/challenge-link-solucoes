import { ToastService } from './../services/toast.service';
import { Component, OnInit } from '@angular/core';

import { PersonService } from '../services/person.service';
import { Person } from '../models/person';

@Component({
  selector: 'app-people-home',
  templateUrl: './people-home.component.html',
  styleUrls: ['./people-home.component.css'],
})
export class PeopleHomeComponent implements OnInit {
  filteredPeople: Person[] = [];
  _peoples: Person[] = [];
  _filterBy: string;
  loading = false;

  constructor(
    private personService: PersonService,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.retrieveAll();
      this.loading = false;
    }, 3000);
  }

  retrieveAll(): void {
    this.personService.retrieveAll().subscribe({
      next: (peoples) => {
        this._peoples = peoples;
        this.filteredPeople = this._peoples;
      },
      error: (err) => {
        this.toast.error(err.message);
        console.log('Error', err.message);
      },
    });
  }

  deleteById(peopleId: number): void {
    this.personService.deleteById(peopleId).subscribe({
      next: () => {
        console.log('Deletado com sucesso');
        this.retrieveAll();
        this.toast.sucess('Registro removido com sucesso');
      },
      error: (err) => {
        this.toast.error(err.message);
        console.log('Error', err);
      },
    });
  }

  set filter(value: string) {
    this._filterBy = value;

    this.filteredPeople = this._peoples.filter(
      (people: Person) =>
        people.name
          .toLocaleLowerCase()
          .indexOf(this._filterBy.toLocaleLowerCase()) > -1
    );
  }

  get filter() {
    return this._filterBy;
  }
}
