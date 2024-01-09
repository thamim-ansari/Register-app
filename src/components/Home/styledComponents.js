import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HomeResponsiveContainer = styled.div`
  width: 90%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HomeHeading = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 45px;
  margin-bottom: 15px;
`
export const HomeDescription = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 18px;
  margin: 0px;
`
export const RegisterButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  font-family: 'Roboto';
  font-size: 12px;
  padding: 8px 16px;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const HomeImage = styled.img`
  width: 700px;
`
export const RegistrationSuccessHeading = styled.h1`
  color: #2563eb;
  font-family: 'Roboto';
  font-size: 64px;
  margin-bottom: 10px;
`
export const RegistrationSuccessDescription = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 25px;
`
