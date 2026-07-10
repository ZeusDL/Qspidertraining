const employees = [
  {
    id: 1,
    name: "Sumanth",
    designation: "Senior Developer",
    department: "IT",
    salary: 75000,
    email: "sumanth@company.com",
    joinDate: "2020-05-15",
    age: 42,
    gender: "male"
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Product Manager",
    department: "Product",
    salary: 70000,
    email: "jane.smith@company.com",
    joinDate: "2019-08-22",
    age: 35,
    gender: "female"
  },
  {
    id: 3,
    name: "Mike Johnson",
    designation: "Junior Developer",
    department: "IT",
    salary: 50000,
    email: "mike.johnson@company.com",
    joinDate: "2021-03-10",
    age: 28,
    gender: "male"
  },
  {
    id: 4,
    name: "Sarah Williams",
    designation: "HR Manager",
    department: "Human Resources",
    salary: 65000,
    email: "sarah.williams@company.com",
    joinDate: "2018-11-05",
    age: 45,
    gender: "female"
  },
  {
    id: 5,
    name: "David Brown",
    designation: "QA Engineer",
    department: "Quality Assurance",
    salary: 55000,
    email: "david.brown@company.com",
    joinDate: "2020-09-18",
    age: 31,
    gender: "male"
  }
];

const employeesOver40 = employees.filter(emp => emp.age > 40);
console.log("Employees over 40:", employeesOver40);

const maleEmployees = employees.filter(emp => emp.gender === "male");
console.log("Male employees:", maleEmployees);

const seniorDevelopers = employees.filter(emp => emp.designation === "Senior Developer");
console.log("Senior Developers:", seniorDevelopers);