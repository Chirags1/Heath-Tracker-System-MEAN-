import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { AddActivityFormComponent } from './app/add-activity-form/add-activity-form.component';
import { ViewactivityComponent } from './app/viewactivity/viewactivity.component';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: '', component: AddActivityFormComponent },

  { path: 'addActivity', component: AddActivityFormComponent },
  { path: 'viewActivity', component: ViewactivityComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()],
}).catch((err) => console.error(err));
