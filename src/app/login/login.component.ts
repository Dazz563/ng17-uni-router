import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrl: './login.component.scss',
})
export class LoginComponent {
	showPassword = false;
	loginForm: FormGroup = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [Validators.required, Validators.minLength(6)]),
	});

	constructor(
		private auth: AuthService, //
		private router: Router
	) {}

	// Login form getters
	isInvalid(controlName: string): boolean {
		const control = this.loginForm.get(controlName);
		return !!control?.invalid && control?.touched;
	}

	isValid(controlName: string): boolean {
		const control = this.loginForm.get(controlName);
		return !!control?.valid && control?.touched;
	}

	submit() {
		if (this.loginForm.valid) {
			console.log(this.loginForm.value);
			const val = this.loginForm.value;

			this.auth.login(val.email, val.password).subscribe(
				() => {
					this.router.navigateByUrl('/courses');
				},
				(err) => {
					alert('Login failed!');
				}
			);
		} else {
			this.loginForm.markAllAsTouched();
		}
	}
}
