import styled from 'styled-components'

export const LoginPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginContainer = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 20px 10px 20px 30px #f1f5f9;
  padding: 12px;
  border-radius: 10px;
`
export const Image = styled.img`
  width: 100px;
  height: 30px;
  margin-bottom: 20px;
  margin-top: 20px;
`

export const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Input = styled.input`
  font-family: 'Roboto';
  font-size: 13px;
  width: 250px;
  padding: 6px 10px 6px 10px;
  outline: none;
  margin-bottom: 10px;
`
export const InputLight = styled(Input)`
  color: #475569;
  background-color: transparent;
  border: 1px solid #e2e8f0;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: bold;
  padding-bottom: 10px;
`
export const LabelLight = styled(Label)`
  color: #94a3b8;
`
export const LabelShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 13px;
  color: #181818;
  font-weight: bold;
  padding-left: 5px;
`
export const PasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  padding-left: 10px;
  padding-top: 10px;
`
export const InputCheckbox = styled.input`
  outline: none;
`
export const ButtonLogin = styled.button`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  color: #ffffff;
  background-color: #3b82f6;
  border-width: 0px;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 23px;
  width: 90%;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 6px;
`
export const LoginPageDark = styled.div`
  background-color: #0f0f0f;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LoginContainerDark = styled.form`
  background-color: #1e293b;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-radius: 10px;
`
export const LabelDark = styled(Label)`
  color: #ffffff;
`
export const InputDark = styled(Input)`
  color: #e2e8f0;
  background-color: transparent;
  border: 1px solid #616e7c;
`
export const LabelShowPasswordDark = styled.label`
  font-family: 'Roboto';
  font-size: 13px;
  color: #ffffff;
  font-weight: bold;
  padding-left: 5px;
`
