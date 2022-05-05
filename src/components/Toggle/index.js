import { useCallback, useState } from 'react'
import styles from './Toggle.module.scss'
import classNames from 'classnames'

function Toggle() {
  const [text, setText] = useState('기본')
  const [isActive, setIsActive] = useState(false)
  const handleClick = useCallback(
    (e) => {
      setText(e.currentTarget.innerText)
      setIsActive(!isActive)
    },
    [isActive]
  )
  return (
    <div className={styles.container}>
      <div className={styles.toggleMenu}>
        <div className={classNames([styles.slideBox, isActive && styles.isActive])}>{text}</div>
        <div className={styles.toggleItem} onClick={handleClick}>
          기본
        </div>
        <div className={styles.toggleItem} onClick={handleClick}>
          상세
        </div>
      </div>
    </div>
  )
}

export default Toggle
