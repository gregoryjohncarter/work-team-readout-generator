const Employee = require('../lib/Employee.js');

test('get employee\'s name', () => {
    const employee = new Employee('Sam', '1', 'Sam@Gmail.com');
  
    expect(employee.name).toBe('Sam');
});

test('get employee\'s id', () => {
    const employee = new Employee('Sam', '1', 'Sam@Gmail.com');
  
    expect(employee.id).toBe('1');
});

test('get employee\'s email', () => {
    const employee = new Employee('Sam', '1', 'Sam@Gmail.com');
  
    expect(employee.email).toBe('Sam@Gmail.com');
});

test('get employee\'s role returns "Employee"', () => {
    const employee = new Employee('Sam', '1', 'Sam@Gmail.com');
  
    expect(employee.role).toBe('Employee');
});