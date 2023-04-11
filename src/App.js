
import './App.css';
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Card'
import React from 'react';
import {originals,comedy,action} from "./Constance/url";

function App() {
  return (
<div>
<Header/>
<Banner/>
<Cards url={originals}/>
<Cards url={comedy}/>
<Cards url={action}/>

</div>
   
  )
}



export default App;
