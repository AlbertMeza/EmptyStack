import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TaskPage from "./pages/TaskPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/task' element={<TaskPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
