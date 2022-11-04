import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import StudentDashboard from "./pages/StudentDashboard";
import TaskPage from "./pages/TaskPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ComfortPage from "./pages/ComfortPage";
import InstructorDashboard from "./pages/InstructorDashboard";
import React from 'react';
import Cookies from 'js-cookie';


//const App = () => {
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        username: Cookies.get('username'),
        isInstructor: false,
        sessionObj: null
      }
  };

  handleChange(e) {
    this.setState({
      username: e.target.username,
      isInstructor: e.target.isinstructor,
      sessionObj: e.target.sessionObj
    })
  }

  render() {
    const { username, isInstructor, sessionObj } = this.props;

    return (
      <div className="app">
        <BrowserRouter>
          <Nav />
          <Routes>

              <Route path='/student/dashboard' element={<StudentDashboard/>} component={username}/>
              <Route path='/task' element={<TaskPage/>}/>
              <Route path='/taskComfort' element={<ComfortPage/>}/>
              <Route path='/task/:id' element={<TaskPage editMode={true}/>}/>
              <Route path='/' element={<LoginPage/>}/>
              <Route path='/register' element={<RegisterPage/>}/>
              <Route path='/instructor/dashboard' element={<InstructorDashboard/>}/>
              
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
};

export default App;