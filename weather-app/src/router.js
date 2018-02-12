import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
 
const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Weekly</Link></li>
        <li><Link to="/day">Day</Link></li>
    
      </ul>

      <hr/>

      <Route exact path="/" component={Weekly}/>
      <Route path="/day" component={Day}/>
    
    </div>
  </Router>
)

const Weekly = () => (
  <div>
    <h2>Weekly</h2>
  </div>
)

const Day = () => (
  <div>
    <h2>Day</h2>
  </div>
)

export default BasicExample