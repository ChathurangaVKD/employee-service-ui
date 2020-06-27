import { Component, OnInit } from '@angular/core';
import {Department} from "../../models/department.model";
import {EmployeeType} from "../../models/employee-type.model";
import {DepartmentService} from "../../services/department.service";
import {ActivatedRoute, Router} from "@angular/router";
import {EmployeeTypeService} from "../../services/employee-type.service";

@Component({
  selector: 'app-employee-type-component',
  templateUrl: './employee-type.component.html',
  styleUrls: ['./employee-type.component.scss']
})
export class EmployeeTypeComponent implements OnInit {

  selectedEmployeeType: EmployeeType;

  constructor(private employeeTypeService: EmployeeTypeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.selectedEmployeeType = new Department();
    this.loadEmployeeType();
  }

  loadEmployeeType() {
    if (this.route.snapshot.paramMap.has('id')) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.employeeTypeService.get(id).subscribe(res => {
        this.selectedEmployeeType = res;
      });
    }
  }

  save() {
    if (this.route.snapshot.paramMap.has('id')) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.employeeTypeService.update(id, this.selectedEmployeeType).subscribe(res => {
        console.log(res);
        alert('EmployeeType Update Success');
      });
    } else {
      this.employeeTypeService.create(this.selectedEmployeeType).subscribe(res => {
        console.log(res);
        alert('EmployeeType Create Success');
      });
    }
  }

  cancel() {
    this.router.navigate(['employee-type-list']);
  }

}
