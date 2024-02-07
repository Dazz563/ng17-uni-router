import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { courseTitleValidator } from '../../../validators/course-title-validator';
import { CoursesService } from '../../services/courses.service';

@Component({
	selector: 'app-create-course-step-1',
	templateUrl: './create-course-step-1.component.html',
	styleUrl: './create-course-step-1.component.scss',
})
export class CreateCourseStep1Component {
	constructor(private courses: CoursesService) {}

	form: FormGroup = new FormGroup({
		title: new FormControl('', {
			validators: [
				Validators.required, //
				Validators.minLength(4),
				Validators.maxLength(60),
			],
			asyncValidators: [courseTitleValidator(this.courses)],
			updateOn: 'blur',
		}),
	});

	isInvalid(controlName: string): boolean {
		const control = this.form.get(controlName);
		return !!control?.invalid && control?.touched;
	}

	isValid(controlName: string): boolean {
		const control = this.form.get(controlName);
		return !!control?.valid && control?.touched;
	}

	get courseTitle() {
		return this.form.controls['title'];
	}
}
