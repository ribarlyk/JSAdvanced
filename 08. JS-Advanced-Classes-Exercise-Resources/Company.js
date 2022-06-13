class Company {
  constructor() {
    this.departments = {};
  }
  addEmployee(name, salary, position, department) {
    [...arguments].forEach((element) => {
      if(element  == '' || element == null || element == undefined){
        throw new Error('Invalid input!')
      }else if(salary < 0){
        throw new Error('Invalid input!')

      }else{
        this.departments[department]={name,salary,position}
        return `New employee is hired. Name: ${name}. Position: ${position}`
      }
    });
  }
  bestDepartment(){
    j
    return this.departments.Construction.salary
  }
  
}
let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
