import { useCallback, useState } from 'react'
import styles from './Tab.module.scss'
import classNames from 'classnames'

const FOODS = ['감자', '고구마', '카레라이스']

function Tab() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleClick = useCallback((_, index) => {
    setCurrentIndex(index)
  }, [])

  return (
    <div className={styles.container}>
      <ul className={styles.foodList}>
        {FOODS.map((food, index) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li
            className={classNames(styles.foodItem, currentIndex === index && styles.isActive)}
            key={`food-item-${food}`}
            onClick={(e) => handleClick(e, index)}
          >
            {food}
          </li>
        ))}
        <div
          className={classNames(styles.itemBar, currentIndex === 1 && styles.one, currentIndex === 2 && styles.two)}
          index={currentIndex}
        />
      </ul>
    </div>
  )
}

export default Tab
