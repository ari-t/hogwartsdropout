import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Bored from './Bored'
// import SortingHat from './SortingHat'

const App = () => {
  return (
    <Router>
      <div className='wrapper'>
        <div className='container'>
          <Route exact path='/home' component={Bored}/>
          {/* <Route path='/sort' component={SortingHat}/> */}
        </div>
      </div>
    </Router>
  )
}

export default App
