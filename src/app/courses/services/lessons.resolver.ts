import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, ResolveFn } from '@angular/router';
import { CoursesService } from './courses.service';
import { LessonSummary } from '../model/lesson-summary';

export const LessonsResolver: ResolveFn<LessonSummary[]> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
	return inject(CoursesService).loadAllCourseLessonsSummary(route.paramMap.get('courseUrl')!);
};
