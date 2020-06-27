import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Employee} from "../models/employee.model";
import {FamilyMember} from "../models/family-member.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly url = environment.base_url + '/api/employee';

  constructor(private http: HttpClient) {
  }

  get(id: number) {
    return this.http.get<Employee>(this.url + '/' + id);
  }

  getAll() {
    return this.http.get<Employee[]>(this.url + '/' + 'all');
  }

  delete(id: number) {
    return this.http.delete<any>(this.url + '/' + id);
  }

  update(id: number, employee: Employee) {
    return this.http.put<Employee>(this.url + '/' + id, employee);
  }

  create(employee: Employee) {
    return this.http.post<Employee>(this.url, employee);
  }

  addFamilyMember(id: number, familyMember: FamilyMember) {
    return this.http.post<Employee>(this.url + '/' + id + '/familymember', familyMember);
  }

  deleteFamilyMember(id: number, familyMemberId: number) {
    return this.http.delete<Employee>(this.url + '/' + id + '/familymember' + '/' + familyMemberId);
  }

}
