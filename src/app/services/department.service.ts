import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Department} from "../models/department.model";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  readonly url = environment.base_url + '/api/department';

  constructor(private http: HttpClient) { }

  get(id: number){
    return this.http.get<Department>(this.url + '/' + id);
  }

  getAll(){
    return this.http.get<Department[]>(this.url + '/' + 'all');
  }

  delete(id: number){
    return this.http.delete<any>(this.url + '/' + id);
  }

  update(id: number, department: Department){
    return this.http.put<Department>(this.url + '/' + id, department);
  }

  create(department: Department){
    return this.http.post<Department>(this.url , department);
  }
}
