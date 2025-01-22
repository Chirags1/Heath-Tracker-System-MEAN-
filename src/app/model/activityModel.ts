export interface activityForm {
  activityName: string;
  duration: number;
  calories: number;
  steps: number;
  distance: number;
  date: Date;
}

export interface activityFormResponse {
  message: string;
}

export interface allActivity {
  activityName: string;
  _id: string;
  calories: number;
  date: string;
  distance: number;
  duration: number;
  steps: number;
}
