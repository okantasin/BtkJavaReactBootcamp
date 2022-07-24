package com.java.org.btk.employee.api;

import com.java.org.btk.employee.dataAccess.EmployeeRepository;
import com.java.org.btk.employee.entities.Employee;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/employees")
public class EmployeeController {

    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @GetMapping
    public List<Employee> getAllEmployee() {
        return this.employeeRepository.findAll();
    }

    @GetMapping("/{id}")
    public Employee getOneEmployee(@PathVariable int id) {
        Optional<Employee> employee = this.employeeRepository.findById(id);
        if (employee.isPresent()) {
            return employee.get();
        }
        throw new RuntimeException(String.format("Employee with %s id could not  found", id));
    }

    @PostMapping
    public Employee createOneEmployee(@RequestBody Employee employee) {
        return this.employeeRepository.save(employee);

    }

    @DeleteMapping("/{id}")
    public void deleteOneEmployee(@PathVariable("id") int id) {
        this.employeeRepository.deleteById(id);
    }


}
