import {Base} from "./base.model";
import {Address} from "./address.model";

export class Office implements Base{
  id: number;
  address: Address;
  name: string;
  code: string;
}
