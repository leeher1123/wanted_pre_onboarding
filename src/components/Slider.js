import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const Slider = () => {
  const point = [1, 25, 50, 75, 100];
  const [percent, setPercent] = useState(0);

  const onChange = useCallback((e) => {
    setPercent(e.target.value);
  }, []);

  const onClickPoint = (e) => {
    const count = e.target.innerText;
    setPercent(parseInt(count));
  };

  return (
    <Container>
      <CountBox>
        <h3>{percent}</h3>
        <span>%</span>
      </CountBox>
      <PercentSlider>
        <Input
          type='range'
          min='0'
          max='100'
          value={percent}
          onChange={onChange}
          percent={percent}
        />
        <PointList>
          {point.map((item) => (
            <PointItem key={item} onClick={onClickPoint}>
              {item}%
            </PointItem>
          ))}
        </PointList>
      </PercentSlider>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 70px auto;
`;

const CountBox = styled.div`
  width: 300px;
  height: 35px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #faf9f9;
  padding: 10px 30px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span {
    margin-left: 20px;
    color: #797878;
  }
  h3 {
    font-size: 17px;
  }
`;

const PercentSlider = styled.div`
  position: relative;
  width: 350px;
  margin: 30px auto;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  background: transparent;
  height: 5px;
  cursor: pointer;
  border-color: transparent;
  background-color: #10aeb1;
`;

const PointList = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 350px;
  top: 17px;
`;

const PointItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 18px;
  cursor: pointer;
  background-color: #eee;
  border-radius: 25px;
  font-size: 12px;
  color: #b9b8b8;

  &:hover {
    background-color: #18f;
    color: #fff;
  }
`;

export default Slider;
