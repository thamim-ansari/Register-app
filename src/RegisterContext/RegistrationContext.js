import React from 'react'

const RegistrationContext = React.createContext({
  name: '',
  meetupTopic: '',
  isRegistered: false,
  showErrorMessage: false,
  onChangeRegisterStatus: () => {},
  addName: () => {},
  addMeetupTopic: () => {},
  onChangeErrorMessage: () => {},
})

export default RegistrationContext
