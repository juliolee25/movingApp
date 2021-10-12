import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Helper } from '../models/helper-models';

@Injectable({
  providedIn: 'root'
})
export class HelperserviceService {

  private endPoint = '';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getBox(id: number): Observable<Helper> {
    return this.http.get<Helper>(`${this.endPoint}/${id}`)
  }

  createBox(helper: Helper): Observable<Helper> {
    return this.http.post<Helper>(`${this.endPoint}`, JSON.stringify(helper), { headers: this.httpHeaders });
  }

  updateBox(helper: Helper): Observable<Helper> {
    return this.http.put<Helper>(`${this.endPoint}`, JSON.stringify(helper), { headers: this.httpHeaders })
  }

  deleteBox(helperID: number): Observable<Helper> {
    return this.http.delete<Helper>(`${this.endPoint}/${helperID}`, { headers: this.httpHeaders })
  }
}
