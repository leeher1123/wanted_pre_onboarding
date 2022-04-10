import React, { useCallback, useState } from "react";
import styled from "styled-components";
import cn from "classnames";

const Toggle = () => {
  const [text, setText] = useState("기본");
  const [isActive, setIsActive] = useState(false);
  const onClickMenu = useCallback(
    (e) => {
      setText(e.target.innerText);
      setIsActive(!isActive);
    },
    [isActive]
  );
  return (
    <Container>
      <ToggleMenu>
        <SlideItem className={cn({ isActive })}>{text}</SlideItem>
        <MenuItem onClick={onClickMenu}>기본</MenuItem>
        <MenuItem onClick={onClickMenu}>상세</MenuItem>
      </ToggleMenu>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 70px;
`;

const ToggleMenu = styled.div`
  position: relative;
  width: 400px;
  background-color: #eee;
  border-radius: 25px;
  margin: 0 auto;
  display: flex;
  padding: 3px;
`;

const SlideItem = styled.div`
  position: absolute;
  width: 200px;
  height: 35px;
  border-radius: 25px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: 0.2s;
  &.isActive {
    transform: translate(100%);
  }
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 35px;
  border-radius: 25px;
  color: #767676;
  font-weight: bold;
  cursor: pointer;
`;

export default Toggle;
