import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Van } from '../models/van.models';

@Injectable({
  providedIn: 'root'
})
export class VanserviceService {

  private endPoint = '';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getBox(id: number): Observable<Van> {
    return this.http.get<Van>(`${this.endPoint}/${id}`)
  }

  createBox(van: Van): Observable<Van> {
    return this.http.post<Van>(`${this.endPoint}`, JSON.stringify(van), { headers: this.httpHeaders });
  }

  updateBox(van: Van): Observable<Van> {
    return this.http.put<Van>(`${this.endPoint}`, JSON.stringify(van), { headers: this.httpHeaders })
  }

  deleteBox(vanID: number): Observable<Van> {
    return this.http.delete<Van>(`${this.endPoint}/${vanID}`, { headers: this.httpHeaders })
  }
}
