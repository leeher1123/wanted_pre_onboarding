import { useCallback, useState } from 'react'
import styles from './Slider.module.scss'

const POINT = [1, 25, 50, 75, 100]

function Slider() {
  const [percent, setPercent] = useState(0)

  const onChange = useCallback((e) => {
    setPercent(e.currentTarget.value)
  }, [])

  const onClickPoint = (e) => {
    const count = e.currentTarget.innerText
    setPercent(parseInt(count, 10))
  }

  return (
    <div className={styles.container}>
      <div className={styles.countBox}>
        <h3>{percent}</h3>
        <span>%</span>
      </div>
      <div className={styles.percentSlider}>
        <input
          className={styles.sliderInput}
          type='range'
          min='0'
          max='100'
          value={percent}
          onChange={onChange}
          percent={percent}
        />
        <div className={styles.pointList}>
          {POINT.map((item) => (
            <div className={styles.pointItem} key={item} onClick={onClickPoint}>
              {item}%
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
