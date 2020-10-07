export class Employee {
  'id': string;
  'active': boolean;
  'name': string;
  'dateOfBirth': string;
}

export class ViewEmployee {
  'id': string;
  'active': boolean;
  'name': string;
  'dateOfBirth': string;
}

export class EditEmployee {
  'active': boolean;
  'name': string;
  'dateOfBirth'?: string;
}