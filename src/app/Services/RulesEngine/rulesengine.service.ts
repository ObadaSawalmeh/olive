import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RulesengineService {
  private dataUrl = '/assets/data/rules.json'; // Correct path

  constructor(private http: HttpClient) {}

  getFakeData(): Observable<any[]> {
    return this.http.get<any[]>( '/assets/data/rules.json');
  }
}
