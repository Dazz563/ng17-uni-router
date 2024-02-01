import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

	// constructor(private fb: FormBuilder) {}

	// form = this.fb.nonNullable.group({
	//     email: ['', [ Validators.email]],
	//     password: ['', [ Validators.minLength(6)]],
	// });

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
		} else {
			this.loginForm.markAllAsTouched();
		}
	}
}
