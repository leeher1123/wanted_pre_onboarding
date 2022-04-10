import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";

const Slider = () => {
  const [percent, setPercent] = useState(0);
  const [value, setValue] = useState(0);
  const [point, setPoint] = useState(0);

  const onChange = useCallback((e) => {
    setPercent(e.target.value);
    setValue(e.target.value);
    setPoint(e.target.value * 3.5);
  }, []);

  return (
    <Container>
      <PercentBox>
        <h3>{percent}</h3>
        <span>%</span>
      </PercentBox>
      <PercentSlider>
        <Input
          type="range"
          min="0"
          max="100"
          onChange={onChange}
          value={value}
          percent={percent}
        />
        <PercentBar point={point} />
      </PercentSlider>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 70px auto;
`;

const PercentBox = styled.div`
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
  -webkit-appearance: none;
  width: 100%;
  background: transparent;
  height: 5px;
  cursor: pointer;
  border-color: transparent;
  overflow: hidden;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 18px;
    width: 18px;
    border: 3px solid #fff;
    margin-top: -6.5px;
    background-color: #111;
    border-radius: 100%;
    box-shadow: 185.9px 0px 0px 168px #e0e0e0;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    background: #10aeb1;
    height: 5px;
    border-radius: 25px;
  }
`;

const PercentBar = styled.div`
  position: absolute;
  height: 5px;
  background-color: #10aeb1;
  top: 9px;
  border-radius: 25px;
`;

export default Slider;
