import { useCallback, useEffect, useState } from 'react'
import styles from './Input.module.scss'
import classNames from 'classnames'

import { AiFillCheckCircle, AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const isEmail = (email) => {
  const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return EMAIL_REGEX.test(email)
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
    <div className={styles.container}>
      <div className={styles.layout}>
        <span>E-mail</span>
        <input
          className={styles.inputBox}
          type='text'
          placeholder='E-mail'
          onChange={onChangeEmail}
          value={email}
          onBlur={handleBlur}
        />
        <div className={classNames(styles.emailIcon, { isActive: emailIconValidate })}>
          <AiFillCheckCircle />
        </div>
        {validation ? <div className={styles.errorCode}>Invalid e-mail address.</div> : null}
      </div>
      <div className={styles.layout}>
        <span>Password</span>
        <input className={styles.inputBox} type={`${passwordType}`} placeholder='Password' />
        <div className={styles.passwordIcon} onMouseDown={onClickIcon}>
          {passwordType === 'password' ? <AiFillEyeInvisible /> : <AiFillEye />}
        </div>
      </div>
    </div>
  )
}

export default Input
