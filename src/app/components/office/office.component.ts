import { Component, OnInit } from '@angular/core';
import {Office} from "../../models/office.model";
import {DepartmentService} from "../../services/department.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OfficeService} from "../../services/office.service";
import {Department} from "../../models/department.model";
import {Address} from "../../models/address.model";

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent implements OnInit {

  selectedOffice: Office;

  constructor(private officeService: OfficeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.selectedOffice = new Office();
    this.selectedOffice.address = new Address();
    this.loadDepartment();
  }

  loadDepartment() {
    if (this.route.snapshot.paramMap.has('id')) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.officeService.get(id).subscribe(res => {
        this.selectedOffice = res;
      });
    }
  }

  save() {
    if (this.route.snapshot.paramMap.has('id')) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.officeService.update(id, this.selectedOffice).subscribe(res => {
        console.log(res);
        alert('Office Update Success');
      });
    } else {
      this.officeService.create(this.selectedOffice).subscribe(res => {
        console.log(res);
        alert('Office Create Success');
      });
    }
  }

  cancel() {
    this.router.navigate(['office-list']);
  }

}
