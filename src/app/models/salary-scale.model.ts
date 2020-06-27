import {Base} from "./base.model";

export class SalaryScale implements Base{
  id: number;
  code: string;
  name: string;
  amount: number;
}
