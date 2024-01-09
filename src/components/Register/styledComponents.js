import styled from 'styled-components'

export const RegisterContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const RegisterResponsiveContainer = styled.div`
  width: 45%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const RegisterContentContainer = styled.div`
  display: flex;
  width: 100%;
`
export const RegistrationImage = styled.img`
  width: 350px;
  height: 335px;
`
export const RegistrationFormContainer = styled.form`
  flex-grow: 1;
`
export const RegistrationFormHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 10px;
`
export const RegistrationFormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
export const RegistrationFormInputLabel = styled.label`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 8px;
`
export const RegistrationFormInput = styled.input`
  font-family: 'Roboto';
  border: 1px solid #cbd5e1;
  height: 40px;
  padding-left: 10px;
  outline: none;
  border-radius: 3px;
`
export const RegistrationTopic = styled.select`
  font-family: 'Roboto';
  font-size: 14px;
  border: 1px solid #cbd5e1;
  height: 40px;
  padding-left: 10px;
  border-radius: 3px;
  outline: none;
`
export const RegistrationTopicOption = styled.option`
  font-family: 'Roboto';
  font-size: 14px;
`
export const RegisterNowButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  font-family: 'Roboto';
  font-size: 12px;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-bottom: 5px;
  margin-top: 10px;
`
export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 12px;
  margin: 0px;
`
