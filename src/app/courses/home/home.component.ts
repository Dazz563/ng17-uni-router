import { Component } from '@angular/core';
import { Course, sortCoursesBySeqNo } from '../model/course';
import { Observable, map } from 'rxjs';
import { CoursesService } from '../services/courses.service';
import { LoadingService } from '../../shared/loading/loading.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
})
export class HomeComponent {
	beginnerCourses$: Observable<Course[]>;

	advancedCourses$: Observable<Course[]>;

	constructor(
		private courses: CoursesService,
		private loading: LoadingService
	) {}

	ngOnInit() {
		this.reloadCourses();
	}

	reloadCourses() {
		const courses$ = this.courses.loadAllCourses();

		this.beginnerCourses$ = this.filterByCategory(courses$, 'BEGINNER');

		this.advancedCourses$ = this.filterByCategory(courses$, 'ADVANCED');
	}

	filterByCategory(courses$: Observable<Course[]>, category: string) {
		return this.loading.showLoaderUntilCompleted(courses$).pipe(map((courses) => courses.filter((course) => course.category == category).sort(sortCoursesBySeqNo)));
	}
}
