import Header from '../Header'

import RegistrationContext from '../../RegisterContext/RegistrationContext'

import {
  RegisterContainer,
  RegisterResponsiveContainer,
  RegisterContentContainer,
  RegistrationImage,
  RegistrationFormContainer,
  RegistrationFormHeading,
  RegistrationFormInputContainer,
  RegistrationFormInputLabel,
  RegistrationFormInput,
  RegistrationTopic,
  RegistrationTopicOption,
  RegisterNowButton,
  ErrorMessage,
} from './styledComponents'

const Register = props => (
  <RegistrationContext.Consumer>
    {value => {
      const {
        topicListData,
        name,
        meetupTopic,
        showErrorMessage,
        addName,
        addMeetupTopic,
        onChangeRegisterStatus,
        onChangeErrorMessage,
      } = value

      const onChangeName = event => {
        addName(event.target.value)
      }

      const onChangeTopic = event => {
        addMeetupTopic(event.target.value)
      }

      const onSubmitRegistrationForm = event => {
        event.preventDefault()
        if (name !== '' && meetupTopic !== '') {
          const {history} = props
          history.replace('/')
          onChangeRegisterStatus()
        } else {
          onChangeErrorMessage()
        }
      }
      return (
        <RegisterContainer>
          <Header />
          <RegisterResponsiveContainer>
            <RegisterContentContainer>
              <RegistrationImage
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <RegistrationFormContainer onSubmit={onSubmitRegistrationForm}>
                <RegistrationFormHeading>Let us join</RegistrationFormHeading>
                <RegistrationFormInputContainer>
                  <RegistrationFormInputLabel htmlFor="name">
                    NAME
                  </RegistrationFormInputLabel>
                  <RegistrationFormInput
                    id="name"
                    type="text"
                    value={name}
                    placeholder="Your name"
                    onChange={onChangeName}
                  />
                </RegistrationFormInputContainer>
                <RegistrationFormInputContainer>
                  <RegistrationFormInputLabel>
                    TOPICS
                  </RegistrationFormInputLabel>
                  <RegistrationTopic
                    value={meetupTopic}
                    onChange={onChangeTopic}
                  >
                    {topicListData.map(eachItem => (
                      <RegistrationTopicOption
                        key={eachItem.id}
                        value={eachItem.id}
                      >
                        {eachItem.displayText}
                      </RegistrationTopicOption>
                    ))}
                  </RegistrationTopic>
                </RegistrationFormInputContainer>
                <RegisterNowButton type="submit">
                  Register Now
                </RegisterNowButton>
                {showErrorMessage && (
                  <ErrorMessage>Please enter your name</ErrorMessage>
                )}
              </RegistrationFormContainer>
            </RegisterContentContainer>
          </RegisterResponsiveContainer>
        </RegisterContainer>
      )
    }}
  </RegistrationContext.Consumer>
)

export default Register
