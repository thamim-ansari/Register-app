import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'

import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import RegistrationContext from './RegisterContext/RegistrationContext'
import './App.css'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class App extends Component {
  state = {
    topicListData: topicsList,
    name: '',
    meetupTopic: topicsList[0].id,
    showErrorMessage: false,
    isRegistered: false,
  }

  onChangeRegisterStatus = () => {
    this.setState({isRegistered: true})
  }

  addName = nameInput => {
    this.setState({name: nameInput})
  }

  addMeetupTopic = topicInput => {
    this.setState({meetupTopic: topicInput})
  }

  onChangeErrorMessage = () => {
    this.setState({showErrorMessage: true})
  }

  render() {
    const {
      topicListData,
      name,
      meetupTopic,
      isRegistered,
      showErrorMessage,
    } = this.state
    return (
      <RegistrationContext.Provider
        value={{
          topicListData,
          name,
          meetupTopic,
          isRegistered,
          showErrorMessage,
          onChangeRegisterStatus: this.onChangeRegisterStatus,
          addName: this.addName,
          addMeetupTopic: this.addMeetupTopic,
          onChangeErrorMessage: this.onChangeErrorMessage,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegistrationContext.Provider>
    )
  }
}

export default App
