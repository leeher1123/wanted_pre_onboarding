import { useCallback, useState } from 'react'
import styles from './Toggle.module.scss'
import classNames from 'classnames'

function Toggle() {
  const [text, setText] = useState('기본')
  const [isActive, setIsActive] = useState(false)
  const onClickMenu = useCallback(
    (e) => {
      setText(e.currentTarget.innerText)
      setIsActive(!isActive)
    },
    [isActive]
  )
  return (
    <div className={styles.container}>
      <div className={styles.toggleMenu}>
        <div className={classNames([styles.slideBox, { isActive }])}>{text}</div>
        <div className={styles.toggleItem} onClick={onClickMenu}>
          기본
        </div>
        <div className={styles.toggleItem} onClick={onClickMenu}>
          상세
        </div>
      </div>
    </div>
  )
}

export default Toggle
