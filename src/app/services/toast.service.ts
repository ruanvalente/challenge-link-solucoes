import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastr: ToastrService) {}

  sucess(message: string) {
    this.toastr.toastrConfig.progressBar = true;
    this.toastr.success(message);
  }

  error(message: string) {
    this.toastr.toastrConfig.progressBar = true
    this.toastr.error(message)
  }
}
