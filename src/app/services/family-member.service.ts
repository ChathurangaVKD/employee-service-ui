import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {FamilyMember} from "../models/family-member.model";

@Injectable({
  providedIn: 'root'
})
export class FamilyMemberService {

  readonly url = environment.base_url + '/api/familymember';

  constructor(private http: HttpClient) { }

  get(id: number){
    return this.http.get<FamilyMember>(this.url + '/' + id);
  }

  getAll(){
    return this.http.get<FamilyMember[]>(this.url + '/' + 'all');
  }

  delete(id: number){
    return this.http.delete<any>(this.url + '/' + id);
  }

  update(id: number, familyMember: FamilyMember){
    return this.http.put<FamilyMember>(this.url + '/' + id, familyMember);
  }

  create(familyMember: FamilyMember){
    return this.http.post<FamilyMember>(this.url , familyMember);
  }
}
