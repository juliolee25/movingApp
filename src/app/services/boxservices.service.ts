import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Box } from '../models/box.models';

@Injectable({
  providedIn: 'root'
})
export class BoxservicesService {



  private endPoint = '';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  getBox(id: number): Observable<Box> {
    return this.http.get<Box>(`${this.endPoint}/${id}`)
  }

  createBox(box: Box): Observable<Box> {
    return this.http.post<Box>(`${this.endPoint}`, JSON.stringify(box), { headers: this.httpHeaders });
  }

  updateBox(box: Box): Observable<Box> {
    return this.http.put<Box>(`${this.endPoint}`, JSON.stringify(box), { headers: this.httpHeaders })
  }

  deleteBox(boxID: number): Observable<Box> {
    return this.http.delete<Box>(`${this.endPoint}/${boxID}`, { headers: this.httpHeaders })
  }
}
