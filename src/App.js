import React from "react";
import './App.css'
import {action,originals,Horror,Comedy,Romance,trending} from './url'
import NavBar from "./Components/Navbar/NavBar"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={Comedy} title='Comedy' isSmall/>
      <RowPost url={Horror} title='Horror' isSmall/>
      <RowPost url={Romance} title='Romance' isSmall/>
      <RowPost url={trending} title='Trendings' isSmall/>



      
    </div>
  );
}

export default App;
