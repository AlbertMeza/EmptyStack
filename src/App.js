import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import TaskPage from "./pages/TaskPage";
import LoginPage from "./pages/LoginPage";
import InstructorHome from "./pages/InstructorHome"; // Added by Dorian

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/task" element={<TaskPage />} />
          <Route path="/task/:id" element={<TaskPage editMode={true} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/instructor"
            element={<InstructorHome /* Added by Dorian */ />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
