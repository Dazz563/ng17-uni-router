import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonSummary } from '../model/lesson-summary';

@Component({
	selector: 'app-lesson-list',
	templateUrl: './lesson-list.component.html',
	styleUrl: './lesson-list.component.scss',
})
export class LessonListComponent implements OnInit {
	lessons: LessonSummary[] = [];

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.lessons = this.route.snapshot.data['lessons'];
	}
}
