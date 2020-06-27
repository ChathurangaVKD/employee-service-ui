import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Office} from "../models/office.model";

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  readonly url = environment.base_url + '/api/office';

  constructor(private http: HttpClient) { }

  get(id: number){
    return this.http.get<Office>(this.url + '/' + id);
  }

  getAll(){
    return this.http.get<Office[]>(this.url + '/' + 'all');
  }

  delete(id: number){
    return this.http.delete<any>(this.url + '/' + id);
  }

  update(id: number, office: Office){
    return this.http.put<Office>(this.url + '/' + id, office);
  }

  create(office: Office){
    return this.http.post<Office>(this.url , office);
  }
}
