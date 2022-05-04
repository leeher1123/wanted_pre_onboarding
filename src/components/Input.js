import { useCallback, useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import { AiFillCheckCircle, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const isEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return emailRegex.test(email)
}

function Input() {
  const [email, setEmail] = useState('')
  const [passwordType, setPasswordType] = useState('password')
  const [emailIconValidate, setEmailIconValidate] = useState(false)
  const [validation, setValidation] = useState(false)

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value)
  }, [])

  const onClickIcon = useCallback(() => {
    if (passwordType === 'text') {
      setPasswordType('password')
    } else {
      setPasswordType('text')
    }
  }, [passwordType])

  const handleBlur = useCallback(() => {
    setValidation(!isEmail(email))
  }, [email])

  useEffect(() => {
    setEmailIconValidate(isEmail(email))
  }, [email])

  return (
    <Container>
      <Layout>
        <span>E-mail</span>
        <InputBox type='text' placeholder='E-mail' onChange={onChangeEmail} value={email} onBlur={handleBlur} />
        <EmailIcon validation={emailIconValidate}>
          <AiFillCheckCircle />
        </EmailIcon>
        {validation ? <ErrorCode>Invalid e-mail address.</ErrorCode> : null}
      </Layout>
      <Layout>
        <span>Password</span>
        <InputBox type={`${passwordType}`} placeholder='Password' />
        <PasswordIcon onMouseDown={onClickIcon}>
          {passwordType === 'password' ? <AiFillEyeInvisible /> : <AiFillEye />}
        </PasswordIcon>
      </Layout>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 70px;
`

const Layout = styled.div`
  position: relative;
  width: 300px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  color: #767676;
  span {
    font-size: 12px;
  }
`

const InputBox = styled.input`
  display: block;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 3px;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  background-color: #fafafa;

  ::-webkit-input-placeholder {
    color: #cecece;
  }
`

const iconStyle = css`
  position: absolute;
  top: 26px;
  right: 13px;

  svg {
    fill: #d0d0d0;
    font-size: 18px;
  }
`

const EmailIcon = styled.div`
  ${iconStyle};
  ${({ validation }) =>
    validation &&
    css`
      svg {
        fill: #10aeb1;
      }
    `}
`

const PasswordIcon = styled.div`
  ${iconStyle};
  cursor: pointer;
`

const ErrorCode = styled.div`
  color: #c51313;
  font-size: 13px;
  padding: 5px;
`

export default Input
