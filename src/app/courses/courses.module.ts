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

@NgModule({
	declarations: [
		CourseComponent, //
		CourseDialogComponent,
		CourseCardListComponent,
		HomeComponent,
		LessonComponent,
		LessonListComponent,
	],
	imports: [CommonModule, CoursesRoutingModule],
	providers: [CoursesService],
})
export class CoursesModule {}
