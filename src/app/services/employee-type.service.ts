import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {EmployeeType} from "../models/employee-type.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeTypeService {

  readonly url = environment.base_url + '/api/employeetype';

  constructor(private http: HttpClient) { }

  get(id: number){
    return this.http.get<EmployeeType>(this.url + '/' + id);
  }

  getAll(){
    return this.http.get<EmployeeType[]>(this.url + '/' + 'all');
  }

  delete(id: number){
    return this.http.delete<any>(this.url + '/' + id);
  }

  update(id: number, employeeType: EmployeeType){
    return this.http.put<EmployeeType>(this.url + '/' + id, employeeType);
  }

  create(employeeType: EmployeeType){
    return this.http.post<EmployeeType>(this.url , employeeType);
  }
}
