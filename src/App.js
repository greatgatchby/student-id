import './App.css';
import StudentCard from "./components/student-card";
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from "./components/button";
import student from './assets/student.json'
function App() {
  const [state, setState] = useState('front')
  const handleFlip = () => {
    if (state === 'front') {
      document.getElementById('student-card').classList.add('rotate')
      setState('back')
    } else {
      document.getElementById('student-card').classList.remove('rotate')
      setState('front')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <StudentCard onClick={handleFlip} student={student} />
        <Button state={state} onClick={handleFlip}/>
      </header>
    </div>
  );
}

export default App;
