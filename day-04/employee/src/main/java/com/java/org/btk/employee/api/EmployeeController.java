package com.java.org.btk.employee.api;

import com.java.org.btk.employee.dataAccess.EmployeeRepository;
import com.java.org.btk.employee.entities.Employee;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/employees")
@CrossOrigin
public class EmployeeController {

    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @GetMapping
    public ResponseEntity<List<Employee>> getAllEmployee() {
         List<Employee>  employees = this.employeeRepository.findAll();
        return new ResponseEntity <List<Employee>> (employees, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getOneEmployee(@PathVariable int id) {
        Optional<Employee> employee = this.employeeRepository.findById(id);
        if (employee.isPresent()) {
            return ResponseEntity.ok( employee.get());
        }
        throw new RuntimeException(String.format("Employee with %s id could not  found", id));
    }
    //localhost/api/employees/search?q=...
    @GetMapping(path = "/search")
    public ResponseEntity<Object> searchByFirstName(@RequestParam(name="q", required = true) String q){
       List<Employee> list = this.employeeRepository.findAllByFirstNameContainingIgnoreCase(q);
       return new ResponseEntity<>(list,HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Employee>  createOneEmployee(@RequestBody Employee employee) {
        Employee emp = this.employeeRepository.save(employee);
        return new ResponseEntity<Employee>(emp,HttpStatus.CREATED);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Employee> deleteOneEmployee(@PathVariable("id") int id) {
        this.employeeRepository.deleteById(id);
       return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateOneEmployee(@PathVariable(name="id", required = true)int id,@RequestBody Employee employee){
        Employee emp = this.employeeRepository.findById(id).orElse(null);
        if(emp!=null){
            emp.setFirstName(employee.getFirstName());
            emp.setLastName(employee.getFirstName());
            return  new ResponseEntity<>(this.employeeRepository.save(employee),HttpStatus.ACCEPTED);

        }
        throw new RuntimeException("Employee this not exists!");
    }


}
