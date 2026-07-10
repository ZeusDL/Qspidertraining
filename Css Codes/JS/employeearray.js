function filterEmployees(employees, criteria = {}) {
  if (!Array.isArray(employees)) {
    return [];
  }

  return employees.filter(employee => {
    if (criteria.ageAbove !== undefined && employee.age <= criteria.ageAbove) {
      return false;
    }

    if (criteria.gender !== undefined && employee.gender !== criteria.gender) {
      return false;
    }

    if (criteria.designation !== undefined && employee.designation !== criteria.designation) {
      return false;
    }

    return true;
  });
}

const employees = [
  { id: 1, name: "Sumanth", designation: "Senior Developer", department: "IT", salary: 75000, email: "sumanth@company.com", joinDate: "2020-05-15", age: 42, gender: "male" },
  { id: 2, name: "Jane Smith", designation: "Product Manager", department: "Product", salary: 70000, email: "jane.smith@company.com", joinDate: "2019-08-22", age: 35, gender: "female" },
  { id: 3, name: "Mike Johnson", designation: "Junior Developer", department: "IT", salary: 50000, email: "mike.johnson@company.com", joinDate: "2021-03-10", age: 28, gender: "male" },
  { id: 4, name: "Sarah Williams", designation: "HR Manager", department: "Human Resources", salary: 65000, email: "sarah.williams@company.com", joinDate: "2018-11-05", age: 45, gender: "female" },
  { id: 5, name: "David Brown", designation: "QA Engineer", department: "Quality Assurance", salary: 55000, email: "david.brown@company.com", joinDate: "2020-09-18", age: 31, gender: "male" }
];

const over40 = filterEmployees(employees, { ageAbove: 40 });
console.log("Employees over 40:", over40);

const males = filterEmployees(employees, { gender: "male" });
console.log("Male employees:", males);

const seniorDevs = filterEmployees(employees, { designation: "Senior Developer" });
console.log("Senior Developers:", seniorDevs);

const olderMaleDevs = filterEmployees(employees, { 
  ageAbove: 40, 
  gender: "male", 
  designation: "Senior Developer" 
});
console.log("Combined Criteria Result:", olderMaleDevs);