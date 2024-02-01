import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../model/course';

@Component({
	selector: 'app-course',
	templateUrl: './course.component.html',
	styleUrl: './course.component.scss',
})
export class CourseComponent {
	course: Course;

	couponCode: string;

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.course = this.route.snapshot.data['course'];

		console.log(this.course);

		this.couponCode = this.route.snapshot.queryParamMap.get('couponCode');
	}

	confirmExit() {
		return confirm(`Are you sure you want to exit ${this.course.description}?`);
	}
}
