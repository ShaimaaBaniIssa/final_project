import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const toastr = inject(ToastrService);
  const router = inject(Router); 

  if (token) {
    if (state.url.includes('admin')) {
      let user: any = localStorage.getItem('user');
      user = JSON.parse(user);
      if (user.roleid === "21") {
        return true;
      } else {
        toastr.warning("This page is for admin");
        router.navigate(['auth/login']);
        return false;
      }
    } else {
      return false; 
    }
  } else {
    toastr.warning("This page is for admin, please register now.");
    router.navigate(['auth/register']);
    return false;
  }
};
