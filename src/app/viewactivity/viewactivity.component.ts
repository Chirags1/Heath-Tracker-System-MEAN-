import { CommonModule, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { ActivityTaskService } from '../activity-task.service';
import { activityForm, allActivity } from '../model/activityModel';
import { Router } from '@angular/router';
import { timeStamp } from 'console';

@Component({
  selector: 'app-viewactivity',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './viewactivity.component.html',
  styleUrl: './viewactivity.component.css',
})
export class ViewactivityComponent {
  activities: allActivity[] = []; //array of type allActivity
  message = 'Activity Not Added Yet';
  constructor(
    private taskService: ActivityTaskService,
    private router: Router
  ) {
    this.taskService.viewActivity().subscribe((data) => {
      this.activities = data;
    });
  }
  deleteActivity(id: string) {
    this.taskService.deleteActivity(id).subscribe((value) => {
      console.log(value);
      window.alert(value.message);
      this.router.navigate(['addActivity']);
    });
  }

  updateActivity(activities: allActivity) {
    this.router.navigate(['addActivity'], {
      state: { updateActivity: activities },
    });
  }
}
