const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization:"Javascript" },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization:"HR" },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization:"Finance" },
    //... Daha fazla çalışan kaydı buraya eklenebilir
  ];

   // Tüm çalışanları görüntülemek için fonksiyon
   function displayEmployees() {
   const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
   document.getElementById('employeesDetails').innerHTML = totalEmployees;
   
}

   function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Toplam Maaşlar: $${totalSalaries}`);
  }
  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'bu ID ile hiçbir çalışan bulunamadı';

    }
}

function Special()
{
    const foundSpecialization = employees.filter(employee => employee.specialization === 'Javascript');
    if (foundSpecialization.length > 0) {
        const specialDisplay = foundSpecialization.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = specialDisplay;
    } else {
        document.getElementById('employeesDetails').innerHTML = 'Bu uzmanlıkla hiçbir çalışan bulunamadı';
    }
}