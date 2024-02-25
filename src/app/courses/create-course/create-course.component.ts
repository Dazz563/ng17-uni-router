import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-create-course',
	templateUrl: './create-course.component.html',
	styleUrl: './create-course.component.scss',
	providers: [
		{
			provide: STEPPER_GLOBAL_OPTIONS,
			useValue: { showError: true },
		},
	],
})
export class CreateCourseComponent {
	checkStep1Validity(form: FormGroup): void {
		if (form.invalid) {
			form.markAllAsTouched();
		}
	}
}
