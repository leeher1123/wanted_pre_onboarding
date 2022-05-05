import { useCallback, useState } from 'react'
import styles from './Slider.module.scss'

const POINT = [1, 25, 50, 75, 100]

function Slider() {
  const [percent, setPercent] = useState(1)

  const handleChange = useCallback((e) => {
    setPercent(e.currentTarget.value)
  }, [])

  const handleClick = (e) => {
    const { number } = e.currentTarget.dataset
    setPercent(parseInt(number, 10))
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
          onChange={handleChange}
          percent={percent}
        />
        <div className={styles.pointList}>
          {POINT.map((item) => (
            <div className={styles.pointItem} key={`point-${item}`} data-number={item} onClick={handleClick}>
              {item}%
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Slider
