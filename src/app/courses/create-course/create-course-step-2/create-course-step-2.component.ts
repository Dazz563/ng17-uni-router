import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-create-course-step-2',
	templateUrl: './create-course-step-2.component.html',
	styleUrl: './create-course-step-2.component.scss',
})
export class CreateCourseStep2Component {
	form: FormGroup = new FormGroup({
		courseType: new FormControl('premium'),
		price: new FormControl(null, [
			Validators.required,
			Validators.min(1),
			Validators.max(99999),
			Validators.pattern('^[0-9]+'), // only numbers
		]),
	});

	isInvalid(controlName: string): boolean {
		const control = this.form.get(controlName);
		return !!control?.invalid && control?.touched;
	}

	isValid(controlName: string): boolean {
		const control = this.form.get(controlName);
		return !!control?.valid && control?.touched;
	}
}
