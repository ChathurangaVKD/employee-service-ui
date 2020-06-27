import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {SalaryScale} from "../models/salary-scale.model";

@Injectable({
  providedIn: 'root'
})
export class SalaryScaleService {

  readonly url = environment.base_url + '/api/salaryscale';

  constructor(private http: HttpClient) { }

  get(id: number){
    return this.http.get<SalaryScale>(this.url + '/' + id);
  }

  getAll(){
    return this.http.get<SalaryScale[]>(this.url + '/' + 'all');
  }

  delete(id: number){
    return this.http.delete<any>(this.url + '/' + id);
  }

  update(id: number, salaryScale: SalaryScale){
    return this.http.put<SalaryScale>(this.url + '/' + id, salaryScale);
  }

  create(salaryScale: SalaryScale){
    return this.http.post<SalaryScale>(this.url , salaryScale);
  }
}
