import logo from './logo.svg';
import './App.css';
import CourseDetail from './Components/CourseDetail';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Course from './Components/Course';

function App() {
  return (
    <div >
      
      <BrowserRouter>
      <Switch> 
      <Route path="/" exact component={Course}/>
        <Route path="/course" component={CourseDetail}/>
      
      </Switch></BrowserRouter>
    </div>
  );
}

export default App;
