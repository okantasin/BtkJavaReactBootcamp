package com.java.org.btk.employee.api;

import com.java.org.btk.employee.dataAccess.EmployeeRepository;
import com.java.org.btk.employee.entities.Employee;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/employees")
public class EmployeeController {

    private final EmployeeRepository employeeRepository;

    public EmployeeController(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @GetMapping
    public List<Employee>  getOneEmployee() {
        return this.employeeRepository.findAll();
    }

    @PostMapping
    public Employee createOneEmployee(@RequestBody Employee employee){
        return this.employeeRepository.save(employee);

    }
}
