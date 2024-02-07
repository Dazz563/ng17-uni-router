import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { courseTitleValidator } from '../../../validators/course-title-validator';
import { CoursesService } from '../../services/courses.service';
import { Observable } from 'rxjs';

interface CourseCategory {
	code: string;
	description: string;
}

@Component({
	selector: 'app-create-course-step-1',
	templateUrl: './create-course-step-1.component.html',
	styleUrl: './create-course-step-1.component.scss',
})
export class CreateCourseStep1Component implements OnInit {
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
		releaseDateAt: new FormControl('', Validators.required),
		downloadsAllowed: new FormControl(false, Validators.requiredTrue),
		longDescription: new FormControl('', [Validators.required, Validators.minLength(3)]),
	});

	courseCategories$: Observable<CourseCategory[]>;

	ngOnInit(): void {}

	isInvalid(controlName: string): boolean {
		const control = this.form.get(controlName);
		return !!control?.invalid && control?.touched;
	}

	isValid(controlName: string): boolean {
		const control = this.form.get(controlName);
		return !!control?.valid && control?.touched;
	}
}
