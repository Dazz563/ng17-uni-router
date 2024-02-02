import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { CoursesService } from './courses.service';
import { LessonDetail } from '../model/lesson-detail';

export const LessonDetailResolver: ResolveFn<LessonDetail> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
	const courseUrl = route.parent.paramMap.get('courseUrl'),
		lessonSeqNo = route.paramMap.get('lessonSeqNo');

	return inject(CoursesService).loadLessonDetail(courseUrl, lessonSeqNo);
};
