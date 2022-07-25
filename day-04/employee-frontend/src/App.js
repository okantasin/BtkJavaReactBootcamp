import { useEffect, useState } from "react";
import EmployeeService from "./services/EmployeeService";
import EmployeeList from "./components/EmployeeList";
import EmployeeAdd from "./components/EmployeeAdd";
import TopMenu from "./components/TopMenu";
import Search from "./components/Search";
import { Grid } from "@mui/material";

function App() {
  const employeeService = new EmployeeService();
  const [employees, setEmployees] = useState([]);
  const [refresh, setRefresh] = useState(false);


  useEffect(() => {
    employeeService.getAllEmployees().then((resp) => setEmployees(resp.data));
  }, [refresh]);

  return (
    <Grid fluid>
      <Grid item>
        <TopMenu />
        <Search
          setEmployees={setEmployees}
          setRefresh={setRefresh}
          refresh={refresh}
        />
        <Grid container>
          <Grid item xs={8}>
            <EmployeeList
              employees={employees}
              setRefresh={setRefresh}
              refresh={refresh}
            />
            </Grid>
            <Grid xs={4}>
            <EmployeeAdd
              employees={employees}
              setRefresh={setRefresh}
              refresh={refresh}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>



  );
}
export default App;
