import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './courses/page-not-found/page-not-found.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'courses',
		pathMatch: 'full',
	},
	{
		path: 'courses',
		loadChildren: () => import('./courses/courses.module').then((m) => m.CoursesModule),
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'about',
		component: AboutComponent,
	},
	{
		path: '**',
		component: PageNotFoundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
