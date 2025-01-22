import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  activityForm,
  activityFormResponse,
  allActivity,
} from './model/activityModel';

@Injectable({
  providedIn: 'root',
})
export class ActivityTaskService {
  baseUrl = 'http://localhost:3000/'; //move to env file for separation of concern and easy production and development environment
  constructor(private httpClient: HttpClient) {}

  addActivity(data: activityForm): Observable<activityFormResponse> {
    return this.httpClient.post<activityFormResponse>(
      `${this.baseUrl}addActivity`,
      data
    );
  }

  viewActivity(): Observable<allActivity[]> {
    return this.httpClient.get<allActivity[]>(`${this.baseUrl}viewActivity`);
  }

  deleteActivity(id: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}deleteActivity/${id}`);
  }

  updateActivity(
    data: activityForm,
    id: any
  ): Observable<activityFormResponse> {
    return this.httpClient.put<activityFormResponse>(
      `${this.baseUrl}updateActivity/${id}`,
      data
    );
  }
}
