function updateEmployeeDetails(emp,role){
    const obj={...emp};
    obj.role=role;
    return obj
}
const employee = {name: 'Afroz', role: 'Developer', age: 28, location: 'IN'}
console.log(updateEmployeeDetails (employee, 'Senior Developer'))
