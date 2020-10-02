import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Equipment } from '../models/Equipment';

@Injectable({
  providedIn: 'root'
})
export class EquipmentService {
  equipmentsUrl: string = `${environment.apiUrl}/equipment`

  constructor(private http:HttpClient) { }

  getEquipments():Observable<Equipment[]> {
    return this.http.get<Equipment[]>(this.equipmentsUrl);
  }
}
