import { Component, OnInit } from '@angular/core';
import {Department} from "../../models/department.model";
import {DepartmentService} from "../../services/department.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  selectedDepartment: Department;

  constructor(private departmentService: DepartmentService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.selectedDepartment = new Department();
    this.loadDepartment();
  }

  loadDepartment() {
    if (this.route.snapshot.paramMap.has('id')) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.departmentService.get(id).subscribe(res => {
        this.selectedDepartment = res;
      });
    }
  }

  save() {
    if (this.route.snapshot.paramMap.has('id')) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.departmentService.update(id, this.selectedDepartment).subscribe(res => {
        console.log(res);
        alert('Department Update Success');
        this.router.navigate(['department/' + res.id]);
      });
    } else {
      this.departmentService.create(this.selectedDepartment).subscribe(res => {
        console.log(res);
        alert('Department Create Success');
        this.router.navigate(['department/' + res.id]);
      });
    }
  }

  cancel() {
    this.router.navigate(['department-list']);
  }
}
