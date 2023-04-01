import { Injectable } from '@angular/core';
import { CompanyDTO } from 'src/app/DTOs/CompanyDTO';
import { UserDTO } from 'src/app/DTOs/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  async getMockCompanies() {
    let companies = [];
    let company1 = new CompanyDTO();
    company1.name = "Cercopitechs";
    company1.score = 2000;
    companies.push(company1);

    let company2 = new CompanyDTO();
    company2.name = "Microsoft";
    company2.score = 10;
    companies.push(company2);

    let company3 = new CompanyDTO();
    company3.name = "Amazon";
    company3.score = 1500;
    companies.push(company3);

    return companies;
  }

  async getMockEmployees() {
    let employees = [];
    let emp1 = new UserDTO();
    emp1.name = "Mihaita Boss";
    emp1.score = 1000;
    employees.push(emp1);

    let emp2 = new UserDTO();
    emp2.name = "qwe";
    emp2.score = 2;
    employees.push(emp2);

    let emp3 = new UserDTO();
    emp3.name = "asd";
    emp3.score = 1500;
    employees.push(emp3);

    let emp4 = new UserDTO();
    emp4.name = "zxc";
    emp4.score = 1500;
    employees.push(emp4);

    return employees;
  }
}
