import {Component, OnInit} from '@angular/core';
import {FamilyMember} from "../../models/family-member.model";
import {Department} from "../../models/department.model";
import {DepartmentService} from "../../services/department.service";
import {Office} from "../../models/office.model";
import {Employee} from "../../models/employee.model";
import {SalaryScale} from "../../models/salary-scale.model";
import {OfficeService} from "../../services/office.service";
import {EmployeeService} from "../../services/employee.service";
import {SalaryScaleService} from "../../services/salary-scale.service";
import {FamilyMemberService} from "../../services/family-member.service";
import {Address} from "../../models/address.model";
import {EmployeeType} from "../../models/employee-type.model";
import {EmployeeTypeService} from "../../services/employee-type.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  selectedEmployee: Employee;

  newFamilyMember: FamilyMember;

  familyMembers: FamilyMember[];
  columnsToDisplay: string[] = ['name', 'age', 'relationShip', 'delete'];

  departments: Department[];
  selectedDepartment: Department;

  offices: Office[];
  selectedOffice: Office;

  supervisors: Employee[];
  selectedSupervisor: Employee;

  salaryScales: SalaryScale[];
  selectedSalaryScale: SalaryScale;

  employeeTypes: EmployeeType[];

  constructor(private departmentService: DepartmentService,
              private officeService: OfficeService,
              private employeeService: EmployeeService,
              private salaryScaleService: SalaryScaleService,
              private familyMemberService: FamilyMemberService,
              private employeeTypeService: EmployeeTypeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.selectedEmployee = new Employee();
    this.selectedEmployee.address = new Address();
    this.selectedEmployee.familyMembers = [];
    this.newFamilyMember = new FamilyMember();

    this.familyMembers = [];
    this.loadDepartments();
    this.loadEmployees();
    this.loadOffices();
    this.loadSalaryScales();
    this.loadEmployeeTypes();
    this.loadEmployee();
  }

  loadEmployee() {
    if (this.route.snapshot.paramMap.has('id')) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.employeeService.get(id).subscribe(res => {
        this.selectedEmployee = res;
      });
    }
  }

  loadDepartments() {
    this.departmentService.getAll().subscribe(res => {
        this.departments = res;
      },
      error => {
        this.departments = [];
      })
  }

  loadOffices() {
    this.officeService.getAll().subscribe(res => {
        this.offices = res;
      },
      error => {
        this.offices = [];
      })
  }

  loadEmployees() {
    this.employeeService.getAll().subscribe(res => {
        this.supervisors = res;
      },
      error => {
        this.supervisors = [];
      })
  }

  loadSalaryScales() {
    this.salaryScaleService.getAll().subscribe(res => {
        this.salaryScales = res;
      },
      error => {
        this.salaryScales = [];
      })
  }

  loadEmployeeTypes() {
    this.employeeTypeService.getAll().subscribe(res => {
        this.employeeTypes = res;
      },
      error => {
        this.employeeTypes = [];
      });
  }


  save() {
    if (this.route.snapshot.paramMap.has('id')) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.employeeService.update(id, this.selectedEmployee).subscribe(res => {
        console.log(res);
        alert('Employee Update Success');
      });
    } else {
      this.employeeService.create(this.selectedEmployee).subscribe(res => {
        console.log(res);
        alert('Employee Create Success');
      });
    }
  }

  addFamilyMember() {

    if (this.route.snapshot.paramMap.has('id')) {
      const id = +this.route.snapshot.paramMap.get('id');

      this.employeeService.addFamilyMember(id, this.newFamilyMember).subscribe(res => {
        this.ngOnInit();
      });
    } else {
      this.selectedEmployee.familyMembers.push(JSON.parse(JSON.stringify(this.newFamilyMember)));
      this.newFamilyMember = new FamilyMember();
    }
  }

  deleteMember(familyMemberId: number) {
    if (this.route.snapshot.paramMap.has('id')) {
      const id = +this.route.snapshot.paramMap.get('id');

      this.employeeService.deleteFamilyMember(id, familyMemberId).subscribe(res => {
        this.ngOnInit();
      });
    } else {
      let index = -1;
      for (let a = 0; a < this.selectedEmployee.familyMembers.length; a++) {
        if (this.selectedEmployee.familyMembers[a].id == index) {
          index = a;
        }
      }
      if (index > -1) {
        this.selectedEmployee.familyMembers.slice(index, 1);
      }
      this.newFamilyMember = new FamilyMember();
    }
  }

  cancel() {
    this.router.navigate(['employee-list']);
  }
}
