import {Base} from "./base.model";
import {EmployeeType} from "./employee-type.model";
import {Address} from "./address.model";
import {Department} from "./department.model";
import {Office} from "./office.model";
import {SalaryScale} from "./salary-scale.model";
import {FamilyMember} from "./family-member.model";

export class Employee implements Base{
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  age: number;
  mobile: number;
  email: string;

  type: EmployeeType;
  supervisor: Employee;
  address: Address;
  department: Department;
  office: Office;
  salaryScale: SalaryScale;
  familyMembers: FamilyMember[];
}
