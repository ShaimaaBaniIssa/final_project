import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const reservationGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const toastr = inject(ToastrService);
  const router = inject(Router);

  // if (state.url.includes('reservation')) {
  if (token == null) {
    toastr.warning("Login/Register first before reserve a ticket");
    router.navigate(['auth/register']);
    return false;

  }
  // }

  return true;

};
