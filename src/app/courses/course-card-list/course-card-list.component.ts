import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { filter, tap } from 'rxjs';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { Course } from '../model/course';

@Component({
	selector: 'app-course-card-list',
	templateUrl: './course-card-list.component.html',
	styleUrl: './course-card-list.component.scss',
})
export class CourseCardListComponent {
	@Input()
	courses: Course[] = [];

	@Output()
	private coursesChanged = new EventEmitter();

	constructor(private dialog: MatDialog) {}

	ngOnInit() {}

	editCourse(course: Course) {
		const dialogConfig = new MatDialogConfig();

		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		dialogConfig.width = '400px';

		dialogConfig.data = course;

		const dialogRef = this.dialog.open(CourseDialogComponent, dialogConfig);

		dialogRef
			.afterClosed()
			.pipe(
				filter((val) => !!val),
				tap(() => this.coursesChanged.emit())
			)
			.subscribe();
	}
}
