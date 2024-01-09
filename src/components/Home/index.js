import {Link} from 'react-router-dom'

import Header from '../Header'

import RegistrationContext from '../../RegisterContext/RegistrationContext'
import {
  HomeContainer,
  HomeResponsiveContainer,
  HomeHeading,
  HomeDescription,
  RegisterButton,
  HomeImage,
  RegistrationSuccessHeading,
  RegistrationSuccessDescription,
} from './styledComponents'

const Home = () => (
  <RegistrationContext.Consumer>
    {value => {
      const {topicListData, name, meetupTopic, isRegistered} = value

      const topic = topicListData.find(eachItem => eachItem.id === meetupTopic)

      const renderYetToRegisterView = () => (
        <>
          <HomeHeading>Welcome to Meetup</HomeHeading>
          <HomeDescription>Please register for the topic</HomeDescription>
          <Link to="/register">
            <RegisterButton>Register</RegisterButton>
          </Link>
          <HomeImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </>
      )
      const renderRegisteredView = () => (
        <>
          <RegistrationSuccessHeading>Hello {name}</RegistrationSuccessHeading>
          <RegistrationSuccessDescription>
            Welcome to {topic.displayText}
          </RegistrationSuccessDescription>
          <HomeImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </>
      )
      return (
        <HomeContainer>
          <Header />
          <HomeResponsiveContainer>
            {isRegistered ? renderRegisteredView() : renderYetToRegisterView()}
          </HomeResponsiveContainer>
        </HomeContainer>
      )
    }}
  </RegistrationContext.Consumer>
)

export default Home
