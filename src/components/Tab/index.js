import { useCallback, useState } from 'react'
import styles from './Tab.module.scss'
import classNames from 'classnames'

const FOODS = ['감자', '고구마', '카레라이스']

function Tab() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const onClickItem = useCallback((index) => {
    setCurrentIndex(index)
  }, [])

  return (
    <div className={styles.container}>
      <ul className={styles.foodList}>
        {FOODS.map((food, index) => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <li
            className={classNames(styles.foodItem, { isActive: currentIndex === index })}
            key={food}
            onClick={(e) => onClickItem(e, index)}
          >
            {food}
          </li>
        ))}
        <div
          className={(styles.itemBar, { one: currentIndex === 1 }, { two: currentIndex === 2 })}
          index={currentIndex}
        />
      </ul>
    </div>
  )
}

export default Tab
