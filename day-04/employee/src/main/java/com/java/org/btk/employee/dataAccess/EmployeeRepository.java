package com.java.org.btk.employee.dataAccess;

import com.java.org.btk.employee.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
}
