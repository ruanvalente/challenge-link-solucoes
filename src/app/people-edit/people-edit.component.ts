import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from './../services/person.service';
import { ToastService } from './../services/toast.service';
import { Person } from './../models/person';

@Component({
  selector: 'app-people-edit',
  templateUrl: './people-edit.component.html',
  styleUrls: ['./people-edit.component.css'],
})
export class PeopleEditComponent implements OnInit {
  people = {} as Person;
  form: FormGroup;
  status: string[] = ['ativo', 'inativo'];
  constructor(
    private activatedRoute: ActivatedRoute,
    private personService: PersonService,
    private router: Router,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.personService
      .retrieveById(this.activatedRoute.snapshot.params.id)
      .subscribe({
        next: (people) => (this.people = people),
        error: (err) => console.log('Error', err),
      });

    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(200),
      ]),
      email: new FormControl('', Validators.required),
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      status: new FormControl(''),
    });
  }

  save(person: Person): void {
    this.personService.save(this.people).subscribe({
      next: (people) => console.log('Salvo com sucesso', people),
      error: (err) => console.log('Error', err),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.save(this.form.value);
    this.router.navigate(['/']);
    this.toast.sucess('Registro atualizado com sucesso')
  }

  changeStatus(e) {
    console.log(e.target.value);
  }
}
