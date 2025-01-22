import { RenderMode, ServerRoute } from '@angular/ssr';
import { AddActivityFormComponent } from './add-activity-form/add-activity-form.component';

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
