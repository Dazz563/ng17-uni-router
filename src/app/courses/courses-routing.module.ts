import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CourseResolver } from './services/course.resolver';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { LessonDetailResolver } from './services/lesson-detail.resolver';
import { LessonsResolver } from './services/lessons.resolver';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: ':courseUrl',
		component: CourseComponent,
		children: [
			{
				path: '',
				component: LessonListComponent,
				resolve: {
					lessons: LessonsResolver,
				},
			},
			{
				path: 'lessons/:lessonSeqNo',
				component: LessonDetailComponent,
				resolve: {
					lessonDetail: LessonDetailResolver,
				},
			},
		],
		resolve: {
			course: CourseResolver,
		},
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CoursesRoutingModule {}
