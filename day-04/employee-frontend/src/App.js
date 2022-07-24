import { useEffect, useState } from "react";
import EmployeeService from "./services/EmployeeService";
import EmployeeList from "./components/EmployeeList";


function App() {
  const employeeService = new EmployeeService();
  const [employees, setEmployees] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    employeeService.getAllEmployees().then((resp) => setEmployees(resp.data));
  }, [refresh]);

  return (
    <div>


      <EmployeeList
        employees={employees}
        setRefresh={setRefresh}
        refresh={refresh}
      />
    </div>



  );
}
export default App;
