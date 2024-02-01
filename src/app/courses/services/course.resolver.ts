import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, ResolveFn } from '@angular/router';
import { Course } from '../model/course';
import { CoursesService } from './courses.service';

export const CourseResolver: ResolveFn<Course> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
	return inject(CoursesService).loadCourseByUrl(route.paramMap.get('courseUrl')!);
};
