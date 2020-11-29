import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleHomeComponent } from './people-home/people-home.component';
import { PeopleEditComponent } from './people-edit/people-edit.component';
import { PeopleRegistrationComponent } from './people-registration/people-registration.component';

const routes: Routes = [
  {
    path: '',
    component: PeopleHomeComponent,
  },
  {
    path: 'new',
    component: PeopleRegistrationComponent,
  },
  {
    path: 'edit/:id',
    component: PeopleEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
