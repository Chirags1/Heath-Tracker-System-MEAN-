import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivityTaskService } from '../activity-task.service';
import { allActivity } from '../model/activityModel';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-add-activity-form',
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './add-activity-form.component.html',
  styleUrl: './add-activity-form.component.css',
})
export class AddActivityFormComponent {
  activityForm!: FormGroup;
  updateActivity: allActivity | null = null;
  //taskService = inject(ActivityTaskService);
  constructor(
    private taskService: ActivityTaskService,
    private router: Router
  ) {
    this.activityForm = new FormGroup({
      activityName: new FormControl(),
      duration: new FormControl(),
      calories: new FormControl(),
      steps: new FormControl(),
      distance: new FormControl(),
      date: new FormControl(),
    });
    const navigation = this.router.getCurrentNavigation();
    this.updateActivity = navigation?.extras.state?.['updateActivity'] || null;
    console.log(this.updateActivity);
    if (this.updateActivity) {
      this.activityForm.setValue({
        activityName: this.updateActivity.activityName,
        duration: this.updateActivity.duration,
        calories: this.updateActivity.calories,
        steps: this.updateActivity.steps,
        distance: this.updateActivity.distance,
        date: this.updateActivity.date,
      });
    }
  }
  onSubmit() {
    this.taskService.addActivity(this.activityForm.value).subscribe({
      next(value) {
        window.alert(value.message);
      },
    });
    this.activityForm.reset();
  }
  onClear() {
    this.activityForm.reset();
  }

  updateForm() {
    //console.log(this.activityForm.value);
    this.taskService
      .updateActivity(this.activityForm.value, this.updateActivity?._id)
      .subscribe((data) => {
        console.log(data);
        window.alert(data.message);
      });
  }
}
