import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import ThemeContext from './context'
import Home from './components/Home'
import VaccinationDetails from './components/Vaccination'
import About from './components/About'
import StateSpecific from './components/StateSpecificRoute'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {activeSectionId: 'HOME'}

  changeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  changeActiveSection = id => {
    this.setState({activeSectionId: id})
  }

  render() {
    const {activeSectionId} = this.state
    return (
      <ThemeContext.Provider
        value={{
          activeSectionId,
          changeTheme: this.changeTheme,
          changeActiveSection: this.changeActiveSection,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/vaccination" component={VaccinationDetails} />
          <Route exact path="/about" component={About} />
          <Route exact path="/state/:stateCode" component={StateSpecific} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
