import {Base} from "./base.model";

export class Address implements Base{
  id: number;
  no: string;
  lane1: string;
  lane2: string;
  city: string;
  country: string;
  postalCode: number;
}
