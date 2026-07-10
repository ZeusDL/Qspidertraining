// Create an object
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
  email: "alice@example.com"
};

console.log("=== Original Object ===");
console.log(person);

// Read values from object
console.log("\n=== Reading Values ===");
console.log("Name:", person.name);           // Dot notation
console.log("Age:", person["age"]);          // Bracket notation
console.log("City:", person.city);

// Update existing values
console.log("\n=== Updating Values ===");
person.age = 31;                             // Update using dot notation
person["city"] = "Boston";                   // Update using bracket notation
console.log("Updated age:", person.age);
console.log("Updated city:", person.city);
console.log("Updated object:", person);

// Delete properties permanently
console.log("\n=== Deleting Properties ===");
delete person.email;                         // Delete using delete keyword
console.log("After deleting email:", person);
console.log("Email property exists?", person.email); // undefined

// Check if property exists
console.log("\n=== Checking Properties ===");
console.log("Has 'name' property?", "name" in person);
console.log("Has 'email' property?", "email" in person);
console.log("Has 'age' property?", "age" in person);

console.log("\n=== Final Object ===");
console.log(person);