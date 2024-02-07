import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { MessagesComponent } from './messages/messages.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		MessagesComponent, //
		LoadingComponent,
		SafeUrlPipe,
	],
	imports: [
		CommonModule, //
		MatProgressSpinnerModule,
		MaterialModule,
		HttpClientModule,
		ReactiveFormsModule,
	],
	exports: [
		MessagesComponent, //
		LoadingComponent,
		SafeUrlPipe,
		MaterialModule,
		ReactiveFormsModule,
	],
})
export class SharedModule {}
