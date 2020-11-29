import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonService } from './../services/person.service';
import { ToastService } from './../services/toast.service';
import { Person } from './../models/person';

@Component({
  selector: 'app-people-registration',
  templateUrl: './people-registration.component.html',
  styleUrls: ['./people-registration.component.css'],
})
export class PeopleRegistrationComponent implements OnInit {
  form: FormGroup;
  status: string[] = ['ativo', 'inativo'];

  constructor(
    private personService: PersonService,
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(200),
      ]),
      email: new FormControl('', Validators.required),
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      age: new FormControl('', [
        Validators.required,
        Validators.min(0),
        Validators.max(200),
      ]),
      status: new FormControl('ativo'),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.save(this.form.value);
    this.router.navigate(['/']);
    this.toast.sucess('Registro salvo com sucesso')
  }

  save(person: Person): void {
    this.personService.save(person).subscribe({
      next: (people) => console.log('Salvo com sucesso', people),
      error: (err) => console.log('Error', err),
    });
  }

  changeStatus(e) {
    console.log(e.target.value);
  }
}
