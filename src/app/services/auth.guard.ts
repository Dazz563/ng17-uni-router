import { inject } from '@angular/core';
import { CanActivateFn, CanActivateChildFn, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
	return checkIfAuthenticated();
};

export const authGuardChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
	return checkIfAuthenticated();
};

const checkIfAuthenticated = () => {
	const router = inject(Router);
	return inject(AuthService).isLoggedIn$.pipe(map((loggedIn) => (loggedIn ? true : router.createUrlTree(['/login']))));
};
