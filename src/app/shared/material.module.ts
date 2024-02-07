import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
	imports: [
		MatButtonModule, //
		MatIconModule,
		MatCardModule,
		MatTabsModule,
		MatListModule,
		MatInputModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatDialogModule,
		MatSelectModule,
		MatDatepickerModule,
		MatStepperModule,
		MatFormFieldModule,
		MatCheckboxModule,
	],
	exports: [
		MatButtonModule, //
		MatIconModule,
		MatCardModule,
		MatTabsModule,
		MatListModule,
		MatInputModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatDialogModule,
		MatSelectModule,
		MatDatepickerModule,
		MatStepperModule,
		MatFormFieldModule,
		MatCheckboxModule,
	],
	providers: [provideNativeDateAdapter()],
})
export class MaterialModule {}
