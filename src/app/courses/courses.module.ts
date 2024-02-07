import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseComponent } from './course/course.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { CourseCardListComponent } from './course-card-list/course-card-list.component';
import { HomeComponent } from './home/home.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { CoursesService } from './services/courses.service';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CreateCourseStep1Component } from './create-course/create-course-step-1/create-course-step-1.component';
import { CreateCourseStep2Component } from './create-course/create-course-step-2/create-course-step-2.component';
import { CreateCourseStep3Component } from './create-course/create-course-step-3/create-course-step-3.component';

@NgModule({
	declarations: [
		CourseComponent, //
		CourseDialogComponent,
		CourseCardListComponent,
		HomeComponent,
		LessonComponent,
		LessonListComponent,
		PageNotFoundComponent,
		LessonDetailComponent,
		CreateCourseComponent,
		CreateCourseStep1Component,
		CreateCourseStep2Component,
		CreateCourseStep3Component,
	],
	imports: [
		CommonModule, //
		CoursesRoutingModule,
		SharedModule,
	],
	providers: [CoursesService],
})
export class CoursesModule {}
