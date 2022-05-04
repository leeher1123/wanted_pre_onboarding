import { useCallback, useState } from 'react'
import styled, { css } from 'styled-components'
import cn from 'classnames'

function Tab() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const foods = ['감자', '고구마', '카레라이스']

  const onClickItem = useCallback((e, index) => {
    setCurrentIndex(index)
  }, [])

  return (
    <Container>
      <FoodList>
        {foods.map((food, index) => (
          <FoodItem
            key={food}
            onClick={(e) => onClickItem(e, index)}
            className={cn({ isActive: currentIndex === index })}
          >
            {food}
          </FoodItem>
        ))}
        <ItemBar index={currentIndex} />
      </FoodList>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 70px;
`

const FoodList = styled.div`
  width: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  background-color: #fdfdfd;
  border-bottom: 2px solid #eee;
  position: relative;
`

const ItemBar = styled.div`
  width: 150px;
  height: 2px;
  background-color: #10aeb1;
  position: absolute;
  top: 56px;
  left: 15px;
  transition: 0.2s;
  ${({ index }) =>
    index === 1 &&
    css`
      transform: translateX(150px);
    `}
  ${({ index }) =>
    index === 2 &&
    css`
      transform: translateX(300px);
    `}
`

const FoodItem = styled.div`
  width: 150px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &.isActive {
    color: #111;
  }
`

export default Tab
